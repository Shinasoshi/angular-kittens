import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-kitten-form',
  templateUrl: './kitten-form.component.html',
  styleUrls: ['./kitten-form.component.scss']
})
export class KittenFormComponent {

  @Input()
  kittenPictureUrl: string;

  @Output()
  submitted = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder
  ) {
  }

  form = this.fb.group({
    url: new FormControl(this.kittenPictureUrl),
    name: new FormControl('', Validators.required),
    race: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.form.valid) {
      this.updatePictureUrl();
      this.submitted.emit(this.form);
      this.form.reset();
    }
  }

  updatePictureUrl() {
    this.form.patchValue({url: this.kittenPictureUrl});
  }

  get requiredName() {
    return (this.form.get('name').hasError('required') &&
      this.form.get('name').touched);
  }

  get requiredRace() {
    return (this.form.get('race').hasError('required') &&
      this.form.get('race').touched);
  }
}
