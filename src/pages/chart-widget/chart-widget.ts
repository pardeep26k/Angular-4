import { Component ,Input,OnInit,ChangeDetectorRef ,Output,EventEmitter} from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CeiboShare } from 'ng2-social-share';
import { ChartViewer } from "../chart-viewer/chart-viewer";
import { PopoverController, NavParams,ModalController,AlertController } from 'ionic-angular';
import { ChartObject } from "../../app/chart.schema";  
import { ChartService } from '../../providers/chart.service';
import { Share } from "social-share";
import { HttpService } from "../../providers/http-service";
import  {EventService } from "../../providers/event.service";


declare var require: any;

var crossfilter = require('crossfilter2');
var d3 =  require('d3');
var dc = require('dc');


@Component({
  selector: 'chart-widget',
  templateUrl: 'chart-widget.html'
})
export class ChartWidget {
  @Input ()  chart : Object;
  @Input ()  edit : boolean;
  @Input ()  share : boolean;
  @Input ()  hideOptions : boolean;
  @Input () data;
  @Input () filters;
  @Input () height = 100;
  
  
  popup : any;
  isLoadeded=false;
  state : string;
  editData = {};
  shareUrl:string;
  shareDisabled:boolean = false;
  chartObj ;
  constructor(public chRef: ChangeDetectorRef,public popoverCtrl: PopoverController,public alertCtrl: AlertController,public modalCtrl: ModalController,public chartService:ChartService,public httpService:HttpService,public eventService ?: EventService) {
    this.state = "preview";
    this.edit = true;
    this.share = true;
    this.hideOptions = false;
    this.chart ;
    this.shareUrl = "";
    this.data ;
  

  }
  ionViewDidLoad() {
  }
  ngOnInit() { 
    console.log(this.chart);
    var ref = this;
    setTimeout(function() {
       ref.isLoadeded = true;
    }, 500);
   
   };
  
    previewChart (elem){
       this.openModal(ChartViewer,{"chart":this.chart,"data":this.data});
    }
   
    openModal(comp : Component,data ?: any){
      this.popup = this.modalCtrl.create(comp,{"chart":this.chart});
      this.popup.onDidDismiss(data => {
         console.log(data);
      });
      this.popup.present();
    }
    onCancel (){
      this.popup.dismiss();
    }
    downloadChart(chart){
     this.chartService.download(chart);
     //this.chartService.downloadCSV(this.data)
    }
    downloadImage(elemId,filename){
      var parent =  document.getElementById("chart_"+elemId)
      var elem =  parent.getElementsByTagName("svg")[0];
      this.chartService.downloadImage(elem,filename+".png");
    }
    showImage(elemId){
      var parent =  document.getElementById("chart_"+elemId)
      var elem =  parent.getElementsByTagName("svg")[0];
      this.chartService.getImageURI(elem,uri=>{
         window.open(uri,"_blank")
      });
    }
    toggltFilter(chart){
      var filterWrapper = <HTMLElement>document.querySelector("#"+chart.type+"_"+chart.id +" .select");
      var filter = <HTMLSelectElement>filterWrapper.querySelector("select");
       filter.size = filter.options.length;
       filterWrapper.hidden =  !filterWrapper.hidden;
       
      // if(filterWrapper.hidden){
      //   filterWrapper.hidden = false;
      // }else{
      //   filterWrapper.hidden = true;
        
      // }


     
    }
    shareChart(id){
      //this.shareDisabled = true;
     if(this.state=='edit'){
       return;
      }
      let ref = this;
      
      if(!ref.shareUrl){
        ref.uploadImage(id,url => {
          ref.shareUrl = url;
          ref.chRef.detectChanges(); 
          console.log(url)
           // this.shareDisabled = false;
        });
      }else{
        ref.shareUrl = "";
         ref.chRef.detectChanges(); 
      
      }
    }
    uploadImage (elemId,callback){
      var parent =  document.getElementById("chart_"+elemId)
      var elem =  parent.getElementsByTagName("svg")[0];
      var ref = this;
      this.chartService.getImageURI(elem,uri=>{
        uri = encodeURIComponent(uri);
        let param = {
          "data" : uri
        }
       ref.httpService.post("index.php",param).subscribe(response => {
           console.log(response);
           ref.shareUrl = response.url;
           if(callback){
            callback(response.url);
           }
        });
      });
    }
    onEditDone(chart){
       this.state='preview';
       this.shareUrl = "";
       Object.assign(this.chart,chart);

    }
    onRenderDone(chart){
      this.chartObj = chart;
    }
    resetFilter(filter){   
     this.eventService.filterRemoved(filter);
   //  this.chartObj.events.drillupall();
    }
    printChart (id){
      this.chartObj.print();
     // this.chartService.printDiv("#chart_"+id);
    }
  

}
