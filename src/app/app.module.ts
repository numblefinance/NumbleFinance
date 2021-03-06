import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HomeService } from './home/home.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { UploadComponent } from './upload/upload.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './admin/company/list/list.component';
import { CreateComponent } from './admin/company/create/create.component';
import { EditComponent } from './admin/company/edit/edit.component';
import { SidebarComponent } from './all/sidebar/sidebar.component';
import { HeaderComponent } from './all/header/header.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ChartsModule } from 'ng2-charts';
import { UploadGraphComponent } from './upload-graph/upload-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailComponent,
    FilterPipe,
    UploadComponent,
    UploadGraphComponent,
    ListUserComponent,
    UserEditComponent,
    ProfileComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    ChartsModule,
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
