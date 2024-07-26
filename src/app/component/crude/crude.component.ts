import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crude',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crude.component.html',
  styleUrl: './crude.component.css' 
})
export class CrudeComponent {
  public nom:String = "";
  prenom = "";
  sexes="";
  mention ="";
  tableau:any[]=[];
  
  public ajouter():void{
/*    verification :
      console.log("Nom : ", this.nom)
      console.log("Prenom : ", this.prenom)
      console.log("Mention : ", this.mention)
      console.log("Sexe : ", this.sexes)
*/

      //Recupere données via formulaire
    const dataForm = {
      anarana: this.nom,
      fanampiny: this.prenom,
      safidy : this.mention,
      fananahana: this.sexes
    }
      //ajout dans le local storage
    this.tableau.push(dataForm);
    localStorage.setItem("Listes", JSON.stringify(this.tableau))

    this.reset()
  }
 
  public reset():void{
    this.nom="";
    this.prenom="";
    this.mention="";
    this.sexes="";
  }

   recuperer():void{
     const local = localStorage.getItem("Listes");
     if ( local === null) {
       this.tableau=[]
     } else {
      
       this.tableau = JSON.parse(local);
     }
   }

}
