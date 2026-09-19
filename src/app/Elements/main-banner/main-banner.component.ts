import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  OnDestroy,
  Output,
  ViewChild,
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

/**
 * Recursive desktop-nav node. A node with `children` renders as an expandable
 * flyout group; a node with `page` navigates internally; a node with `href`
 * opens an external/asset link. Depth is unlimited — the template recurses.
 */
export interface NavItem {
  /** Dotted path id, e.g. `students.platforms.lms` (used for open-state). */
  id: string;
  labelKey?: string;
  label?: string;
  /** Static suffix appended after the label (e.g. a year range). */
  suffix?: string;
  page?: string;
  href?: string;
  latin?: boolean;
  children?: NavItem[];
}

@Component({
  selector: "app-main-banner",
  templateUrl: "./main-banner.component.html",
  styleUrl: "./main-banner.component.scss",
})
export class MainBannerComponent implements OnDestroy {
  @Output() PageEvent = new EventEmitter<string>();
  @ViewChild("menuTrigger") private menuTrigger?: ElementRef<HTMLButtonElement>;
  @ViewChild("drawerClose") private drawerClose?: ElementRef<HTMLButtonElement>;
  @ViewChild("drawer", { read: ElementRef })
  private drawer?: ElementRef<HTMLElement>;

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

  /** Desktop dropdown trees — built from the same source arrays as mobile. */
  aboutMenu: NavItem[] = [
    { id: "about.school", labelKey: "nav.about_school", page: "aboutSchool" },
    { id: "about.vision", labelKey: "nav.vision", page: "vision" },
    {
      id: "about.principal",
      labelKey: "nav.principal_word",
      page: "principalWord",
    },
    {
      id: "about.policies",
      labelKey: "nav.policies",
      children: this.policies.map((policy) => ({
        id: `about.policies.${policy.labelKey}`,
        labelKey: policy.labelKey,
        href: policy.href,
        latin: policy.latin,
      })),
    },
  ];

  admissionMenu: NavItem[] = [
    {
      id: "admission.requirements",
      labelKey: "nav.requirements",
      page: "Requirements",
    },
    { id: "admission.tuition", labelKey: "nav.tuition", page: "tuition" },
  ];

  parentsMenu: NavItem[] = [
    {
      id: "parents.calendar",
      labelKey: "nav.calendar",
      href: "assets/Files/School Calendar.pdf",
    },
    {
      id: "parents.guide",
      labelKey: "nav.guide",
      suffix: " 2026-2027",
      page: "guide",
    },
  ];

  studentsMenu: NavItem[] = [
    { id: "students.schedule", labelKey: "nav.schedule", page: "schedule" },
    {
      id: "students.platforms",
      labelKey: "nav.platforms",
      children: this.eduApps.map((app) => ({
        id: `students.platforms.${app.page}`,
        label: app.label,
        page: app.page,
        latin: true,
      })),
    },
    {
      id: "students.intl",
      labelKey: "nav.intl_club",
      children: this.intlTests.map((test) => ({
        id: `students.intl.${test.page}`,
        label: test.label,
        page: test.page,
        latin: true,
      })),
    },
    { id: "students.mock", labelKey: "nav.mockExams", page: "MockExams" },
    { id: "students.gifted", labelKey: "nav.gifted", page: "Gifted" },
    { id: "students.events", labelKey: "nav.events", page: "events" },
    {
      id: "students.reading",
      labelKey: "nav.readingChallenge",
      page: "ArabicReadingChallenge",
    },
    { id: "students.elibrary", labelKey: "nav.elibrary", page: "E-Library" },
  ];

  /** Ids of currently expanded flyout branches (dotted path ids). */
  private readonly openBranches = new Set<string>();
  private hoverCapable: boolean | null = null;

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

