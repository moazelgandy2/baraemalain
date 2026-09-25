import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import GLightbox from 'glightbox';

import { ScheduleInfo } from '../../../Objects';

/** All schedule artwork lives in one flat folder; the name carries the division. */
const IMAGE_BASE = 'assets/Files/Schedule/IMGS/';

/**
 * Ministry of Education section. Grades 1-4 are single mixed groups, grades 5-12
 * are split into boys/girls divisions.
 */
const MOE_SCHEDULES: ScheduleInfo[] = [
  { file: 'G1-MOE', grade: 1, section: '' },
  { file: 'G2-MOE', grade: 2, section: '' },
  { file: 'G3-MOE', grade: 3, section: '' },
  { file: 'G4-MOE', grade: 4, section: '' },
  { file: 'G5B-MOE', grade: 5, section: 'boys' },
  { file: 'G5G-MOE', grade: 5, section: 'girls' },
  { file: 'G6B-MOE', grade: 6, section: 'boys' },
  { file: 'G6G-MOE', grade: 6, section: 'girls' },
  { file: 'G7B-MOE', grade: 7, section: 'boys' },
  { file: 'G7G-MOE', grade: 7, section: 'girls' },
  { file: 'G8B-MOE', grade: 8, section: 'boys' },
  { file: 'G8G-MOE', grade: 8, section: 'girls' },
  { file: 'G9B-MOE', grade: 9, section: 'boys' },
  { file: 'G10B-MOE', grade: 10, section: 'boys' },
  { file: 'G10G-MOE', grade: 10, section: 'girls' },
  { file: 'G11B-MOE', grade: 11, section: 'boys' },
  { file: 'G11G-MOE', grade: 11, section: 'girls' },
  { file: 'G12B-MOE', grade: 12, section: 'boys' },
  { file: 'G12G-MOE', grade: 12, section: 'girls' },
];

/** American section. Grades are split into lettered divisions. */
const AME_SCHEDULES: ScheduleInfo[] = [
  { file: 'G1A-AME', grade: 1, section: 'section_a' },
  { file: 'G1B-AME', grade: 1, section: 'section_b' },
  { file: 'G1C-AME', grade: 1, section: 'section_c' },
  { file: 'G2A-AME', grade: 2, section: 'section_a' },
  { file: 'G2B-AME', grade: 2, section: 'section_b' },
  { file: 'G2C-AME', grade: 2, section: 'section_c' },
  { file: 'G3A-AME', grade: 3, section: 'section_a' },
  { file: 'G3B-AME', grade: 3, section: 'section_b' },
  { file: 'G3C-AME', grade: 3, section: 'section_c' },
  { file: 'G4A-AME', grade: 4, section: 'section_a' },
  { file: 'G4B-AME', grade: 4, section: 'section_b' },
  { file: 'G5A-AME', grade: 5, section: 'section_a' },
  { file: 'G5B-AME', grade: 5, section: 'section_b' },
  { file: 'G6B-AME', grade: 6, section: 'section_b' },
  { file: 'G6G-AME', grade: 6, section: 'section_g' },
  { file: 'G7B-AME', grade: 7, section: 'section_b' },
  { file: 'G7C-AME', grade: 7, section: 'section_c' },
  { file: 'G8B-AME', grade: 8, section: 'section_b' },
  { file: 'G8G-AME', grade: 8, section: 'section_g' },
  { file: 'G9G-AME', grade: 9, section: 'section_g' },
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements AfterViewInit, OnDestroy {

  readonly moe: ScheduleInfo[] = MOE_SCHEDULES;
  readonly ame: ScheduleInfo[] = AME_SCHEDULES;

  private lightbox: ReturnType<typeof GLightbox> | null = null;

  constructor(private translate: TranslateService) {}

  /** Path to the full-size artwork for a schedule. */
  imagePath(schedule: ScheduleInfo): string {
    return `${IMAGE_BASE}${schedule.file}.JPG`;
  }

  /**
   * Human-readable card label, e.g. "Grade 5 (Boys)". Recomputed on every change
   * detection pass so the cards follow the active language.
   */
  label(schedule: ScheduleInfo): string {
    const parts = [this.translate.instant(`pages.schedule.grade_${schedule.grade}`)];
    if (schedule.section) {
      parts.push(this.translate.instant(`pages.schedule.${schedule.section}`));
    }
    return parts.join(' ').trim();
  }

  trackByFile(_: number, schedule: ScheduleInfo): string {
    return schedule.file;
  }

  ngAfterViewInit(): void {
    // Runs on every visit to the page, so re-scan the freshly rendered cards.
    this.lightbox = GLightbox({
      selector: '.schedule-lightbox',
      touchNavigation: true,
      keyboardNavigation: true,
      draggable: true,
      loop: true,
      zoomable: true,
      preload: false,
      openEffect: 'zoom',
      closeEffect: 'zoom',
      slideEffect: 'slide'
    });
  }

  ngOnDestroy(): void {
    // Otherwise each visit would stack another set of document listeners.
    this.lightbox?.destroy();
    this.lightbox = null;
  }
}
