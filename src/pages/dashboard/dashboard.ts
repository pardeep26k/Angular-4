import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams , Slides} from 'ionic-angular';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpService } from '../../providers/http-service';
import { CeiboShare } from 'ng2-social-share';
import { ChartWidget } from "../chart-widget/chart-widget";
import { ChartObject } from "../../app/chart.schema";


declare var require: any;

var crossfilter = require('crossfilter2');
var d3 =  require('d3');
var dc = require('dc');

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
 
})
export class Dashboard {
  user : any;
  dashboard : any;
  shareUrl : String;
  title :string = "Dashboard";
  data;
  chartData;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService :HttpService,public chRef: ChangeDetectorRef) {
    this.user = navParams.get('user');
     this.setTitle();
 
  }
  setTitle(){
   let breadCrum =  this.navParams.get('breadCrum');
   if(!breadCrum){
     return;
   }
    	var title = "";
			breadCrum.forEach(function(item,i){
        console.log(item)
				title = title + item;
				if (i != breadCrum.length - 1) {
					title += " > ";
				}
			});
      this.title = title;
  }
  ngOnInit() {
   
    var ref = this;
    this.dashboard =  this.navParams.get('data');
    if(!this.dashboard){
     return;
    }
   let fileUrl = this.dashboard.filename;
    var ref =this;
    var dashboardType = this.dashboard.type;
      

   d3.csv(this.httpService.baseUrl+fileUrl,function(chartData){
      ref.chartData =  chartData;
    });
   
  }
 
  createChart(){
    let newChart = new ChartObject();
    newChart.title  = newChart.title ? newChart.title :"chart";
    this.dashboard.charts.push(newChart);
  }
  setHeight(rows :1){
   let body = document.querySelector("body")
   return (body.clientHeight -(140*(rows+1)))/rows;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }
  disbleSwipe (slides) {
		 slides.lockSwipes(true);
       
	};
enableSwipe (slides) {
    slides.lockSwipes(false);
	};
  

}
