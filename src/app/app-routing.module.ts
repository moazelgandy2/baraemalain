import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./Pages/main/main.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { GraduatesComponent } from "./Pages/graduates/graduates.component";
import { PrincipalWordComponent } from "./Pages/AboutUs/principal-word/principal-word.component";
import { AppComponent } from "./app.component";
import { ArabicReadingChallengeComponent } from "./Pages/Students/arabic-reading-challenge/arabic-reading-challenge.component";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  {
    path: "main",
    component: AppComponent,
  },
  {
    path: "contact",
    component: AppComponent,
  },
  {
    path: "grads",
    component: AppComponent,
  },
  {
    path: "principalWord",
    component: AppComponent,
  },
  {
    path: "vision",
    component: AppComponent,
  },
  {
    path: "schedule",
    component: AppComponent,
  },
  {
    path: "tuition",
    component: AppComponent,
  },
  {
    path: "events",
    component: AppComponent,
  },
  {
    path: "importantFiles",
    component: AppComponent,
  },
  {
    path: "aboutSchool",
    component: AppComponent,
  },
  {
    path: "EmSAT",
    component: AppComponent,
  },
  {
    path: "IBT",
    component: AppComponent,
  },
  {
    path: "PISA",
    component: AppComponent,
  },

  {
    path: "TIMSS",
    component: AppComponent,
  },
  {
    path: "MAP",
    component: AppComponent,
  },
  {
    path: "PIRLS",
    component: AppComponent,
  },
  {
    path: "NationalID",
    component: AppComponent,
  },
  {
    path: "Arabic",
    component: AppComponent,
  },
  {
    path: "Heritage",
    component: AppComponent,
  },
  {
    path: "History",
    component: AppComponent,
  },
  {
    path: "Compassion",
    component: AppComponent,
  },
  {
    path: "GlobalUnderstanding",
    component: AppComponent,
  },
  {
    path: "Respect",
    component: AppComponent,
  },
  {
    path: "Belonging",
    component: AppComponent,
  },
  {
    path: "Conservation",
    component: AppComponent,
  },
  {
    path: "Volunteering",
    component: AppComponent,
  },
  {
    path: "ClassDojo",
    component: AppComponent,
  },
  {
    path: "Kutubee",
    component: AppComponent,
  },
  {
    path: "KhanAcademy",
    component: AppComponent,
  },
  {
    path: "TinkerCAD",
    component: AppComponent,
  },
  {
    path: "LMS",
    component: AppComponent,
  },
  {
    path: "McGrawHill",
    component: AppComponent,
  },
  {
    path: "Requirements",
    component: AppComponent,
  },
  {
    path: "ICH",
    component: AppComponent,
  },
  {
    path: "Qubits",
    component: AppComponent,
  },
  {
    path: "Gifted",
    component: AppComponent,
  },
  {
    path: "ArabicReadingChallenge",
    component: AppComponent,
  },
  {
    path: "E-Library",
    component: AppComponent,
  },
  {
    path: "Matific",
    component: AppComponent,
  },
  {
    path: "MockExams",
    component: AppComponent,
  },
  {
    path: "guide",
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
