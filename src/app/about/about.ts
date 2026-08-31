import { Component } from '@angular/core';
import { GridSquare } from '../grid-square/grid-square';

@Component({
  selector: 'app-about',
  imports: [GridSquare],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}

