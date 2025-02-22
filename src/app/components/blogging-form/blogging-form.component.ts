import { Component, EventEmitter, Output } from '@angular/core';
import { IBlog } from '../../interfaces/iblog.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogging-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blogging-form.component.html',
  styleUrl: './blogging-form.component.css'
})
export class BloggingFormComponent {
  newBlog : IBlog = {title: "", image: "", text: "", publicationDate: ""}
  @Output() sendBlog : EventEmitter<IBlog> = new EventEmitter();

  saveBlog() : void{ // Guarda el blog en el array de blogs
    if(this.checkFormFields()){
      this.newBlog.publicationDate = new Date().toISOString().split("T")[0];
      this.sendBlog.emit(this.newBlog);
      this.newBlog = {title: "", image: "", text: "", publicationDate: ""}
    }
  }

  checkFormFields() : boolean { // Comprueba que los campos del formulario estén bien vacíos
    if(this.newBlog.title !== "" && this.newBlog.image !== "" && this.newBlog.text !== ""){
      if(!this.newBlog.image.startsWith("http")){
        alert("Por favor introduzca una URL válida para la imagen");
        return false;
      }
      return true;
    }
    alert("Por favor rellene todos los campos");
    return false;
  }

}
