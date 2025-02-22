import { Component, inject } from '@angular/core';
import { BloggingFormComponent } from "./components/blogging-form/blogging-form.component";
import { BloggingListComponent } from "./components/blogging-list/blogging-list.component";
import { IBlog } from './interfaces/iblog.interface';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BloggingFormComponent, BloggingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  myBlogs : IBlog[] = []; //Array de blogs que se mostrará en la página
  seccionActual : string = "noticias";

  private blogService = inject(BlogService); //Inyecta el servicio BlogService

  ngOnInit(): void {
    this.myBlogs = this.blogService.getBlogs(); //Inicializa myBlogs con el contenido del service
  }

  getBlogForm(event : IBlog){
    this.myBlogs = [...this.myBlogs, event]; //Añade un nuevo blog a la lista
    this.seccionActual = 'noticias';
  }

  cambiarSeccion(seccion : string) : void {
    this.seccionActual = seccion;
  }


}
