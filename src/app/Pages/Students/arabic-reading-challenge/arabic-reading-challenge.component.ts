import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arabic-reading-challenge',
  templateUrl: './arabic-reading-challenge.component.html',
  styleUrl: './arabic-reading-challenge.component.scss'
})
export class ArabicReadingChallengeComponent {
  showTopButton: boolean = false
  constructor(private viewportScroller: ViewportScroller){
    this.viewportScroller.setOffset([0,300])
    
  }
  OpenSchedule(sec: string,name: string){
    window.open('assets/Files/Schedule/'+sec+'/'+name+'.pdf', "_blank");
  }
  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    // console.log(this.viewportScroller.getScrollPosition())
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
