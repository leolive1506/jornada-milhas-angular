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

# providedIn
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