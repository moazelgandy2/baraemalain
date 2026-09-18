import { Component, Inject, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DOCUMENT } from "@angular/common";
import * as AOS from "aos";
import { NavigationEnd, Router } from "@angular/router";
import { LanguageService } from "./core/language.service";
import { Subscription, filter } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = "Baraem Al Ain";
  Page = "main";
  private routerSub: Subscription | null = null;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private languageService: LanguageService,
  ) {}
  ngAfterViewInit(): void {
    this.syncPageFromUrl(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        this.syncPageFromUrl(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.routerSub = null;
  }

  private syncPageFromUrl(url: string): void {
    const page = (url ?? "/").split("?")[0].split("#")[0].replace(/^\//, "");
    this.Page = page === "" ? "main" : page;
  }

  ngOnInit() {
    this.languageService.init();
    AOS.init();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  setPage(Page: string) {
    this.router.navigate([Page]);
  }

  // mobileNavToogle() {
  //   document?.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }
}
