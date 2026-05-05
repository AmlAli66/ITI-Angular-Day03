import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth/services/auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  users: User[] = [];
  selectedUser?: User;
  isLoadingUser = false;
  private modalInstance: any;

  constructor(private auth: Auth, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewInit() {
    // Create the modal instance once and reuse it
    const modalEl = document.getElementById('userModal');
    this.modalInstance = new (window as any).bootstrap.Modal(modalEl);
  }

  loadUsers() {
    this.auth.getUsers().subscribe(res => {
      this.users = [...res];
      this.cdr.detectChanges();
    });
  }

  delete(id: number) {
    this.auth.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  getUser(id: number) {
    // 1. Clear previous data and show modal with loading state
    this.selectedUser = undefined;
    this.isLoadingUser = true;
    this.cdr.detectChanges(); // flush the cleared state first

    // 2. Show modal
    this.modalInstance.show();

    // 3. Fetch and populate
    this.auth.getUserById(id).subscribe(res => {
      this.selectedUser = res;
      this.isLoadingUser = false;
      this.cdr.detectChanges();
    });
  }
}