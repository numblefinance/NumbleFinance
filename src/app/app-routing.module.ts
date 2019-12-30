import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { UploadComponent } from './upload/upload.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './admin/company/list/list.component';
import { CreateComponent } from './admin/company/create/create.component';
import { EditComponent } from './admin/company/edit/edit.component';
import { UploadGraphComponent } from './upload-graph/upload-graph.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'upload-graph', component: UploadGraphComponent },
  { path: 'user-list', component: ListUserComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/create', component: CreateComponent },
  { path: 'admin/list', component: ListComponent },
  { path: 'admin/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
