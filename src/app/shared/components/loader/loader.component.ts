import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent{

  loader:boolean = false;

    constructor(private uiService:UIService){
      uiService.getLoader().subscribe((status) => { this.loader = status})
    }

}
