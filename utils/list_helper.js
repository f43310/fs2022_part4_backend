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

const favoriteBlog = (blogs) => {
  let max = 0
  let maxLike = null
  blogs.forEach((blog) => {
    if (blog.likes > max) {
      max = blog.likes
      maxLike = blog
    }
  })
  return maxLike
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
