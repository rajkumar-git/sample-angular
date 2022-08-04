import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() address:any;
  primaryAddress:any;
  constructor() { }

  ngOnInit(): void {
    this.getPrimaryAddress();    
  }
  getPrimaryAddress() {
    if(this.address != null && this.address.length > 0) {
      const addrIndex = this.address.findIndex((e:any) => e?.primary == true);
      if (addrIndex > -1) {
        const addr = this.address.at(addrIndex);
        this.primaryAddress = addr.address + ', ' + addr.State + ', ' + addr.Country;
      }
    }
  }

}
