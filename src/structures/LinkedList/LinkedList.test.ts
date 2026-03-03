import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  it('should append values correctly', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    expect(list.toArray()).toEqual([1, 2]);
    expect(list.size).toBe(2);
  });

  it('should be empty initially', () => {
    const list = new LinkedList<number>();
    expect(list.size).toBe(0);
    expect(list.toArray()).toEqual([]);
  });
});
