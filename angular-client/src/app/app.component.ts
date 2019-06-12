import { Component, OnInit, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]  
})
export class AppComponent implements OnInit {
  title = 'angular-client';
  appversion= 'version 1.0.0'

  // Link to our api, pointing to localhost

  API = environment.API_ENDPOINT ;
  // API = 'http://kworker1:31199/api/users';

  // Declare empty list of people
  people: any[] = [];
  constructor(  private http: HttpClient) {

  }

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .subscribe(() => {
        this.getAllPeople();
      })
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/users`)
    .subscribe(
        (people:any) => {
          // Handle result
          console.log('successfully got people')
          console.log(people)
          this.people = people
        },
        (error:any) => {console.log(error)}
      )
  }
}