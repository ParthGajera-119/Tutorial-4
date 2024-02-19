import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any = [];

  constructor(private authService: AuthService, private router:Router, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error(error);
    });
  }
  
  viewUserDetail(userId: string): void {
    this.router.navigate(['/users', userId]);
  }

  searchTerm: string = '';

  filteredUsers(): any[] {
    if (!this.searchTerm) return this.users;
    return this.users.filter((user: { name: string; }) => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

navigateToUser(userId: string): void {
  this.router.navigate(['/users', userId]);
}
}