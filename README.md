# TypeScript Implementation of Data Structures

This repository serves as an interactive playground and library for exploring various Data Structures implemented strictly in TypeScript. 

It aims to provide both a robust library of fundamental Data Structures for reuse, and an integrated CLI tool that can display metadata (like time complexity) and execute practical demonstration scripts.

## Installation

Ensure you have Node.js and `npm` installed.

1. Clone the repository.
2. Install dependencies:
```bash
npm install
```

## CLI Usage (Commander.js)

The project uses Commander.js to provide an interactive CLI. You can use it to list available structures, view their details, or run their interactive demos.

### Commands

**1. List all implemented data structures:**
```bash
npm run cli -- list
```

**2. View info (Time Complexity and description) about a structure:**
```bash
npm run cli -- info <structure_name>
# Example: npm run cli -- info linkedlist
```

**3. Run an interactive demo of a structure:**
```bash
npm run cli -- run <structure_name>
# Example: npm run cli -- run linkedlist
```

## Running Tests

We use Jest for automated unit testing all our data structures.

```bash
npm run test
```

## Project Structure

- `src/cli.ts` - Entry point for the Commander CLI application.
- `src/registry.ts` - Central registry mapping structure names to their info and runnable demos.
- `src/structures/` - Contains the individual implementations (`<Structure>.ts`), tests (`<Structure>.test.ts`), and CLI demo logic (`<Structure>.demo.ts`).
