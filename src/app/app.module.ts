import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {HttpService} from '../providers/http-service';
import { CeiboShare } from 'ng2-social-share';
import { TreeModule } from 'angular-tree-component';
import { ChartViewer } from "../pages/chart-viewer/chart-viewer";
import { ChartWidget } from "../pages/chart-widget/chart-widget";
import { Dashboard } from "../pages/dashboard/dashboard";
import { ChartObject,ChartItem ,ChartOptions} from "./chart.schema";
import { ChartService } from "../providers/chart.service";
import { EventService } from "../providers/event.service";
import { SocialShare } from "../pages/social-share/social-share";
import { NgGridModule } from "angular2-grid";
import { ChartModule } from "angular2-highcharts";

import { DrilldownChart } from "../pages/charts/drilldown/drilldown";
import { TableChart } from "../pages/charts/table/table";


declare var require: any;
var _3d =  require('highcharts-3d');
var Highcharts = require('highcharts');

var drilldown = require('highcharts-drilldown')
var highchartsMore = require('highcharts-more');
var exporting= require('highcharts-exporting');
var offlineExporting = require('highcharts-offline-exporting');
var highchartsData = require('highcharts-data')


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CeiboShare,
    ChartViewer,
    ChartWidget,
    SocialShare,
    Dashboard,
    DrilldownChart,
    TableChart
    
    
  ],
  
  imports: [
    IonicModule.forRoot(MyApp),
     BrowserModule ,
     HttpModule,
    TreeModule,
    NgGridModule,
    ChartModule.forRoot(Highcharts,_3d,drilldown,highchartsMore,exporting,offlineExporting,highchartsData)
    
  
       // svg_to_png
  ],
  bootstrap: [IonicApp],
  entryComponents: [

    MyApp,
    LoginPage,
    ChartViewer,
    ChartWidget,
    SocialShare,
    Dashboard,
    DrilldownChart
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ChartObject,
    ChartOptions,
    ChartItem,
    ChartService,
    EventService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
