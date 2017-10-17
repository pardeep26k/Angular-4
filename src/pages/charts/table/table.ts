import { Component ,Input,Output,EventEmitter,OnInit ,OnChanges } from '@angular/core';
import { ChartModule } from "angular2-highcharts";
import { NavParams } from 'ionic-angular';
import { HttpService } from "../../../providers/http-service";
import  {EventService} from "../../../providers/event.service";
import { ChartOptions } from "../../../app/chart.schema";


declare var require: any;
var Highcharts = require('highcharts');
//Highcharts.setOptions(ChartOptions.get());
var crossfilter = require('crossfilter2');

@Component({
  selector: 'table-chart',
  templateUrl: 'table.html'
})
export class TableChart implements OnChanges{
  level:any;
  @Input ()  data =[];
  @Input ()  filters  = {};
  @Input () dataUrl;
   @Input () options;
  @Output() renderDone = new EventEmitter();
  
  
  chartElem ;
  
  isLoadeded=false;
  tableData = [];
  columns = [];
  constructor(public params ?: NavParams,public httpService?:HttpService,public eventService ?: EventService) {
   var options =  params.get('options');
   this.level = 0;
   this.filters = {};
  
  }
  
  ngOnChanges(changes) {
   // alert("ngOnChanges")
   this.render();
   
  }

  render (){
    
  this.columns = this.options.columns ? this.options.columns: Object.keys(this.data[0]);
  this.tableData = this.filterData(this.data,this.filters);
  
      
  }
  
  
   ngOnInit() { 
     var ref = this;

    if(ref.dataUrl){
     ref.httpService.get(ref.dataUrl).subscribe(data => {
        ref.data =  data;
        ref.render();
        ref.isLoadeded = true; 
      });
    }else{
       ref.render();
       ref.isLoadeded = true;
    }

   };
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartViewerPage');
   
  }
  onRenderDone(){
   // this.renderDone.emit(this.chart);
  }
  
  filterData (data,filters){
    
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
}
