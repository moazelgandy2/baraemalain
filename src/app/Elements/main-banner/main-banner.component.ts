import { Component, EventEmitter, Output } from '@angular/core';
import { LanguageService } from '../../core/language.service';

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
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
})
export class MainBannerComponent {
  @Output() PageEvent = new EventEmitter<string>();
  isNavbarCollapsed = true;

  policies: PolicyLink[] = [
    { labelKey: 'nav.policy_cultural', href: 'assets/Files/Policies/Cultural Conciderations.pdf' },
    { labelKey: 'nav.policy_child', href: 'assets/Files/Policies/Child Protection.pdf' },
    { labelKey: 'nav.policy_digital', href: 'assets/Files/Policies/Digital.pdf' },
    { labelKey: 'nav.policy_parents', href: 'assets/Files/Policies/Parents Participation.pdf' },
    { labelKey: 'nav.policy_safeguarding', href: 'assets/Files/Policies/Safeguarding.pdf' },
    { labelKey: 'nav.policy_behavior', href: 'assets/Files/Policies/Students Behavior.pdf' },
    { labelKey: 'nav.policy_wellbeing', href: "assets/Files/Policies/Students' Psychological Well-being.pdf" },
    { labelKey: 'nav.policy_risks', href: 'assets/Files/Policies/Educational Risks.pdf' },
    { labelKey: 'nav.policy_emergency', href: 'assets/Files/Policies/Emergency.pdf' },
    { labelKey: 'nav.policy_fees', href: 'assets/Files/Policies/School Fees.pdf' },
    { labelKey: 'nav.policy_advising', href: 'assets/Files/Policies/Profissioal Advising.pdf' },
    { labelKey: 'nav.policy_transport', href: 'assets/Files/Policies/Transportation.pdf' },
    { labelKey: 'nav.policy_assessment', href: 'assets/Files/Policies/Assessment.pdf' },
    { labelKey: 'nav.policy_health', href: 'assets/Files/Policies/سياسة الصحة والسلامة.pdf' },
    { labelKey: 'nav.policy_transport_ar', href: 'assets/Files/Policies/سياســة النقل.pdf' },
    { labelKey: 'nav.policy_transport_en', href: 'assets/Files/Policies/Transport Policy.pdf', latin: true },
    { labelKey: 'nav.policy_health_en', href: 'assets/Files/Policies/Health and Safety Policy.pdf', latin: true },
    { labelKey: 'nav.policy_org', href: 'assets/Files/Organizational Structure.pdf' }
  ];

  eduApps: NavPage[] = [
    { page: 'LMS', label: 'LMS' },
    { page: 'McGrawHill', label: 'McGraw Hill' },
    { page: 'KhanAcademy', label: 'Khan Academy' },
    { page: 'ClassDojo', label: 'ClassDojo' },
    { page: 'TinkerCAD', label: 'TinkerCAD' },
    { page: 'Kutubee', label: 'Kutubee' },
    { page: 'Madrasa', label: 'Madrasa' },
    { page: 'Qubits', label: 'Qubits' },
    { page: 'ICH', label: 'ICH' },
    { page: 'Matific', label: 'Matific' },
  ];

  intlTests: NavPage[] = [
    { page: 'PISA', label: 'PISA' },
    { page: 'TIMSS', label: 'TIMSS' },
    { page: 'MAP', label: 'MAP' },
    { page: 'IBT', label: 'IBT' },
  ];

  constructor(public readonly languageService: LanguageService) {}

  ChangePage(page: string): void {
    this.PageEvent.emit(page);
    this.isNavbarCollapsed = true;
    console.log(page, ' Child');
  }
}
