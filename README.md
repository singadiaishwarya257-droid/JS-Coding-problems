# JS-Coding-problems

## Running JavaScript tasks

Each JavaScript file in this folder is an independent task. To run a task:

1. Open a terminal in this folder.
2. Run the file with Node.js, replacing the filename with the task you want to run:

```bash
node taskProductFilter.js
```

For example, the command above runs `taskProductFilter.js` and prints the products priced below 5000:

```text
[
	{ name: 'Headphone', price: 3000 },
	{ name: 'keyboard', price: 1500 }
]
```

Node.js must be installed. Check your installation with:

```bash
node --version
```

To run another task, use the same format:

```bash
node your-task-file.js
```