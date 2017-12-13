import mock from 'mockjs'
let fendata = []
// let fontCon = []
for (var i = 0; i < 20; i++) {
  fendata.push({
    img: mock.Random.dataImage('400x400'),
    title: mock.Random.cword(2, 8),
    con: mock.Random.cword(5, 10)
  })
}
export default fendata
