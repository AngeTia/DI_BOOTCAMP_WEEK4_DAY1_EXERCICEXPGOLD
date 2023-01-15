import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice4';
  dateCurrent = new Date();
  myObject = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

  users$?: Observable<any>;

  constructor(private http: HttpClient) {}

  getListUsers(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1");
  }


  ngOnInit() {
    this.users$ = this.getListUsers();
  }

}