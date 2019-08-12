import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { UploadComponent } from './upload/upload.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'user-list', component: ListUserComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
