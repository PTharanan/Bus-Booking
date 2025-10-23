import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-ticket',
  imports: [CommonModule],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css'
})
export class Ticket {
  data: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = params;
    });
  }

  downloadPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.text('E-Ticket', pageWidth / 2, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Name: ${this.data.fullname}`, 14, 40);
    doc.text(`Mobile No: ${this.data.mobileNo}`, 14, 48);
    doc.text(`NIC: ${this.data.NIC}`, 14, 56);

    autoTable(doc, {
      startY: 70,
      body: [
        ['From', this.data.from],
        ['To', this.data.to],
        ['Date', this.data.date],
        ['Departure Time', this.data.Depaturetime],
        ['Duration', this.data.Duration],
        ['Seat No', this.data.Seat_no],
        ['Price', `Rs. ${this.data.price}`],
      ]
    });

    doc.save('E-Ticket.pdf');
  }
}
