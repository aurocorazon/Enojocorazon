import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GridSquare } from '../grid-square/grid-square';

@Component({
  selector: 'app-about',
  imports: [GridSquare, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
