import { Injectable } from '@angular/core';
import { IBlog } from '../interfaces/iblog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
    private blogs: IBlog[] = [
        {
          title: "Descubren un nuevo exoplaneta habitable", 
          image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
          text: `Astrónomos han encontrado un nuevo exoplaneta en la zona habitable de su estrella, lo que podría indicar la posibilidad de vida. 
                  Este exoplaneta, denominado Kepler-452b, se encuentra a unos 1,400 años luz de la Tierra en la constelación de Cygnus. 
                  Los científicos han observado que el planeta tiene un tamaño similar al de la Tierra y orbita en la zona habitable de su estrella, 
                  lo que significa que podría tener agua líquida en su superficie. `,
          publicationDate: "2025-02-16"
        }, 
        {
          title: "Avances en la inteligencia artificial para la salud",
          image: "https://pro.campus.sanofi/.imaging/mte/portal/3840/dam/Portal/Spain/articulos/e-health/inteligencia-artificial-salud/inteligencia-artificial-medicina--1-.jpg/jcr:content/inteligencia-artificial-medicina%20(1).jpg",
          text: "Investigadores han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes.",
          publicationDate: "2025-02-15"
        },
        {
          title: "Nuevas tecnologías en energías renovables",
          image: "https://hogarsolarenergia.es/wp-content/uploads/2022/07/Fuentes-energias-renovables-hogar-solar.jpg",
          text: "Se han desarrollado nuevas tecnologías que mejoran la eficiencia de las energías renovables, haciendo que sean más accesibles y económicas.",
          publicationDate: "2025-02-18"
        },
        {
          title: "Exploración de Marte: nuevos descubrimientos",
          image: "https://www.mauricioluque.com/wp-content/uploads/2024/11/Rover-Perseverance.jpg",
          text: "La última misión a Marte ha revelado datos sorprendentes sobre la geología del planeta rojo, abriendo nuevas posibilidades para futuras exploraciones.",
          publicationDate: "2025-02-13"
        },
        {
          title: "Innovaciones en la energía solar",
          image: "https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2",
          text: "Nuevas tecnologías en paneles solares están aumentando la eficiencia y reduciendo los costos, haciendo que la energía solar sea más accesible para todos.",
          publicationDate: "2025-02-12"
        },
        {
          title: "Descubrimiento de una nueva especie marina",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          text: `Científicos marinos han descubierto una nueva especie de pez en las profundidades del océano Atlántico. 
                  Este pez, que ha sido nombrado como 'Atlantis profundis', tiene características únicas que lo diferencian de otras especies conocidas. 
                  Los investigadores están emocionados por este hallazgo, ya que podría proporcionar nuevas pistas sobre la evolución de la vida marina. 
                  El descubrimiento fue realizado durante una expedición de investigación que utilizó tecnología avanzada de submarinos para explorar áreas inexploradas del océano. 
                  Los científicos planean continuar sus estudios para aprender más sobre esta fascinante nueva especie y su ecosistema.`,
          publicationDate: "2025-02-11"
        },
        {
          title: "Avances en la medicina regenerativa",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GpV02oZq3JNd2VNn71em-MYEPY81ByjN-w&s",
          text: "Investigadores han desarrollado una nueva técnica para regenerar tejidos dañados, lo que podría revolucionar el tratamiento de lesiones y enfermedades crónicas.",
          publicationDate: "2025-02-10"
        },
        {
          title: "Tecnología blockchain en la industria financiera",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
          text: "La tecnología blockchain está transformando la industria financiera, ofreciendo mayor seguridad y transparencia en las transacciones.",
          publicationDate: "2025-02-09"
        },
        {
          title: "Impacto del cambio climático en la biodiversidad",
          image: "https://www.un.org/sites/un2.un.org/files/mamiferos-habitat-climate.png?424324",
          text: `El cambio climático está teniendo un impacto significativo en la biodiversidad global. 
                  Los científicos han observado cambios en los patrones de migración de las aves, la distribución de las plantas y el comportamiento de los animales. 
                  Estos cambios están afectando los ecosistemas y la capacidad de las especies para adaptarse a nuevas condiciones. 
                  Los investigadores están trabajando para comprender mejor estos impactos y desarrollar estrategias para mitigar los efectos del cambio climático en la biodiversidad. 
                  La colaboración internacional y la implementación de políticas efectivas son esenciales para abordar este desafío global.`,
          publicationDate: "2025-02-08"
        },
        {
          title: "Desarrollo de vehículos eléctricos más eficientes",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKw8KsLwA930X_b5UaCipWXoSr-ZbFiPP3g&s",
          text: "Las nuevas innovaciones en baterías y motores están haciendo que los vehículos eléctricos sean más eficientes y accesibles para el público en general.",
          publicationDate: "2025-02-07"
        }
      ];

  getBlogs(): IBlog[] {
    return this.blogs;
  }

  addBlog(blog: IBlog): void {
    this.blogs.push(blog);
  }
}