import { registerStructure } from '../../registry';
import { Percolation } from './percolation';

registerStructure({
  name: 'Percolation',
  description: 'An N-by-N grid system representing open and blocked sites. Determines if the system percolates (has a path from top to bottom).',
  timeComplexity: {
    access: 'O(1) currently for isOpen',
    insertion: 'O(1) currently for open',
    search: 'Not implemented (percolates is a placeholder)'
  },
  demo: () => {
    const n = 5;
    const perc = new Percolation(n);
    console.log(`Created a ${n}x${n} Percolation grid.`);
    
    console.log('Opening (0,0), (1,1), and (2,2)');
    perc.open(0, 0);
    perc.open(1, 1);
    perc.open(2, 2);
    
    console.log(`Open sites: ${perc.numberOfOpenSites()}`);
    console.log(`Is (1, 1) open? ${perc.isOpen(1, 1)}`);
    console.log(`Is (3, 3) open? ${perc.isOpen(3, 3)}`);
    
    console.log(`Does it percolate? ${perc.percolates()} (TODO: Fix this logic later)`);
  }
});
