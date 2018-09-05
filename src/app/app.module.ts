import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SchoolProgramPage } from '../pages/school-program/school-program';
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { GradesPage } from '../pages/grades/grades';
import { RegisterPage } from '../pages/register/register';
import { SupportPage } from '../pages/support/support';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchoolProgramPage,
    LoginPage,
    NewsPage,
    GradesPage,
    RegisterPage,
    SupportPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchoolProgramPage,
    LoginPage,
    NewsPage,
    GradesPage,
    RegisterPage,
    SupportPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
