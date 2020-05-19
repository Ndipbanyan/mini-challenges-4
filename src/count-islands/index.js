function crawler(row, col, grid, list) {
  list[row.toString() + col.toString()] = null

  if ((row > 0) &&
    grid[row - 1][col] == 1 &&
    list[(row - 1).toString() + col.toString()] !== null) {
    crawler(row - 1, col, grid, list)

  }
  if ((row < grid.length - 1) &&
    grid[row + 1][col] == 1 &&
    list[(row + 1).toString() + col.toString()] !== null) {
    crawler(row + 1, col, grid, list)

  }
  if (grid[row][col - 1] == 1 &&
    list[row.toString() + (col - 1).toString()] !== null) {
    crawler(row, col - 1, grid, list)

  }
  if (grid[row][col + 1] == 1 &&
    list[row.toString() + (col + 1).toString()] !== null) {
    crawler(row, col + 1, grid, list)
  }
}

function countIslands(grid) {
  let count = 0
  let list = {}

  grid.forEach((element, rootI) => {
    element.forEach((item, childI) => {
      list[rootI.toString() + childI.toString()] = item
    })
  });

  grid.forEach((element, rootIndex) => {
    element.forEach((item, childIndex) => {
      if (item == 1 &&
        list[rootIndex.toString() + childIndex.toString()] !== null) {
        
        count++
        crawler(rootIndex, childIndex, grid, list)
      }
    })
  });

  return count;
}

module.exports = countIslands;
