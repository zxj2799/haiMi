import mock from 'mockjs'
let recommend = []
for (var i = 0; i < 8; i++) {
  recommend.push({
    img: mock.Random.dataImage('375x240')
  })
}
export default recommend
