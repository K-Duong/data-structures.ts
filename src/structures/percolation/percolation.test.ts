import { Percolation } from './percolation';

describe('Percolation', () => {
  it('should throw an error if n <= 0', () => {
    expect(() => new Percolation(0)).toThrow();
    expect(() => new Percolation(-5)).toThrow();
  });

  it('should initialize a fully closed grid', () => {
    const perc = new Percolation(3);
    expect(perc.numberOfOpenSites()).toBe(0);
    expect(perc.isOpen(0, 0)).toBe(false);
    expect(perc.isOpen(2, 2)).toBe(false);
  });

  it('should open sites and track count correctly', () => {
    const perc = new Percolation(3);
    perc.open(1, 1);
    expect(perc.isOpen(1, 1)).toBe(true);
    expect(perc.numberOfOpenSites()).toBe(1);

    perc.open(2, 2);
    expect(perc.isOpen(2, 2)).toBe(true);
    expect(perc.numberOfOpenSites()).toBe(2);

    // Opening an already open site shouldn't increase count
    perc.open(1, 1);
    expect(perc.numberOfOpenSites()).toBe(2);

    // Closing a site
    perc.open(1, 1, false);
    expect(perc.isOpen(1, 1)).toBe(false);
    expect(perc.numberOfOpenSites()).toBe(1);
  });

  it('should throw error for out of bounds access', () => {
    const perc = new Percolation(3);
    expect(() => perc.open(3, 0)).toThrow();
    expect(() => perc.isOpen(-1, 0)).toThrow();
  });

  it('percolates() should return false', () => {
    const perc = new Percolation(3);
    expect(perc.percolates()).toBe(false);
  });
   it('percolates() should return true', () => {
    const perc = new Percolation(3);
    perc.open(0,2);
    perc.open(1,2);
    perc.open(2,2);
    expect(perc.percolates()).toBe(true);
  });
   it('percolates() should return false', () => {
    const perc = new Percolation(3);
    perc.open(0,1);
    perc.open(1,2);
    perc.open(2,2);
    expect(perc.percolates()).toBe(false);
  });
});
