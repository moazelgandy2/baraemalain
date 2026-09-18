import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type SupportedLang = 'ar' | 'en';

const STORAGE_KEY = 'baream-lang';
const DEFAULT_LANG: SupportedLang = 'ar';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly langs: readonly SupportedLang[] = ['ar', 'en'];

  private readonly currentSubject = new BehaviorSubject<SupportedLang>(DEFAULT_LANG);

  constructor(
    private readonly translate: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.translate.addLangs([...this.langs]);
    this.translate.setDefaultLang(DEFAULT_LANG);
  }

  get current$(): Observable<SupportedLang> {
    return this.currentSubject.asObservable();
  }

  getCurrent(): SupportedLang {
    return this.currentSubject.value;
  }

  init(): void {
    const stored = this.readStoredLang();
    this.setLang(stored);
  }

  setLang(lang: SupportedLang): void {
    const next: SupportedLang = lang === 'en' ? 'en' : 'ar';
    this.translate.use(next);
    this.currentSubject.next(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable (private mode) — language still applies for session
    }
    const dir = next === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.lang = next;
    this.document.documentElement.dir = dir;
    if (this.document.body) {
      this.document.body.dir = dir;
    }
  }

  toggle(): SupportedLang {
    const next: SupportedLang = this.getCurrent() === 'ar' ? 'en' : 'ar';
    this.setLang(next);
    return next;
  }

  private readStoredLang(): SupportedLang {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw === 'en' ? 'en' : 'ar';
    } catch {
      return DEFAULT_LANG;
    }
  }
}
