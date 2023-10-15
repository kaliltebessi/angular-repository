import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Invoice } from 'src/models/invoice';




@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  idFacture?: number;
  active?: boolean;
  dateFacture?: string;
  montantFacture?: number;
  montantRemise?: number;
  list : Invoice[] = [ 
    {idFacture:1,montantFacture:120, montantRemise:10, dateFacture:"12/12/2021", active:true},
    {idFacture:2,montantFacture:1020, montantRemise:90, dateFacture:"22/11/2020",active:true},
    {idFacture:3,montantFacture:260, montantRemise:30, dateFacture:"18/10/2020",active:false},
    {idFacture:4,montantFacture:450, montantRemise:40, dateFacture:"14/12/2020",active:true},
   ];

  constructor(private route: ActivatedRoute) { }

  /*ngOnInit(): void {
  this.route.queryParamMap.subscribe(params => {
    this.id = +params.get('id'); 
    this.active = params.get('active') === 'true';
  });
}
*/

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idFacture = +params['idFacture']; 
      this.active = params['active'] === 'true'; 

      const selectedInvoice = this.list.find(invoice => invoice.idFacture === this.idFacture);

      if (selectedInvoice) {
        this.dateFacture = selectedInvoice.dateFacture;
        this.montantFacture = selectedInvoice.montantFacture;
        this.montantRemise = selectedInvoice.montantRemise;
      }
    });
  }
}
