import { Component, Input } from '@angular/core';
import { BloggingFormComponent } from "./components/blogging-form/blogging-form.component";
import { BloggingListComponent } from "./components/blogging-list/blogging-list.component";
import { IBlog } from './interfaces/iblog.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BloggingFormComponent, BloggingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  myBlogs : IBlog[] = [
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    },
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    },
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    },
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    },
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    },
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    },
    {
      title: "Descubren un nuevo exoplaneta habitable", 
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida.",
      publicationDate: "2025-02-16"
    }, 
    {
      title: "Avances en la inteligencia artificial para la salud",
      image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
      text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      publicationDate: "2025-02-15"
    }
  ]

  seccionActual : string = "noticias";

  getBlogForm(event : IBlog){
    this.myBlogs = [...this.myBlogs, event];
    console.log(this.myBlogs);
    this.seccionActual = 'noticias';
  }

  cambiarSeccion(seccion : string) : void {
    this.seccionActual = seccion;
  }

}