    // Wait for the drawer to become visible before moving focus into it.
    queueMicrotask(() => this.drawerClose?.nativeElement.focus());
  }

  closeMenu(): void {
    // Phase 1 (Frame 0): Trigger the slide-out immediately on the GPU.
    // Keep body.mobile-menu-open active during the 200ms slide-out so that
    // synchronous body overflow layout recalculation and AOS scroll triggers
    // never block the main thread or drop frames during animation.
    this.isNavbarCollapsed = true;
    if (this.drawerResetTimer) {
      clearTimeout(this.drawerResetTimer);
    }
    // Phase 2 (After exit completes): Unlock body scroll and clean up accordion DOM.
    this.drawerResetTimer = setTimeout(() => {
      this.drawerResetTimer = null;
      if (this.isNavbarCollapsed) {
        this.document.body?.classList.remove("mobile-menu-open");
        this.openSection = null;
        this.openSub = null;
        this.listScrolled = false;
        this.menuTrigger?.nativeElement.focus();
      }
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.drawerResetTimer) {
      clearTimeout(this.drawerResetTimer);
      this.drawerResetTimer = null;
    }
    this.document.body?.classList.remove("mobile-menu-open");
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

  @HostListener("document:keydown", ["$event"])
  onDrawerKeydown(event: KeyboardEvent): void {
    if (this.isNavbarCollapsed || event.key !== "Tab") {
      return;
    }

    const drawer = this.drawer?.nativeElement;
    if (!drawer) {
      return;
    }

    const focusable = Array.from(
      drawer.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.getClientRects().length > 0);

    if (!focusable.length) {
      event.preventDefault();
      this.drawerClose?.nativeElement.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  ChangePage(page: string): void {
    this.PageEvent.emit(page);
    this.closeMenu();
    console.log(page, " Child");
  }

  // ---------- Expandable desktop flyouts (any depth) ----------

  trackNode(_index: number, node: NavItem): string {
    return node.id;
  }

  isBranchOpen(id: string): boolean {
    return this.openBranches.has(id);
  }

  private parentOf(id: string): string | null {
    const dot = id.lastIndexOf(".");
    return dot < 0 ? null : id.slice(0, dot);
  }

  /** Open a branch, closing any open sibling at the same level. */
  openNode(id: string): void {
    if (this.openBranches.has(id)) {
      return;
    }
    const parent = this.parentOf(id);
    for (const key of Array.from(this.openBranches)) {
      if (this.parentOf(key) === parent) {
        this.closeBranch(key);
      }
    }
    this.openBranches.add(id);
  }

  /** Close a branch and all of its descendants. */
  closeBranch(id: string): void {
    for (const key of Array.from(this.openBranches)) {
      if (key === id || key.startsWith(id + ".")) {
        this.openBranches.delete(key);
      }
    }
  }

  closeAllBranches(): void {
    this.openBranches.clear();
  }

  /**
   * Group-header activation. Hover (mouse) is handled by mouseenter, so:
   * keyboard (click with detail 0) toggles, touch (no hover) toggles,
   * mouse click just ensures open. stopPropagation keeps ngbDropdown open.
   */
  onGroupClick(node: NavItem, event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    if (event.detail === 0 || !this.isHoverCapable()) {
      if (this.isBranchOpen(node.id)) {
        this.closeBranch(node.id);
      } else {
        this.openNode(node.id);
      }
    } else {
      this.openNode(node.id);
    }
  }

  onLeafSelect(page: string | undefined): void {
    if (!page) {
      return;
    }
    this.closeAllBranches();
    this.ChangePage(page);
  }

  /** Reset flyout state whenever a top-level dropdown closes. */
  onTopMenuOpen(open: boolean): void {
    if (!open) {
      this.closeAllBranches();
    }
  }

  private isHoverCapable(): boolean {
    if (this.hoverCapable === null) {
      try {
        this.hoverCapable = window.matchMedia("(hover: hover)").matches;
      } catch {
        this.hoverCapable = false;
      }
    }
    return this.hoverCapable;
  }
}
