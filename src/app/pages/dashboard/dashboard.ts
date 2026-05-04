import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Auth } from '../../services/auth/services/auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  users: User[] = [];
  selectedUser?: User;


  constructor(private auth: Auth, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    console.log('Dashboard Init');
    this.loadUsers();
  }

  loadUsers() {
    this.auth.getUsers().subscribe(res => {
      this.users = [...res];

      this.cdr.detectChanges();
    });
  }

  delete(id: number) {
    this.auth.deleteUser(id).subscribe(() => {
      this.loadUsers(); // refresh
    });
  }

  getUser(id: number) {
    this.auth.getUserById(id).subscribe(res => {
      this.selectedUser = res;
      console.log('User:', res);
    });
  }


}
