/**
 * Represents a Percolation system using an N-by-N grid.
 * Sites can be either open or blocked (closed).
 */
export class Percolation {

  /**
   * State (open/close) of each site in the grid.
   *
   * @private
   */
  private readonly _sites: boolean[][];

  /**
   * The size of the grid (N x N).
   *
   * @private
   */
  private readonly _size: number;

  /**
   * Initializes a percolation system with all sites initially blocked.
   * @param size The size of the grid (N x N).
   * @param grid Optional initial grid state. If provided, size is ignored and recalculated from the grid.
   * @throws {Error} if size <= 0.
   */
  public constructor(size: number, grid?: boolean[][]) {
    if (grid) {
      this._size = grid.length;
      if (this._size <= 0) {
        throw new Error(`size must be greater than 0, received: ${this._size}`);
      }
      // Deep copy the grid to prevent external mutations
      this._sites = grid.map(row => [...row]);
    } else {
      if (size <= 0) {
        throw new Error(`size must be greater than 0, received: ${size}`);
      }
      this._size = size;

      // Initialize an N-by-N grid with all sites closed (false)
      this._sites = Array(size).fill(null).map(() => Array(size).fill(false));
    }
  }

  /**
   * Opens or closes a specific site in the grid system.
   * @param row The row index of the site (0-indexed).
   * @param col The column index of the site (0-indexed).
   * @param open A boolean indicating whether to open (true) or close (false) the site. Defaults to true.
   * @throws {Error} if the row or col indices are out of bounds.
   */
  public open(row: number, col: number, open: boolean = true): void {
    if (row < 0 || row >= this._size || col < 0 || col >= this._size) {
      throw new Error(`Row and column must be between 0 and ${this._size - 1}`);
    }

    this._sites[row][col] = open;
  }

  /**
   * Checks if a specific site is currently open.
   * @param row The row index of the site (0-indexed).
   * @param col The column index of the site (0-indexed).
   * @returns {boolean} True if the site is open, false otherwise.
   * @throws {Error} if the row or col indices are out of bounds.
   */
  public isOpen(row: number, col: number): boolean {
    if (row < 0 || row >= this._size || col < 0 || col >= this._size) {
      throw new Error(`Row and column must be between 0 and ${this._size - 1}`);
    }
    return this._sites[row][col];
  }

  /**
   * Counts and returns the total number of open sites dynamically.
   * @returns {number} The current count of open sites in the grid.
   */
  public numberOfOpenSites(): number {
    let count = 0;

    for (let r = 0; r < this._size; r++) {
      for (let c = 0; c < this._size; c++) {
        if (this._sites[r][c]) {
          count++;
        }
      }
    }

    return count;
  }

  /**
   * Checks if the system percolates (if there is a path from top to bottom).
   * @returns {boolean} True if the system percolates. 
   */
  public percolates(): boolean {
    // shalow array of sites to group connected sites by a root id = row * size + col
    // the default array contains only (-1);
    const connectedSite: number[][] = Array(this._size).fill(null).map((r) => Array(this._size).fill(-1));

    // group all connected site by differents root id
    for (let row = 0; row < this._size; row++) {
      for (let col = 0; col < this._size; col++) {
        if (this.isOpen(row, col)) {
          // check if the upper site or the left site contains the root id
          if (row > 0 && connectedSite[row - 1][col] >= 0) {
            connectedSite[row][col] = connectedSite[row - 1][col];
          } else if (col > 0 && connectedSite[row][col - 1] >= 0) {
            connectedSite[row][col] = connectedSite[row][col - 1];
          }else {
            connectedSite[row][col] = row * this._size + col;
          }
        }
      }
    }

    // console.log(connectedSite);

    const lastRow = connectedSite[connectedSite.length - 1];

    return lastRow.some((cell) => cell >= 0 && cell < this._size);
  }
};


