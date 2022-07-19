import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/admin/user/user.component';
import { ProductComponent } from './components/admin/product/product.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { SettingComponent } from './components/admin/setting/setting.component';
import { ErrorComponent } from './components/admin/error/error.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { SearchComponent } from './components/admin/search/search.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    CustomerComponent,
    SettingComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
