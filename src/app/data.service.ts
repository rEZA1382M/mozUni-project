import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {

      departments: [
        {"namedep": "Art", "idDep": 101},
        {"namedep": "Engineering", "idDep": 102},
        {"namedep": "Science", "idDep": 103},
        {"namedep": "Medical Science", "idDep": 104}
      ],

      facultyMembers: [
        {"nameMem": "woz", "idDep": 101, "grade2020": 15, "grade2021": 17, "grade2022": 19,"grade2023": 17},
        {"nameMem": "noz", "idDep": 103, "grade2020": 12, "grade2021": 10, "grade2022": 14,"grade2023": 15},
        {"nameMem": "roz", "idDep": 102, "grade2020": 14, "grade2021": 12, "grade2022": 14,"grade2023": 13},
        {"nameMem": "voz", "idDep": 104, "grade2020": 17, "grade2021": 15, "grade2022": 12,"grade2023": 11},
        {"nameMem": "coz", "idDep": 102, "grade2020": 20, "grade2021": 19, "grade2022": 18,"grade2023": 19},
        {"nameMem": "xoz", "idDep": 101, "grade2020": 19, "grade2021": 11, "grade2022": 13,"grade2023": 12},
        {"nameMem": "zoz", "idDep": 104, "grade2020": 11, "grade2021": 14, "grade2022": 17,"grade2023": 20},
        {"nameMem": "loz", "idDep": 103, "grade2020": 8, "grade2021": 15, "grade2022": 20,"grade2023": 14},
        {"nameMem": "soz", "idDep": 102, "grade2020": 5, "grade2021": 10, "grade2022": 11,"grade2023": 8},
        {"nameMem": "aoz", "idDep": 101, "grade2020": 10, "grade2021": 11, "grade2022": 13,"grade2023": 18},
        {"nameMem": "doz", "idDep": 103, "grade2020": 15, "grade2021": 17, "grade2022": 14,"grade2023": 17},
        {"nameMem": "foz", "idDep": 104, "grade2020": 16, "grade2021": 17, "grade2022": 15,"grade2023": 13},
        {"nameMem": "joz", "idDep": 104, "grade2020": 10, "grade2021": 8, "grade2022": 7,"grade2023": 9},
        {"nameMem": "goz", "idDep": 105, "grade2020": 18, "grade2021": 14, "grade2022": 16,"grade2023": 20},
      ],

      students: [
        {"id": 6,"name": "john","idDepartment": 101 ,"age": 19, "grade": 18, "birthday": "13820922", "email": "moz1@email.com", "password": 1234, "role": "teacher"},
        {"id": 1,"name": "jack","idDepartment": 102 ,"age": 19, "grade": 15, "birthday": "13820708", "email": "moz2@email.com", "password": 1234, "role": "student"},
        {"id": 2,"name": "peter","idDepartment": 103 ,"age":20, "grade": 16, "birthday": "13811112", "email": "moz3@email.com", "password": 1234, "role": "teacher"},
        {"id": 3,"name": "mary","idDepartment": 104, "age":21, "grade": 14, "birthday": "13800303", "email": "moz4@email.com", "password": 1234, "role": "teacher"},
        {"id": 4,"name": "smith","idDepartment": 101, "age":28, "grade": 12, "birthday": "13740228", "email": "moz5@email.com", "password": 1234, "role": "student"},
        {"id": 5,"name": "oliver","idDepartment": 101, "age":27, "grade": 17, "birthday": "13751013", "email": "moz6@email.com", "password": 1234, "role": "teacher"},
        {"id": 7,"name": "michael","idDepartment": 103, "age": 17, "grade": 10, "birthday": "13840508", "email": "moz7@email.com", "password": 1234, "role": "student"},
        {"id": 8,"name": "curry","idDepartment": 102, "age": 29, "grade": 19, "birthday": "13730107", "email": "moz8@email.com", "password": 1234, "role": "student"},
        {"id": 9,"name": "emma","idDepartment": 104, "age": 17, "grade": 10, "birthday": "13840614", "email": "moz9@email.com", "password": 1234, "role": "teacher"},
        {"id": 10,"name": "alex","idDepartment": 104, "age": 20, "grade": 12, "birthday": "13810120", "email": "moz10@email.com", "password": 1234, "role": "teacher"},
        {"id": 11,"name": "bob","idDepartment": 102, "age": 18, "grade": 9, "birthday": "13831011", "email": "moz11@email.com", "password": 1234, "role": "student"},
        {"id": 12,"name": "dave","idDepartment": 102, "age": 19, "grade": 19, "birthday": "13821103", "email": "moz12@email.com", "password": 1234, "role": "student"},
        {"id": 13,"name": "jacob","idDepartment": 103, "age": 20, "grade": 12, "birthday": "13810830", "email": "moz@13email.com", "password": 1234, "role": "teacher"},
        {"id": 14,"name": "jack","idDepartment": 103, "age": 19, "grade": 18, "birthday": "13820413", "email": "moz14@email.com", "password": 1234, "role": "student"},
        {"id": 15,"name": "jake","idDepartment": 104, "age": 17, "grade": 15, "birthday": "13850513", "email": "moz15@email.com", "password": 1234, "role": "teacher"},
        {"id": 16,"name": "paul","idDepartment": 102, "age": 20, "grade": 12, "birthday": "13811113", "email": "moz16@email.com", "password": 1234, "role": "student"},
        {"id": 17,"name": "mathew","idDepartment": 101, "age": 21, "grade": 19, "birthday": "13791220", "email": "moz17@email.com", "password": 1234, "role": "teacher"},
        {"id": 18,"name": "tony","idDepartment": 103, "age": 23, "grade": 11, "birthday": "13780231", "email": "moz18@email.com", "password": 1234, "role": "student"},
        {"id": 19,"name": "tim","idDepartment": 102, "age": 24, "grade": 12, "birthday": "13770702", "email": "moz19@email.com", "password": 1234, "role": "teacher"},
        {"id": 20,"name": "willy","idDepartment": 104, "age": 19, "grade": 16, "birthday": "13820929", "email": "moz20@email.com", "password": 1234, "role": "student"},
        {"id": 21,"name": "don","idDepartment": 101, "age": 18, "grade": 13, "birthday": "13830323", "email": "moz21@email.com", "password": 1234, "role": "teacher"},
        {"id": 22,"name": "conney","idDepartment": 102, "age": 20, "grade": 20, "birthday": "13810113", "email": "moz22@email.com", "password": 1234, "role": "student"},
        {"id": 23,"name": "brandi","idDepartment": 104, "age": 19, "grade": 17, "birthday": "13821010", "email": "moz23@email.com", "password": 1234, "role": "student"},
        {"id": 24,"name": "andrea","idDepartment": 102, "age": 23, "grade": 15, "birthday": "13781111", "email": "moz24@email.com", "password": 1234, "role": "student"},
        {"id": 25,"name": "magnus","idDepartment": 101, "age": 24, "grade": 13, "birthday": "13771018", "email": "moz25@email.com", "password": 1234, "role": "student"},
        {"id": 26,"name": "austin","idDepartment": 101, "age": 19, "grade": 16, "birthday": "13821223", "email": "moz26@email.com", "password": 1234, "role": "student"},
        {"id": 27,"name": "connie","idDepartment": 104, "age": 19, "grade": 11, "birthday": "13821014", "email": "moz27@email.com", "password": 1234, "role": "student"},
        {"id": 28,"name": "jonas","idDepartment": 104, "age": 25, "grade": 18, "birthday": "13761115", "email": "moz28@email.com", "password": 1234, "role": "teacher"},
        {"id": 29,"name": "wilson","idDepartment": 102, "age": 24, "grade": 18, "birthday": "13770810", "email": "moz29@email.com", "password": 1234, "role": "student"},
        {"id": 30,"name": "eddie","idDepartment": 101, "age": 26, "grade": 18, "birthday": "13751203", "email": "moz30@email.com", "password": 1234, "role": "student"},
      ]
    };
  }
}
