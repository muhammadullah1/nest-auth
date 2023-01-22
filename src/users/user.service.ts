import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
 public users : User[] = [{
    id: 1, 
    username: "test1",
    password: "test1",
    email: "test1@gmail.com",
    age: 20,
    role: "admin"
 },
 {
      id: 2,
    username: "test2",
    password: "test2",
    email: "test2@gmail.com",
    age: 30,
    role: "user"
 },
 {
      id: 3,
    username: "test3",
    password: "test3",
    email: "test3@gmail.com",
      age: 40,
    role: "user"
 },
];

getUserByUsername(username: string): User {
    return this.users.find(user => user.username === username);
}
};