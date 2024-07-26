import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-ajout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test-ajout.component.html',
  styleUrl: './test-ajout.component.css'
})
export class TestAjoutComponent {

  //declaration variable
  nom: string = '';
  prenom: string = '';
  //tableau : str

  //fonction bouton ajouter
  ajouter(){
    // console.log("Nom : ",this.nom,' et Prenom :',this.prenom);
    // prompt('ny Prenom dia :',this.prenom);
    // alert('ny Nom dia :'+ ' '+this.nom);

    //rti asiana preposition 'this' ilay fct car pas 'cost'
    this.effacement();
  }
  //foction d'effacer
  effacement(){
    this.nom="";
    this.prenom="";
  }
  addlocal(){
    //localStorage.setItem()
  }


}
