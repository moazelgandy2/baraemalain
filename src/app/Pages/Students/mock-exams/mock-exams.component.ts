import { Component, OnInit} from '@angular/core';
// Interface for a Subject
export interface Subject {
  name: string;
  nameKey?: string;
  routerLink: string; // Example: '/curriculum/moe/g3/math'
  icon?: string;       // Optional: For Bootstrap Icons or Font Awesome class, e.g., 'bi bi-book-fill'
}

// Interface for a Grade
export interface Grade {
  id: string;          // Unique ID for accordion targeting, e.g., 'moeG3Collapse'
  parentId: string;    // ID of the parent accordion container, e.g., '#moeAccordion'
  name: string;
  nameKey?: string;
  subjects: Subject[];
}

// Interface for a Curriculum Section (MOE or AME)
export interface Curriculum {
  id: string;         // Unique ID for the main accordion container, e.g., 'moeAccordion'
  title: string;
  titleKey?: string;
  grades: Grade[];
}

@Component({
  selector: 'app-mock-exams',
  templateUrl: './mock-exams.component.html',
  styleUrl: './mock-exams.component.scss'
})
export class MockExamsComponent implements OnInit {

  moeCurriculum: Curriculum;
  ameCurriculum: Curriculum;

  // Arabic folder names for mock-exam asset paths (must stay Arabic on disk)
  private readonly subjPath: Record<string, string> = {
    'pages.mockexams.sub_islamic': 'التربية الإسلامية',
    'pages.mockexams.sub_arabic': 'اللغة العربية',
    'pages.mockexams.sub_social': 'الدراسات الإجتماعية',
    'pages.mockexams.sub_math': 'الرياضيات',
    'pages.mockexams.sub_science': 'العلوم',
    'pages.mockexams.sub_physics': 'الفيزياء',
    'pages.mockexams.sub_bio': 'الأحياء',
    'pages.mockexams.sub_chem': 'الكيمياء',
  };

  private readonly moeBase = ['pages.mockexams.sub_islamic', 'pages.mockexams.sub_arabic', 'pages.mockexams.sub_social', 'English'];
  private readonly moeSci = ['pages.mockexams.sub_math', 'pages.mockexams.sub_science'];

  constructor() {
    const G = (n: number) => 'pages.schedule.grade_' + n;
    this.moeCurriculum = {
      id: 'moeAccordion',
      title: 'MOE',
      titleKey: 'pages.mockexams.moe_title',
      grades: [
        { id: 'moeG3', parentId: '#moeAccordion', name: 'G3', nameKey: G(3), subjects: this.getSubjects([...this.moeBase, ...this.moeSci], 'MOE', 'G3') },
        { id: 'moeG4', parentId: '#moeAccordion', name: 'G4', nameKey: G(4), subjects: this.getSubjects([...this.moeBase, ...this.moeSci], 'MOE', 'G4') },
        { id: 'moeG5', parentId: '#moeAccordion', name: 'G5', nameKey: G(5), subjects: this.getSubjects([...this.moeBase, 'pages.mockexams.sub_science'], 'MOE', 'G5') },
        { id: 'moeG6', parentId: '#moeAccordion', name: 'G6', nameKey: G(6), subjects: this.getSubjects([...this.moeBase, ...this.moeSci], 'MOE', 'G6') },
        { id: 'moeG7', parentId: '#moeAccordion', name: 'G7', nameKey: G(7), subjects: this.getSubjects([...this.moeBase, ...this.moeSci], 'MOE', 'G7') },
        { id: 'moeG8', parentId: '#moeAccordion', name: 'G8', nameKey: G(8), subjects: this.getSubjects([...this.moeBase, ...this.moeSci], 'MOE', 'G8') },
        { id: 'moeG9', parentId: '#moeAccordion', name: 'G9', nameKey: G(9), subjects: this.getSubjects([...this.moeBase, ...this.moeSci, 'pages.mockexams.sub_physics', 'pages.mockexams.sub_bio'], 'MOE', 'G9') },
        { id: 'moeG10', parentId: '#moeAccordion', name: 'G10', nameKey: G(10), subjects: this.getSubjects([...this.moeBase, ...this.moeSci, 'pages.mockexams.sub_physics', 'pages.mockexams.sub_chem'], 'MOE', 'G10') },
        { id: 'moeG11', parentId: '#moeAccordion', name: 'G11', nameKey: G(11), subjects: this.getSubjects([...this.moeBase, ...this.moeSci, 'pages.mockexams.sub_physics', 'pages.mockexams.sub_bio'], 'MOE', 'G11') },
        { id: 'moeG12', parentId: '#moeAccordion', name: 'G12', nameKey: G(12), subjects: this.getSubjects([...this.moeBase, ...this.moeSci, 'pages.mockexams.sub_physics', 'pages.mockexams.sub_chem'], 'MOE', 'G12') },
      ]
    };

    this.ameCurriculum = {
      id: 'ameAccordion',
      title: 'American (AME) Curriculum',
      titleKey: 'pages.mockexams.ame_title',
      grades: [
        { id: 'ameG3', parentId: '#ameAccordion', name: 'Grade 3', subjects: this.getSubjects(['Islamic', 'Arabic', 'A.S.S', 'English', 'Math', 'Science'], 'AME', 'G3') },
        { id: 'ameG4', parentId: '#ameAccordion', name: 'Grade 4', subjects: this.getSubjects(['Islamic', 'Arabic', 'A.S.S', 'English', 'Math', 'Science'], 'AME', 'G4') },
        { id: 'ameG5', parentId: '#ameAccordion', name: 'Grade 5', subjects: this.getSubjects(['Islamic', 'Arabic', 'A.S.S', 'English', 'Math', 'Science'], 'AME', 'G5') },
        { id: 'ameG6', parentId: '#ameAccordion', name: 'Grade 6', subjects: this.getSubjects(['Islamic', 'Arabic', 'A.S.S', 'English', 'Math', 'Science'], 'AME', 'G6') },
        { id: 'ameG7', parentId: '#ameAccordion', name: 'Grade 7', subjects: this.getSubjects(['Islamic', 'Arabic', 'A.S.S', 'English', 'Math', 'Science'], 'AME', 'G7') },
        { id: 'ameG8', parentId: '#ameAccordion', name: 'Grade 8', subjects: this.getSubjects(['Islamic', 'Arabic', 'A.S.S', 'English', 'Math', 'Science'], 'AME', 'G8') },
      ]
    };
  }

  ngOnInit(): void {
  }

  // Helper function to generate subject objects (keyed for MOE, plain latin for AME)
  private getSubjects(subjectNames: string[], section: string, grade: string): Subject[] {
    return subjectNames.map((name) => {
      const isKey = name.startsWith('pages.');
      const folder = isKey ? (this.subjPath[name] ?? name) : name;
      return {
        name: folder,
        ...(isKey ? { nameKey: name } : {}),
        // IMPORTANT: Update these routerLinks to your actual application routes
        routerLink: `assets/Files/Mock Exams/${section}/${grade}/${folder}/Exam.pdf`, // Placeholder link
        // icon: 'bi bi-journals' // Example icon
      };
    });
  }

  // Legacy helper kept for compatibility
  private getSampleSubjects(subjectNames: string[], section: string, grade: string): Subject[] {
    return this.getSubjects(subjectNames, section, grade);
  }
}
