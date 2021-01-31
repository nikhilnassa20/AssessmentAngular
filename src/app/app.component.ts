import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Assessment Result';
  gradeA="A";
  gradeB="B";
  gradeC="C";
  gradeO="O";

 items = [
    { firstName: 'Nikhil', lastName: 'Nassa', age: '22', Grade: 'A' },
    { firstName: 'Rishabh', lastName: 'Khurana', age: '24', Grade: 'O' },
    { firstName: 'Saket', lastName: 'Saroha', age: '22', Grade: 'B' },
    { firstName: 'Arpit', lastName: 'Bhardwaj', age: '22', Grade: 'C' },
    { firstName: 'Priyanshu', lastName: 'Nassa', age: '16', Grade: 'O' },
    { firstName: 'Aman', lastName: 'Sharma', age: '23', Grade: 'B' },
    { firstName: 'Dikshant', lastName: 'Rana', age: '24', Grade: 'A' },
    { firstName: 'Ritik', lastName: 'Raheja', age: '21', Grade: 'C' },
];
}


