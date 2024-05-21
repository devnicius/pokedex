import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputComponent implements OnInit {
  ngOnInit() {
  }
}
