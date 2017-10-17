import { Component,Input, Output,EventEmitter} from '@angular/core';
import { CeiboShare } from 'ng2-social-share';

@Component({
  selector: 'social-share',
  templateUrl: 'social-share.html'
})
export class SocialShare {
   @Input ()  url : string;
   @Input () media:Array<String>;
   @Input () icon : string ;
   @Input () title : string;
   @Input () side : string;
   @Input () disable : boolean;
   @Output() shareClicked = new EventEmitter();
  

  constructor() {
    this.side = "top";
    this.disable = false;
    if(!this.media){
      this.media = ["facebook","twitter","linkedIn","googlePlus"]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad social-share');
  }
 onShareClicked2(){

  }
  onOptionSelect(selector,ev){
    var ref = this;
    console.log("ss" + ref.url);
    //CeiboShare
    setTimeout(function() {
      ref.url = "";
     document.querySelector(selector).click();
      
      
    },1000);
   
  }
  onShareClick (ev){
   
     this.shareClicked.emit(ev);
  }

}
