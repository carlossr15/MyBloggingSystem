import { Component, Input } from '@angular/core';
import { IBlog } from '../../interfaces/iblog.interface';

@Component({
  selector: 'app-blogging-list',
  standalone: true,
  imports: [],
  templateUrl: './blogging-list.component.html',
  styleUrl: './blogging-list.component.css'
})
export class BloggingListComponent {
  @Input() myBlogList : IBlog[] = [];

  ngOnInit(){
    console.log(this.myBlogList)
  }

}
