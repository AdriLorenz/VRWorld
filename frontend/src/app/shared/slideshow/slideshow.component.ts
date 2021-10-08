import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../services/load-scripts.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor(private name:LoadScriptsService) {
    name.Load(["slider"]);
   }

  ngOnInit(): void {
  }

}
