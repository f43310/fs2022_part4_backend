// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  // ...
  // console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  const total = blogs.reduce((sum, item) => {
    return sum + item.likes
  }, 0)
  return total
}

module.exports = {
  dummy,
  totalLikes,
}
