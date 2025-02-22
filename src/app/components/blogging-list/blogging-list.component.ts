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
    this.orderBlogsByDateDescending(); //Ordena los blogs por fecha de publicación de forma descendente por defecto
  }
  
  orderBlogs(event : any) : void { //Ordena los blogs por fecha de publicación en función del valor del select
    if(event.target.value === '1'){
      this.orderBlogsByDateDescending();
    } else if(event.target.value === '2'){
      this.orderBlogsByDateAscending();
    }
  }

  orderBlogsByDateDescending() : void { //Ordena los blogs por fecha de publicación de forma descendente
    this.myBlogList = this.myBlogList.sort((a, b) => {
      return new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime();
    });
  }

  orderBlogsByDateAscending() : void { //Ordena los blogs por fecha de publicación de forma ascendente
    this.myBlogList = this.myBlogList.sort((a, b) => {
      return new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime();
    });
  }

  isTextOverflow(text: string): boolean { //Comprueba si el texto tiene más de 4 líneas
    const lines = text.split('\n').length;
    return lines > 4;
  }

  toggleText(blog: IBlog): void { //Muestra u oculta el texto completo del blog
    blog.expanded = !blog.expanded;
  }

  moreOrLess(blog: IBlog){ //Cambia el texto del botón de "leer más" a "leer menos" y viceversa
    if(blog.expanded){
      return "leer menos";
    } else return "leer más";
  }
}
