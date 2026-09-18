import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LanguageService, SupportedLang } from '../../../core/language.service';

const GUIDE_PDFS: Record<SupportedLang, { path: string; label: string }> = {
  ar: {
    path: 'assets/Files/دليل ولي الأمر_براعم العين 2026-2027.pdf',
    label: 'دليل ولي الأمر_براعم العين 2026-2027.pdf',
  },
  en: {
    path: 'assets/Files/Baraem_Al_Ain_Parent_Handbook_2026_2027.pdf',
    label: 'Baraem_Al_Ain_Parent_Handbook_2026_2027.pdf',
  },
};

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss'
})
export class GuideComponent implements OnInit, OnDestroy {
  pdfPath = GUIDE_PDFS['ar'].path;
  encodedPdfPath = encodeURI(GUIDE_PDFS['ar'].path);
  pdfLabel = GUIDE_PDFS['ar'].label;
  safePdfUrl: SafeResourceUrl;
  private langSub: Subscription | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private languageService: LanguageService,
  ) {
    this.safePdfUrl = this.toSafeUrl(this.pdfPath);
  }

  ngOnInit(): void {
    this.applyLang(this.languageService.getCurrent());
    this.langSub = this.languageService.current$.subscribe((lang) =>
      this.applyLang(lang),
    );
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.langSub = null;
  }

  private applyLang(lang: SupportedLang): void {
    const entry = GUIDE_PDFS[lang] ?? GUIDE_PDFS['ar'];
    this.pdfPath = entry.path;
    this.encodedPdfPath = encodeURI(entry.path);
    this.pdfLabel = entry.label;
    this.safePdfUrl = this.toSafeUrl(entry.path);
  }

  private toSafeUrl(path: string): SafeResourceUrl {
    // Encode spaces / non-ASCII for the iframe src while the on-disk name stays as-is
    return this.sanitizer.bypassSecurityTrustResourceUrl(encodeURI(path));
  }
}
