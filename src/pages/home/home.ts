import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	posts:{
		ID: number,
		title: string,
		content: string,
		date: string,
	}[] = [];

  	constructor(
		  public navCtrl: NavController,
		  public http: HttpClient,
		  public loadingCtrl: LoadingController
  	) {}

  	ionViewDidLoad() {
		  let loading = this.loadingCtrl.create();
		  loading.present();
		  this.http
			.get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts')
  			.subscribe(data => {
				  this.posts = data['posts'];
				  loading.dismiss();
  			});
  	}

}
