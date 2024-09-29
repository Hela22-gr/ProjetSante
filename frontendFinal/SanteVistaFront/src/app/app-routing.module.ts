import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ProfileComponent } from './components/Profile_Components/profile/profile.component';
import { InformationsStepsComponent } from './components/Profile_Components/informations-steps/informations-steps.component';
import { InformationsComponent } from './components/Profile_Components/informations/informations.component';
import { RegimeComponent } from './components/Profile_Components/regime/regime.component';
import { ActiviteComponent } from './components/Profile_Components/activite/activite.component';
import { AnalyseComponent } from './components/Profile_Components/analyse/analyse.component';
import { RendezVousComponent } from './components/Profile_Components/rendez-vous/rendez-vous.component';
import { RegimeListComponent } from './components/regime-list/regime-list.component';
import { ListActivityComponent } from './components/list-activity/list-activity.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { FicheDesuiviComponent } from './components/fiche-desuivi/fiche-desuivi.component';
import { RendezVousListComponent } from './components/rendez-vous-list/rendez-vous-list.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [

  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"resetPassword", component: ResetPasswordComponent},
  {path:"register", component: RegisterComponent},
  {path:"users", component: UserManagementComponent},
  {path:"verifMailofAccount", component: EmailVerificationComponent},
  {path:"verify", component: VerificationCodeComponent},
  {path:"profile", component: ProfileComponent},
  {path:"steps", component: InformationsStepsComponent},
  {path:"informations", component: InformationsComponent},
  {path:"regime", component: RegimeComponent},
  {path:"activites", component: ActiviteComponent},
  {path:"analyse", component: AnalyseComponent},
  {path:"rendez-vous", component: RendezVousComponent},
  {path:"regimeList", component: RegimeListComponent},
  {path:"suiviFile", component: FicheDesuiviComponent},
  {path:"ListRendez-Vous", component: RendezVousListComponent},
  {path:"activities", component: ListActivityComponent},
  {path:"patientList", component: PatientListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
