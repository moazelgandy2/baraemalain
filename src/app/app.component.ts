import { Component, Inject, OnInit , AfterViewInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { LanguageService } from './core/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Baraem Al Ain';
  Page="main"

  constructor(private modalService: NgbModal,
    private router: Router,
    private languageService: LanguageService
  ){
  }
  ngAfterViewInit(): void {
    this.router.events.subscribe(val => {
      if(val["url"] && val["url"] !=this.Page){
        this.Page = val["url"]?.substring(1)
      console.log(val["url"]?.substring(1))
    }
    if(this.Page == "")
      this.Page = "main"
    })
  }

  ngOnInit(){
    this.languageService.init();
    AOS.init()

  }



  public open(modal: any): void {
    this.modalService.open(modal);
  }

  setPage(Page: string){
    this.router.navigate([Page])
    console.log(Page, " Parent")
  }



  // mobileNavToogle() {
  //   document?.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }

}
