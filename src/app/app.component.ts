import { Component, ViewChild,OnInit,ChangeDetectorRef } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TreeModule , TreeComponent} from 'angular-tree-component';
import { Dashboard } from "../pages/dashboard/dashboard";
import { HttpService } from '../providers/http-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage;
  metadata;
  dashboards = [];
  constructor(public chRef: ChangeDetectorRef,public platform: Platform, public statusBar: StatusBar,
   public splashScreen: SplashScreen, public httpService : HttpService,
   public menuCtrl: MenuController) {
    this.initializeApp();
  }

  ngOnInit() { 
   
    this.menuCtrl.swipeEnable(false);
   var filename = 'metadata.json';
    this.rootPage = LoginPage;
   var filename = 'metadata.json'
  //this.rootPage = Dashboard_3d;
  
   this.httpService.get(filename).subscribe(metadata => {
      this.metadata = metadata;
      this.dashboards = metadata.dashboards;
    // this.nav.setRoot(this.rootPage,{ "data":this.dashboards[0].children[0]})
      this.setHeight();
      this.chRef.detectChanges(); 
      
    });
   };
  signout(){
      this.menuCtrl.close();
      this.nav.setRoot(LoginPage)
  }
  
  onDashboardChange($event){
    let node = $event.node;
    let data = node.data;
    if (node.isLeaf) {
			var level = node.level;
			var breadCrum = [];
			breadCrum.push(node.data.name);
			while (level > 1) {
				node = node.parent;
				breadCrum.push(node.data.name);
				level--;
			}
			breadCrum = breadCrum.reverse();
     
			var title = "";
			breadCrum.forEach(function(item,i){
        console.log(item)
				title = title + item;
				if (i != breadCrum.length - 1) {
					title += " > ";
				}
			});
       console.log(title);
		// this.nav.push(UserDetail,{'data':data})
    //  this.nav.setRoot(this.rootPage,{"breadCrum":breadCrum, "data":data})
		this.menuCtrl.close();
		}
    
  }
  onEvent = ($event) => {
    alert("onEvent")
   console.log($event);
  }
  onMenuInit(){
    //this.setHeight();
  }
  setHeight(){
   let body = document.querySelector("body")
   var treeViewport  =  <HTMLElement> document.querySelector("tree-viewport"); 
   let tree = <HTMLElement> treeViewport.querySelector(".tree");
   tree.style.height =(body.clientHeight - 100).toString() +"px";
   setTimeout(function() {
    
     treeViewport.scrollTop = 0;
   }, 5000);
   
   
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
