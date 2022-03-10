import { Component } from '@angular/core';
import { ApiconsumerService } from '../services/apiconsumer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = "Holomanolo";
  canUSeeMe = false;
  mycards = ['thing1', 'thing2', 'thing3,'];

  constructor(private apiconsumer: ApiconsumerService) {}

  sayhello(){
    //alert(this.text);
    this.canUSeeMe = !this.canUSeeMe;
  }
  callApi(){
    this.apiconsumer.test().subscribe((response) => {
      let localResponse = response;
    })
  }

}
