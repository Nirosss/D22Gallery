const gProjs = [
  {
    id: 'Day10TouchNums',
    name: 'Touch Nums',
    title: 'Stepping out of the console',
    desc: 'lorem ipsum lorem ipsum lorem ipsum',
    url: 'https://nirosss.github.io/Day10TouchNums/',
    publishedAt: 1663193923000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'Day14MineSweeper',
    name: 'Minesweeper',
    title: 'A classic Challange',
    desc: 'lorem ipsum lorem ipsum lorem ipsum',
    url: `https://nirosss.github.io/Day14MineSweeper/`,
    publishedAt: 1663971523000,
    labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 'Day20CURDL',
    name: 'My Bookshop',
    title: 'Pick your favorite',
    desc: 'lorem ipsum lorem ipsum lorem ipsum',
    url: 'https://nirosss.github.io/Day20CURDL/',
    publishedAt: 1665353923000,
    labels: ['Matrixes', 'keyboard events'],
  },
  // In-Picture Game
  // Touch Nums
  // Ball Board
  // Chess
  // Todos
  // Books Shop
]

function getProjectById(projectId) {
  const project = gProjs.find((project) => projectId === project.id)
  return project
}

function getDateToDisplay(projectDate) {
  const date = new Date(projectDate)
  const [month, year] = [date.getMonth(), date.getFullYear()]
  const dateToDisplay = month + 1 + '/' + year
  return dateToDisplay
}
