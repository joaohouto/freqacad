<img src="https://freqacad.web.app/banner.png" style="width:100%">

<hr>

> O freqacad é um web app feito com ReactJS para o controle de frequências em disciplinas acadêmicas.

Acesse as orientações do minicurso em <a href="https://bit.ly/sct-react">https://bit.ly/sct-react</a>.

Veja o app em funcionamento em <a href="https://freqacad.web.app/">https://freqacad.web.app/</a>.

### 📄 Requisitos funcionais

- Adicionar/remover disciplina;
- Total de aulas no semestre (carga horária total e necessária h/a);
- Relatar frequência/ausência para cada disciplina;
- Obter estatísticas;
- Faltas/frequência relatadas e restantes;

### 📄 Classes

| subjects               |
| ---------------------- |
| id: integer (PK)       |
| name: string           |
| presenceCount: integer |
| absenceCount: integer  |
| presenceMinTax: float  |
| workload: integer      |

A única tabela que compõe o app é a de disciplinas (subjects).

- id: índice de cada item salvo no banco;
- name: o nome da disciplina;
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

Biblioteca de ícones em <a href="https://tabler-icons.io/">Tabler Icons</a>.

### ⚡ Guia de início rápido

Antes de qualquer coisa, é necessário ter o <a href="https://nodejs.org/en/">NodeJS</a> e o <a href="https://git-scm.com/downloads">GIT</a> instalados em sua máquina. Depois disso, no terminal/cmd/Prompt de Comando:

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
