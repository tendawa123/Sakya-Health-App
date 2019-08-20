import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Common Diseases", description: "Tips About the common diseases", links: "/disease-create"},
    {id: 2, name: "First Aid", description: "App gives short description on first aid", links: "/firstaid"},
    {id: 3, name: "Health Tips", description: "Daily Health Tips", links: "/healthtips"},
  ];
  constructor() { }

  public getContacts():Array<{id, name, description, links}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, links}){
    this.contacts.push(contact);
  }
}
