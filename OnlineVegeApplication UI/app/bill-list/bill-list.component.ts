import { Component, OnInit } from '@angular/core';
import { Billingdetails } from '../model/billingdetails';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
bill : Billingdetails[];
err : string;
  constructor(private billService : BillService) { }

  ngOnInit(): void {
    this.billService.findAll().subscribe(
      (data) => this.bill =data,
      (err) => {console.log (err); this.err="sorry. unable to retrieve data"}
    );
  }

  delete(billingId: number) {
    if (confirm("Are you sure?")) {
      this.billService.removeBill(billingId).subscribe(
        () => { this.bill.splice(this.bill.findIndex(e => e.billingId == billingId), 1) }
      );
    }
  }

}

