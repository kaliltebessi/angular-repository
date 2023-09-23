import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {

  hide : boolean=false;
  fournisseur =
  {
    idFournisseur : 105 ,
    code: 'A104B89',
    libelle :'MyTeck'};

  changehide(){
    this.hide=true;
    console.log(this.hide);
  }
}
