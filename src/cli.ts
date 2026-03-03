#!/usr/bin/env node
import { Command } from 'commander';
import { registry } from './registry';
import './structures'; // This imports all structures and registers them

const program = new Command();

program
  .name('ds')
  .description('TypeScript Data Structures CLI')
  .version('1.0.0');

program
  .command('list')
  .description('List all available data structures')
  .action(() => {
    console.log('Available Data Structures:\n');
    registry.forEach((info) => {
      console.log(`- ${info.name}: ${info.description}`);
    });
  });

program
  .command('info')
  .description('Print time complexity and description of a data structure')
  .argument('<structure>', 'Name of the data structure (e.g., linkedlist)')
  .action((structure: string) => {
    const info = registry.get(structure.toLowerCase());
    if (!info) {
      console.error(`Data structure "${structure}" not found.`);
      return;
    }
    console.log(`\n=== ${info.name} ===\n`);
    console.log(`${info.description}\n`);
    console.log('Time Complexity:');
    for (const [operation, complexity] of Object.entries(info.timeComplexity)) {
      console.log(`  ${operation.padEnd(12)}: ${complexity}`);
    }
    console.log();
  });

program
  .command('run')
  .description('Run an interactive demo of a data structure')
  .argument('<structure>', 'Name of the data structure')
  .action((structure: string) => {
    const info = registry.get(structure.toLowerCase());
    if (!info) {
      console.error(`Data structure "${structure}" not found.`);
      return;
    }
    console.log(`\nRunning demo for ${info.name}...\n`);
    info.demo();
    console.log('\nDemo completed.');
  });

program.parse();
