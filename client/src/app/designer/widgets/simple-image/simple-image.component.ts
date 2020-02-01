import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-image',
  templateUrl: './simple-image.component.html',
  styleUrls: ['./simple-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
