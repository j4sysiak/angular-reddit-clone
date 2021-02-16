import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  faComments = faComments;
  @Input() posts: PostModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
