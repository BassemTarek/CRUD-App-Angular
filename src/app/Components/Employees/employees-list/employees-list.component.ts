import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees:Employee[]=[
    {
      id: 'emp1-aaa-1234-5678',
      name: 'emp1',
      email: 'emp1@gmail.com',
      phone: 1111,
      salary: 5000,
      department: 'Dept1',
    },
    {
      id: 'emp2-aaa-1234-5678',
      name: 'emp2',
      email: 'emp2@gmail.com',
      phone: 2222,
      salary: 6000,
      department: 'Dept2',
    },
    {
      id: 'emp3-aaa-1234-5678',
      name: 'emp3',
      email: 'emp1@gmail.com',
      phone: 3333,
      salary: 2000,
      department: 'Dept3',
    },
    {
      id: 'emp4-aaa-1234-5678',
      name: 'emp4',
      email: 'emp4@gmail.com',
      phone: 4444,
      salary: 8000,
      department: 'Dept4',
    }
]
  constructor() { }

  ngOnInit(): void {
    this.employees.push()
  }
 
}
