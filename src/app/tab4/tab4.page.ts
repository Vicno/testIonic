import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})


export class Tab4Page implements OnInit {
  x = "hola";
  y = 0;
  constructor() {}

  ngOnInit() {
  }

  fun(){
    if(this.y==0)
    {
      this.x="Nos vemos";
      this.y=1;
    }
    else if(this.y==1)
    {
      this.x="hola";
      this.y=0;
    }    
  }

}
