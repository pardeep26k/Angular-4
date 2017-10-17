import { Component ,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NavParams } from 'ionic-angular';
import { ChartObject } from "../../app/chart.schema";
import { ChartModule } from "angular2-highcharts";
import { HttpService } from "../../providers/http-service";

declare var require: any;

var crossfilter = require('crossfilter2');
var d3 =  require('d3');
var dc = require('dc');


@Component({
  selector: 'chart-viewer',
  templateUrl: 'chart-viewer.html'
})
export class ChartViewer {
  @Input ()  chart : any;
  @Output() cancel = new EventEmitter();
  @Input () data;
  @Input () filters;
  @Output() renderDone = new EventEmitter();
  options:any = {};
  chartObj;
  isLoadeded = false;
  
  constructor(params ?: NavParams,public httpService?:HttpService) {
       //this.data = [];
  }
   ngOnInit() { 
       var ref = this;
       ref.isLoadeded = true;

  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartViewerPage');
  }
  onCancel(){
    this.cancel.emit();
  }
  onRenderDone(chart){
    this.chartObj = chart;
    this.renderDone.emit(chart);
  }

}
