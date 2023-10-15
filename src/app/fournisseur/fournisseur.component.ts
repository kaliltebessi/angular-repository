import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  id='';

  hide : boolean=false;
  fournisseur =
  {
    idFournisseur : 105 ,
    code: 'A104B89',
    libelle :'MyTeck'};

  changehide(){
    this.hide= !this.hide;
    console.log(this.hide);
  }
  
  constructor(private activated:ActivatedRoute ,router : Router ){
     console.log( this.activated.snapshot.params['id']);
     this.id=this.activated.snapshot.params['id'];

    

  }

}
