import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Output,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { LanguageService } from "../../core/language.service";

export interface PolicyLink {
  labelKey: string;
  href: string;
  latin?: boolean;
}

export interface NavPage {
  page: string;
  label: string;
}

@Component({
  selector: "app-main-banner",
  templateUrl: "./main-banner.component.html",
  styleUrl: "./main-banner.component.scss",
})
export class MainBannerComponent {
  @Output() PageEvent = new EventEmitter<string>();
  isNavbarCollapsed = true;

  /** Mobile drawer accordion state — null = all collapsed (matches Image 2). */
  openSection: string | null = null;
  openSub: string | null = null;
  listScrolled = false;

  private drawerResetTimer: ReturnType<typeof setTimeout> | null = null;

  onDrawerScroll(event: Event): void {
    const scrolled = ((event.target as HTMLElement | null)?.scrollTop ?? 0) > 4;
    if (scrolled !== this.listScrolled) {
      this.listScrolled = scrolled;
    }
  }

  policies: PolicyLink[] = [
    {
      labelKey: "nav.policy_cultural",
      href: "assets/Files/Policies/Cultural Conciderations.pdf",
    },
    {
      labelKey: "nav.policy_child",
      href: "assets/Files/Policies/Child Protection.pdf",
    },
    {
      labelKey: "nav.policy_digital",
      href: "assets/Files/Policies/Digital.pdf",
    },
    {
      labelKey: "nav.policy_parents",
      href: "assets/Files/Policies/Parents Participation.pdf",
    },
    {
      labelKey: "nav.policy_safeguarding",
      href: "assets/Files/Policies/Safeguarding.pdf",
    },
    {
      labelKey: "nav.policy_behavior",
      href: "assets/Files/Policies/Students Behavior.pdf",
    },
    {
      labelKey: "nav.policy_wellbeing",
      href: "assets/Files/Policies/Students' Psychological Well-being.pdf",
    },
    {
      labelKey: "nav.policy_risks",
      href: "assets/Files/Policies/Educational Risks.pdf",
    },
    {
      labelKey: "nav.policy_emergency",
      href: "assets/Files/Policies/Emergency.pdf",
    },
    {
      labelKey: "nav.policy_fees",
      href: "assets/Files/Policies/School Fees.pdf",
    },
    {
      labelKey: "nav.policy_advising",
      href: "assets/Files/Policies/Profissioal Advising.pdf",
    },
    {
      labelKey: "nav.policy_transport",
      href: "assets/Files/Policies/Transportation.pdf",
    },
    {
      labelKey: "nav.policy_assessment",
      href: "assets/Files/Policies/Assessment.pdf",
    },
    {
      labelKey: "nav.policy_health",
      href: "assets/Files/Policies/سياسة الصحة والسلامة.pdf",
    },
    {
      labelKey: "nav.policy_transport_ar",
      href: "assets/Files/Policies/سياســة النقل.pdf",
    },
    {
      labelKey: "nav.policy_transport_en",
      href: "assets/Files/Policies/Transport Policy.pdf",
      latin: true,
    },
    {
      labelKey: "nav.policy_health_en",
      href: "assets/Files/Policies/Health and Safety Policy.pdf",
      latin: true,
    },
    {
      labelKey: "nav.policy_org",
      href: "assets/Files/Organizational Structure.pdf",
    },
  ];

  eduApps: NavPage[] = [
    { page: "LMS", label: "LMS" },
    { page: "McGrawHill", label: "McGraw Hill" },
    { page: "KhanAcademy", label: "Khan Academy" },
    { page: "ClassDojo", label: "ClassDojo" },
    { page: "TinkerCAD", label: "TinkerCAD" },
    { page: "Kutubee", label: "Kutubee" },
    { page: "Madrasa", label: "Madrasa" },
    { page: "Qubits", label: "Qubits" },
    { page: "ICH", label: "ICH" },
    { page: "Matific", label: "Matific" },
  ];

  intlTests: NavPage[] = [
    { page: "PISA", label: "PISA" },
    { page: "TIMSS", label: "TIMSS" },
    { page: "MAP", label: "MAP" },
    { page: "IBT", label: "IBT" },
    { page: "PIRLS", label: "PIRLS" },
  ];

  constructor(
    public readonly languageService: LanguageService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  toggleSection(section: string): void {
    this.openSection = this.openSection === section ? null : section;
    if (this.openSection !== section) {
      this.openSub = null;
    }
  }

  toggleSub(sub: string): void {
    this.openSub = this.openSub === sub ? null : sub;
  }

  isOpen(section: string): boolean {
    return this.openSection === section;
  }

  isSubOpen(sub: string): boolean {
    return this.openSub === sub;
  }

  openMenu(): void {
    if (this.drawerResetTimer) {
      clearTimeout(this.drawerResetTimer);
      this.drawerResetTimer = null;
    }
    this.isNavbarCollapsed = false;
    this.document.body?.classList.add("mobile-menu-open");
  }

  closeMenu(): void {
    // Phase 1 (this frame): start the slide-out immediately so the tap
    // feels instant. Phase 2 (after exit): tear down accordion DOM, so
    // *ngIf destruction never competes with the animation's first frames.
    this.isNavbarCollapsed = true;
    this.document.body?.classList.remove("mobile-menu-open");
    if (this.drawerResetTimer) {
      clearTimeout(this.drawerResetTimer);
    }
    this.drawerResetTimer = setTimeout(() => {
      this.drawerResetTimer = null;
      if (this.isNavbarCollapsed) {
        this.openSection = null;
        this.openSub = null;
        this.listScrolled = false;
      }
    }, 220);
  }

  toggleLang(): void {
    // Close first so the drawer doesn't jump sides mid-session
    // (it docks right in RTL, left in LTR).
    this.closeMenu();
    this.languageService.toggle();
  }

  @HostListener("document:keydown.escape")
  onEscape(): void {
    if (!this.isNavbarCollapsed) {
      this.closeMenu();
    }
  }

  ChangePage(page: string): void {
    this.PageEvent.emit(page);
    this.closeMenu();
    console.log(page, " Child");
  }
}
