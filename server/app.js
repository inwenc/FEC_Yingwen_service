const app = require('./index.js')


var port = 3001;

app.listen(port, () => {
  console.log(`server listening at ${port}`)
})