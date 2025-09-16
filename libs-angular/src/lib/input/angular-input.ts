/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-angular-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './angular-input.html',
  styleUrl: './angular-input.scss',
})
export class AngularInput {
  @Input() type: 'text' | 'number' | 'password' | 'email' = 'text';
  @Input() placeholder = '';
  @Input() parentForm: FormGroup | any = null;
  @Input() fieldName = '';
  @Input() disabled = false;
  @Input() readonly = false;
  public value: any = null;
  public changed = (value: string) => {};
  public touched = () => {};

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }
  public writeValue(value: string): void {
    this.value = value;
  }
  public onChange(event: Event | any): void {
    const value: any = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
