# Task Tracker CLI

Aplicacao de linha de comando feita em Node.js para gerir tarefas usando um ficheiro JSON local.

Projeto baseado no desafio:

https://roadmap.sh/projects/task-tracker

## Requisitos

- Node.js instalado
- Terminal ou PowerShell
- Nao precisa instalar dependencias

## Como executar

Abre o terminal na pasta do projeto e usa:

```bash
node task-cli.js <comando>
```

Exemplo:

```bash
node task-cli.js add "Estudar JavaScript"
```

## Comandos disponiveis

### Adicionar tarefa

```bash
node task-cli.js add "Comprar pao"
```

Cria uma nova tarefa com estado inicial `todo`.

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

### Atualizar descricao

```bash
node task-cli.js update 1 "Comprar pao e leite"
```

O numero `1` e o ID da tarefa.

### Apagar tarefa

```bash
node task-cli.js delete 1
```

### Marcar como em progresso

```bash
node task-cli.js mark-in-progress 1
```

### Marcar como concluida

```bash
node task-cli.js mark-done 1
```

## Exemplo de uso

```bash
node task-cli.js add "Primeira tarefa"
node task-cli.js add "Segunda tarefa"
node task-cli.js list
node task-cli.js update 2 "Segunda tarefa atualizada"
node task-cli.js mark-in-progress 2
node task-cli.js list in-progress
node task-cli.js mark-done 2
node task-cli.js delete 1
node task-cli.js list
```

## Onde os dados ficam guardados

As tarefas sao guardadas automaticamente no ficheiro:

```text
tasks.json
```

Se o ficheiro ainda nao existir, ele sera criado quando adicionares a primeira tarefa.

Exemplo do conteudo:

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

## Estados das tarefas

- `todo`
- `in-progress`
- `done`

## Observacoes

- Os IDs sao gerados automaticamente.
- As datas `createdAt` e `updatedAt` sao guardadas em formato ISO.
- O projeto usa apenas modulos nativos do Node.js.
