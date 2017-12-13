import mock from 'mockjs'
let bannerimg = []
for (var i = 0; i < 5; i++) {
  bannerimg.push({
    img: mock.Random.dataImage('750x392')
  })
}
export default bannerimg
