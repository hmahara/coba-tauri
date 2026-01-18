import { Component, computed, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-concept',
  imports: [
    MatSlideToggleModule, FormsModule, MatButtonModule, ReactiveFormsModule,
    RouterLink
],
  templateUrl: './concept.html',
  styleUrl: './concept.css',
})
export class Concept {

  count = signal(0);

  

  isChecked = true;

  isEven = computed(() => this.count() % 2 === 0);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }

}
