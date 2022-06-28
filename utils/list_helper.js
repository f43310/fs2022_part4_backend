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

const mostLikes = (blogs) => {
  //先获取一下这个数组中有多少个type
  var authors = []
  for (var i in blogs) {
    if (authors.indexOf(blogs[i].author) === -1) {
      authors.push(blogs[i].author)
    }
  }
  //一个包含多个list的结果对象
  var obj = {}

  // // 根据author生成多个数组
  for (var k in authors) {
    for (var j in blogs) {
      if (blogs[j].author === authors[k]) {
        console.log(authors[k], '>>>>>>>>>', blogs[j])
        obj[authors[k]] = obj[authors[k]] || []
        obj[authors[k]].push(blogs[j])
      }
    }
  }
  // console.log(authors)
  // console.log(obj)

  let arr2 = []
  for (let x in obj) {
    let obj2 = {}
    let total = obj[x].reduce((a, b) => {
      // console.log(a, b, b.likes)
      return a + b.likes
    }, 0)
    // console.log(x, total, '==================')
    obj2['author'] = x
    obj2['likes'] = total
    // console.log(obj2, '77777777777777777777')
    arr2.push(obj2)
  }
  // console.log(arr2)

  const obj3 = arr2.reduce((pre, cur) => {
    return cur.likes > pre.likes ? cur : pre
  })

  // console.log(obj3)
  return obj3
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
