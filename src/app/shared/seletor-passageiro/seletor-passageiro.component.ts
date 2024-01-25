import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  // se não da erro que não definiu acessor do form control
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // usar uma classe ja existente
      // forwardRef, pega referencia da classe depois (pois não existe em tempo de compilação)
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string
  @Input() subtitulo: string

  value: number = 0
  onChange = (value: number) => {}
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

  }

  incrementar() {
    this.value += 1
    this.onChange(this.value)
    this.onTouch()
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1
      this.onChange(this.value)
      this.onTouch()

    }
  }
}
