import { Component } from '@angular/core';
import {signal, ChangeDetectionStrategy} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatSlideToggleModule, FormsModule, MatButtonModule, ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  userStatus = signal<'online' | 'offline'>('offline');

  goOnline() {
  this.userStatus.set('online');
}
goOffline() {
  this.userStatus.set('offline');
}

toggleStatus() {
  this.userStatus.update(current => current === 'online' ? 'offline' : 'online');
}

}
