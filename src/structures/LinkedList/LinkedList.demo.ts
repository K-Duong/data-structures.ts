import { registerStructure } from '../../registry';
import { LinkedList } from './LinkedList';

registerStructure({
  name: 'LinkedList',
  description: 'A linear collection of data elements where each points to the next node.',
  timeComplexity: {
    access: 'O(n)',
    search: 'O(n)',
    insertion: 'O(1) at ends, O(n) elsewhere',
    deletion: 'O(1) at head, O(n) elsewhere'
  },
  demo: () => {
    const list = new LinkedList<number>();
    console.log('Created an empty Linked List.');
    
    console.log('Appending 10');
    list.append(10);
    console.log('Appending 20');
    list.append(20);
    console.log('Appending 30');
    list.append(30);
    
    console.log('Current state (Array form):', list.toArray());
  }
});
