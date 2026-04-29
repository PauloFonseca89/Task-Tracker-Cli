# Task Tracker CLI

Aplicacao de linha de comando feita em Node.js para gerir tarefas usando um ficheiro JSON local.

Este projeto foi desenvolvido a partir do desafio:

https://roadmap.sh/projects/task-tracker

## Funcionalidades

- Adicionar tarefas
- Listar todas as tarefas
- Listar tarefas por estado
- Atualizar a descricao de uma tarefa
- Apagar tarefas
- Marcar tarefas como `in-progress`
- Marcar tarefas como `done`
- Guardar os dados num ficheiro `tasks.json`

## Requisitos

- Node.js instalado
- Nao sao usadas bibliotecas externas

## Como usar

Executa os comandos a partir da pasta do projeto.

### Adicionar uma tarefa

```bash
node task-cli.js add "Comprar pao"
```

### Listar todas as tarefas

```bash
node task-cli.js list
```

### Listar tarefas por estado

```bash
node task-cli.js list todo
node task-cli.js list in-progress
node task-cli.js list done
```

### Atualizar uma tarefa

```bash
node task-cli.js update 1 "Comprar pao e leite"
```

### Apagar uma tarefa

```bash
node task-cli.js delete 1
```

### Marcar uma tarefa como em progresso

```bash
node task-cli.js mark-in-progress 1
```

### Marcar uma tarefa como concluida

```bash
node task-cli.js mark-done 1
```

## Estrutura dos dados

As tarefas sao guardadas no ficheiro `tasks.json` com esta estrutura:

```json
[
  {
    "id": 1,
    "description": "Comprar pao",
    "status": "todo",
    "createdAt": "2026-04-29T10:00:00.000Z",
    "updatedAt": "2026-04-29T10:00:00.000Z"
  }
]
```

## Estados possiveis

- `todo`
- `in-progress`
- `done`

## Notas

O ficheiro `tasks.json` e criado automaticamente quando uma tarefa e adicionada pela primeira vez.
