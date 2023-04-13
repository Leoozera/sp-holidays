# Instalação

```sh
$ npm install sp-holidays --save
```

# Descrição

Biblioteca criada para fins de uso pessoal e aprendizado.
Base dados utilizada proveniente do usuário: joaopbini

OBS: Suporte a Typescript.


```javascript
const { isHoliday, isWorkday } = require("sp-holidays");
// ES2015 modules
import { isHoliday, isWorkday } from "sp-holidays";
```

# Verificar se a data é um feriado nacional

```javascript
console.log(isHoliday({ dateString: "01-01-2023" }));
/*
Holiday {
  name: 'Ano novo',
  description: 'Dia da confraternização universal',
  date: 2023-01-01T03:00:00.000Z,
  type: 'national',
  isOptional: undefined,
  uf: undefined,
  town: undefined
}
*/
```

# Verificar se a data é um feriado nacional ou estadual

```javascript
console.log(isHoliday({ dateString: "09-07-2023", stateUF: "SP" }));
/*
Holiday {
  name: 'Revolução Constitucionalista',
  description: 'A Revolução Constitucionalista de 1932 foi um movimento armado que tinha por objetivo a derrubada do Governo Provisório de Getúlio Vargas e a promulgação de uma nova constituição para o Brasil.',
  date: 2023-07-09T03:00:00.000Z,
  type: 'state',
  isOptional: undefined,
  uf: 'SP',
  town: ''
}
*/
```

# Verificar se a data é um feriado nacional, estadual ou nacional

```javascript
console.log(isHoliday({ dateString: "09-07-2023", stateUF: "SP", town: 'Adamantina' }));
/*
Holiday {
  name: 'Feriado Municipal',
  description: '',
  date: 2023-12-08T03:00:00.000Z,
  type: 'municipal',
  isOptional: undefined,
  uf: 'SP',
  town: 'Adamantina'
}
*/
```
# Verificar se a data é um dia util

```javascript
console.log(isWorkday({ dateString: "09-07-2023", stateUF: "SP", town: 'Adamantina' }));
/*
false
*/
```