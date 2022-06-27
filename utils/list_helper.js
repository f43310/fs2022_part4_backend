var _ = require('lodash')

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

const mostBlogs = (blogs) => {
  let res = _.countBy(blogs, 'author')
  let arr = Object.keys(res)

  let max = 0
  let maxAuthor = ''
  arr.forEach((key) => {
    if (res[key] > max) {
      max = res[key]
      maxAuthor = key
    }
  })
  let ret = {
    author: maxAuthor,
    blogs: max,
  }
  return ret
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
}
