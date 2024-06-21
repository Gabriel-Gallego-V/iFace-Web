import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { iconsPath } from '../../../app.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ],
})
export class InputComponent implements ControlValueAccessor {


  @Input()
  type = "text"
  @Input()
  size = "medium"
  @Input()
  label?: string
  focus = false
  value = ""
  id = "input-" + crypto.randomUUID()
  open = false


  get eyePath(){
    return this.open ? iconsPath + "eyeClose.svg" : iconsPath + "eye.svg"
  }

  get on(){
    return this.focus || this.value
  }

  writeValue(value: string): void {
    this.value = value
  }

  setDisabledState?(isDisabled: boolean): void {

  }

  onChange: (value: string) => void = () => {
    console.log("Oi");

  };
  onTouch: () => void = () => {};

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn
  }

}
