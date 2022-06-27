require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_BLOG_URI = process.env.MONGODB_BLOG_URI

module.exports = {
  MONGODB_BLOG_URI,
  PORT,
}
