import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss']
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string
  @Input() subtitulo: string

  value: number = 0
  onChange = () => {}
  onTouch = () => {}

  // armazenar valor input
  writeValue(value: any): void {
    this.value = value
  }

  // faz vinculo com alteração do valor e formulário
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


}
