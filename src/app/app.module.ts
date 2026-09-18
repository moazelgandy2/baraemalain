import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainBannerComponent } from './Elements/main-banner/main-banner.component';
import { MainComponent } from './Pages/main/main.component';
import { AboutSchoolComponent } from './Pages/AboutUs/about-school/about-school.component';
import { VisionComponent } from './Pages/AboutUs/vision/vision.component';
import { TrusteesBoardComponent } from './Pages/AboutUs/trustees-board/trustees-board.component';
import { PrincipalWordComponent } from './Pages/AboutUs/principal-word/principal-word.component';
import { PolicyComponent } from './Pages/AboutUs/policy/policy.component';
import { EmployeesComponent } from './Pages/AboutUs/employees/employees.component';
import { RequirementsComponent } from './Pages/Admission/requirements/requirements.component';
import { TuitionComponent } from './Pages/Admission/tuition/tuition.component';
import { CostumeComponent } from './Pages/Admission/costume/costume.component';
import { ClinicComponent } from './Pages/Admission/clinic/clinic.component';
import { TransportationComponent } from './Pages/Admission/transportation/transportation.component';
import { GuideComponent } from './Pages/Parents/guide/guide.component';
import { BehaviorPolicyComponent } from './Pages/Parents/behavior-policy/behavior-policy.component';
import { MOECalendarComponent } from './Pages/Parents/moe-calendar/moe-calendar.component';
import { AMECalendarComponent } from './Pages/Parents/ame-calendar/ame-calendar.component';
import { KhanAcademyComponent } from './Pages/Students/EducationApps/khan-academy/khan-academy.component';
import { ClassDojoComponent } from './Pages/Students/EducationApps/class-dojo/class-dojo.component';
import { KutubeeComponent } from './Pages/Students/EducationApps/kutubee/kutubee.component';
import { IBTComponent } from './Pages/Students/InternationalTests/ibt/ibt.component';
import { PISAComponent } from './Pages/Students/InternationalTests/pisa/pisa.component';
import { MAPComponent } from './Pages/Students/InternationalTests/map/map.component';
import { ImportantFilesComponent } from './Pages/important-files/important-files.component';
import { GraduatesComponent } from './Pages/graduates/graduates.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { GradCardComponent } from './Elements/Grads/grad-card/grad-card.component';
import { FooterComponent } from './Elements/footer/footer.component';
import { ScheduleComponent } from './Pages/Students/schedule/schedule.component';
import { EventsComponent } from './Pages/Students/events/events.component';
import { TIMSSComponent } from './Pages/Students/InternationalTests/timss/timss.component';
import { EmSATComponent } from './Pages/Students/InternationalTests/em-sat/em-sat.component';
import { NationalIDComponent } from './Pages/Students/national-id/national-id.component';
import { LMSComponent } from './Pages/Students/EducationApps/lms/lms.component';
import { McGrawHillComponent } from './Pages/Students/EducationApps/mc-graw-hill/mc-graw-hill.component';
import { MadrasaComponent } from './Pages/Students/EducationApps/madrasa/madrasa.component';
import { TinkerCADComponent } from './Pages/Students/EducationApps/tinker-cad/tinker-cad.component';
import { ArabicComponent } from './Pages/NationalID/Culture/arabic/arabic.component';
import { HistoryComponent } from './Pages/NationalID/Culture/history/history.component';
import { HeritageComponent } from './Pages/NationalID/Culture/heritage/heritage.component';
import { RespectComponent } from './Pages/NationalID/Value/respect/respect.component';
import { CompassionComponent } from './Pages/NationalID/Value/compassion/compassion.component';
import { GlobalUnderstandingComponent } from './Pages/NationalID/Value/global-understanding/global-understanding.component';
import { BelongingComponent } from './Pages/NationalID/Citizenship/belonging/belonging.component';
import { VolunteeringComponent } from './Pages/NationalID/Citizenship/volunteering/volunteering.component';
import { ConservationComponent } from './Pages/NationalID/Citizenship/conservation/conservation.component';
import { MainNationalIDComponent } from './Pages/NationalID/main-national-id/main-national-id.component';
import { GiftedComponent } from './Pages/Students/gifted/gifted.component';
import { ArabicReadingChallengeComponent } from './Pages/Students/arabic-reading-challenge/arabic-reading-challenge.component';
import { QubitsComponent } from './Pages/Students/EducationApps/qubits/qubits.component';
import { ICHComponent } from './Pages/Students/EducationApps/ich/ich.component';
import { ELibraryComponent } from './Pages/Students/e-library/e-library.component';
import { MatificComponent } from './Pages/Students/EducationApps/matific/matific.component';
import { MockExamsComponent } from './Pages/Students/mock-exams/mock-exams.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    MainComponent,
    AboutSchoolComponent,
    VisionComponent,
    TrusteesBoardComponent,
    PrincipalWordComponent,
    PolicyComponent,
    EmployeesComponent,
    RequirementsComponent,
    TuitionComponent,
    CostumeComponent,
    ClinicComponent,
    TransportationComponent,
    GuideComponent,
    BehaviorPolicyComponent,
    MOECalendarComponent,
    AMECalendarComponent,
    KhanAcademyComponent,
    ClassDojoComponent,
    KutubeeComponent,
    IBTComponent,
    PISAComponent,
    MAPComponent,
    ImportantFilesComponent,
    GraduatesComponent,
    ContactComponent,
    CareersComponent,
    GradCardComponent,
    FooterComponent,
    ScheduleComponent,
    EventsComponent,
    TIMSSComponent,
    EmSATComponent,
    NationalIDComponent,
    LMSComponent,
    McGrawHillComponent,
    MadrasaComponent,
    TinkerCADComponent,
    ArabicComponent,
    HistoryComponent,
    HeritageComponent,
    RespectComponent,
    CompassionComponent,
    GlobalUnderstandingComponent,
    BelongingComponent,
    VolunteeringComponent,
    ConservationComponent,
    MainNationalIDComponent,
    GiftedComponent,
    ArabicReadingChallengeComponent,
    QubitsComponent,
    ICHComponent,
    ELibraryComponent,
    MatificComponent,
    MockExamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
