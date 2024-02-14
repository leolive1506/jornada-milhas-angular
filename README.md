# [Material design](https://m3.material.io/components/text-fields/overview)
- [Angular material](https://material.angular.io/)
  - tem sua propria implementação do material design
  - traz alguns componentes menores já prontos
```sh
ng add @angular/material
# PERGUNTAS
# - 1. se quer prosseguir
# - 2. escolher um tema
# - 3. adicionar tipografia
# - 4. se quer incluir animações
```
# Serviços Singleton
Responsabilidade de fornecer funcionalidades específicas e compartilhadas em toda a aplicação
uma única instância de um serviço em toda a aplicação
- útil em casos como gerenciamento de recursos compartilhados, acesso a bancos de dados, configurações globais
## para configurar basta em providedIn
- root
  - pra toda aplicação, há somente uma instancia do serviço
  - nome desse projeto chama-se Singleton

# Environments
- comando abaixo gera .development para ambiente de desenvolvimento e outro para ambiente de produção
- para angular funcionar corretamente importar como se de produção fosse
```sh
ng generate environments
```
```ts
// arquivo environments
export const environment = {
  apiURL: 'http://localhost:8080'
};

// usage
import { environment } from 'src/environments/environment';
private apiURL: string = environment.apiURL
```

# ControlValueAccessor
- ao implementar eessa interface, permite passar um form control do componente pai
- estabelecer a comunicação entre o componente filho e pai com formulário
- permitindo a integração e interação corretas entre eles.
- estabelecendo a comunicação bidirecional necessária para interagir com o formulário.
- metodos implementados:
1. **writeValue(value: any):** Este método é chamado pelo Angular Forms para atualizar o valor do componente personalizado com base no valor fornecido pelo formulário. O componente deve atualizar sua visualização e estado interno de acordo com o novo valor.
2. **registerOnChange(fn: any):** Este método é usado para registrar uma função de retorno de chamada que será chamada pelo componente personalizado sempre que houver alterações em seu valor interno. O componente deve chamar essa função sempre que o valor for alterado para notificar o Angular Forms sobre as alterações.
3. **registerOnTouched(fn: any):** Este método é usado para registrar uma função de retorno de chamada que será chamada pelo componente personalizado quando ele for tocado ou sofrer uma alteração no estado de foco. O componente deve chamar essa função sempre que ocorrer uma interação com ele, como um clique ou foco.
4. **setDisabledState(isDisabled: boolean):** Este método é usado para definir o estado de desabilitado do componente personalizado com base no valor fornecido pelo formulário. O componente deve atualizar sua visualização e comportamento de acordo com o estado de desabilitado.

# AbstractControl, FormControl, FormGroup e ValidatorFn
## AbstractControl
Classe abstrata que serve como a classe base para os controles de formulário
- encapsula os comportamentos e propriedades comuns a todos os tipos de controles

## Form control
Representa controle de formulário individual
- Extends AbstractControl e adiciona metodos e propriedades especificos para manipular um único controle

## ValidatorFn
Tipo de função que define uma validação personalizada
```ts
import { FormControl, ValidatorFn } from '@angular/forms';

// Criando uma validação personalizada que verifica se o valor é um número par
const isEvenValidator: ValidatorFn = (control: FormControl) => {
  const value: number = control.value;
  if (value % 2 !== 0) {
    return { isEven: true };
  }
  return null;
};

// Usando a validação personalizada em um controle de formulário
const numberControl: FormControl = new FormControl('', isEvenValidator);

```
# Dicas
## sharedReplay
Permite armazenar em cache o resultado de um Observable
