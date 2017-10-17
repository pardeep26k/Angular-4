import { Component ,Input,Output,EventEmitter,OnInit ,OnChanges } from '@angular/core';
import { ChartModule } from "angular2-highcharts";
import { NavParams } from 'ionic-angular';
import { HttpService } from "../../../providers/http-service";
import { ChartOptions } from "../../../app/chart.schema";


declare var require: any;
var Highcharts = require('highcharts');
var crossfilter = require('crossfilter2');

@Component({
  selector: 'drilldown',
  templateUrl: 'drilldown.html'
})
export class DrilldownChart implements OnChanges{
  level:any;
  @Input ()  options ;
  @Input ()  data  = [];
   @Input () dataUrl;
  @Output() renderDone = new EventEmitter();
  filters;
  chartElem ;
  chart;
  defaultOptions;
  
  constructor(public params ?: NavParams,public httpService?:HttpService) {
   var options =  params.get('options');
   this.level = 0;
   this.filters = [];
   
   
  if(options){
  //  this.chart = chart;
   }

  }

  ngOnChanges(changes) {
   // alert("ngOnChanges")
   //this.getGroups();
   
  }
  getGroups (data,key,filters){
    
      var ref = this;
     data = ref.filterData(data,key,filters);
      data = new crossfilter(data);
      var dim = data.dimension(function(d){    
                    return d[key];            
                  })
     var groups = dim.group().all()
       return groups;
  }

  r


  filterData (data,key,filters){
    
      var ref = this;
    var filterKeys = [];
    if(filters){
    filterKeys = Object.keys(filters);
    }
      data = data.filter(function(d){ 
        var i = 0;
        var status = true;
    filterKeys.forEach(function(k){
      var a = filters[k];
      if(a.length > 0 && a.indexOf(d[k]) == -1){
        status = false;
      }
    });
        if(status){
          return d;
        }
      
    });
      return data;
  }
  getchartSeries (data,name= "", isDrilldown = true){
     var series =  [{ name: name ,
                      data: [],
                      colorByPoint: true,
                      drilldown : isDrilldown

                  }];
                  if(isDrilldown){
                   // series[0].drilldown = true;
                  }
      data.forEach(function(group){
        group.name = group.key;
        group.drilldown =  group.key;
        delete group.key;
        group.y = group.value;
        delete group.value;
        series[0].data.push(group);
        
    });
    
    return series;
  }
  setDrilldown (data){
     var drilldowns = {};
      data.forEach(function(group){
          drilldowns[group.key] = {
            "name":group.key,
            data:[]
          };

      });
      return drilldowns;
  }
  getCategory(data){
  var categories = [];
        data.forEach(function(group){
          categories.push(group.key);
      });
       return categories;
  }
   ngOnInit() { 
     let ref = this;
     
  var options = ref.options.options;  
   options.chart.events = {
            "drilldown": function (e) {
              
                if (!e.seriesOptions) {
                      key = ref.options.hirarchy[ref.level];
                    if(!ref.filters[key]){
                      ref.filters[key] = [];
                    }
                     ref.filters[key].push( e.point.name);
                      
                     ref.level++;
                    var chart = this,
                     key = ref.options.hirarchy[ref.level],
                    data = ref.getGroups(ref.data,key,ref.filters),
                    isDrilldown = ref.options.hirarchy.length > (ref.level+1)? true:false,

                    series = ref.getchartSeries(data,e.point.name,isDrilldown);
                    chart.showLoading('Simulating Ajax ...');

                    setTimeout(function () {
                        chart.hideLoading();
                        
                        var a = <HTMLElement>ref.chartElem.querySelector(".highcharts-series-group");
                        a.innerHTML = "";
                        chart.addSeriesAsDrilldown(e.point, series[0]);
                    }, 1000);
                }

            },
            "drillup": function(e){
                      var a = <HTMLElement>ref.chartElem.querySelector(".highcharts-series-group");
                        a.innerHTML = "";
                        ref.level--;
                        key = ref.options.hirarchy[ref.level];
                        ref.filters[key].pop();
            }
        };
    
 var key =  ref.options.hirarchy[0],
 isDrilldown = ref.options.hirarchy.length > 1 ? true:false;
  ref.defaultOptions = ChartOptions.get();
  ref.defaultOptions.chart.events =  options.chart.events ;
  if(ref.dataUrl){
     ref.httpService.get(ref.dataUrl).subscribe(data => {
        ref.data =  data;
      var data = ref.getGroups(ref.data,key,[]),
     series = ref.getchartSeries(data,key,isDrilldown);

     options.series =series;
      ref.defaultOptions.series =series;
     var id = 'chart'+ref.options.id;

     setTimeout(function() {
        ref.chartElem = document.querySelector("#"+id);
        ref.chart = Highcharts.chart(id, ref.defaultOptions);
        ref.chart.update(options)
        ref.onRenderDone();
     }, 1000);
      });
    }else{
      var data = ref.getGroups(ref.data,key,[]),
     series = ref.getchartSeries(data,key,isDrilldown);

     options.series =series;
     ref.defaultOptions.series =series;
     var id = 'chart'+ref.options.id;
     setTimeout(function() {
        ref.chartElem = document.querySelector("#"+id);
        ref.chart = Highcharts.chart(id, ref.defaultOptions);
        ref.chart.update(options)
        ref.onRenderDone();
     }, 1000);
    }
     
   


   };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartViewerPage');
   
  }
   onRenderDone(){
    this.renderDone.emit(this.chart);
  }
}
