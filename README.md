<img src="https://freqacad.web.app/banner.png" style="width:100%">

O freqacad é um web app feito com ReactJS para o controle de frequências em disciplinas acadêmicas.

Antes de qualquer coisa, é necessário ter o <a href="https://nodejs.org/en/">NodeJS</a> instalado em sua máquina.

### 📄 Requisitos funcionais

- Adicionar/remover disciplina;
- Total de aulas no semestre (carga horária total e necessária h/a);
- Relatar frequência/ausência para cada disciplina;
- Obter estatísticas;
- Faltas/frequência relatadas e restantes;

### 📄 Classes

| subjects       |
| -------------- |
| id (PK)        |
| name           |
| presenceCount  |
| absenceCount   |
| presenceMinTax |
| workload       |

A única tabela que compõe o app é a de disciplinas (subjects).

- id: índice de cada item salvo no banco;
- name: o nome da discplina;
- presenceCount: contagem de presenças;
- absenceCount: contagem de ausências;
- presenceMinTax: a porcentagem mínima de presença nas aulas para a aprovação;
- workload: carga horária, o total de aulas.

### 🔗 Links úteis

- <a href="https://pt-br.reactjs.org/docs/getting-started.html">Documentação ReactJS</a>
- <a href="https://reactrouter.com/en/v6.3.0/getting-started/overview">Documentação React Router V6</a>
- <a href="https://styled-components.com/docs">Documentação Styled Components</a>
- <a href="https://dexie.org/docs/Tutorial/React">Documentação Dexie.js</a>

### 🌌 Interface

Veja o protótipo de telas no <a href="https://www.figma.com/file/JTKVv6gBCGmkRL8qKoHsFq/freqacad?node-id=0%3A1">Figma</a>.

Biblioteca de ícones: <a href="https://tabler-icons.io/">Tabler Icons</a>

### ⚡ Guia de início rápido

É necessário ter o <a href="https://git-scm.com/downloads">GIT</a> instalado em sua máquina. Depois disso, no terminal/cmd/Prompt de Comando:

```bash
# clone o repositório
$ git clone https://github.com/joaohouto/freqacad.git
# vá para a pasta do projeto
$ cd freqacad
# instale as dependências
$ npm install # ou $ yarn
# inicie o projeto
$ npm start # ou $ yarn start
```
