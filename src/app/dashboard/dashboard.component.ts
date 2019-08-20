import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contacts ;
  selectedContact;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }
  public selectContact(contact){
    this.selectedContact = contact;
  }

}
