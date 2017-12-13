import mock from 'mockjs'
let goodslist = []
for (var i = 0; i < 500; i++) {
  goodslist.push({
    id: i,
    img: mock.Random.dataImage('375x375'),
    title: mock.Random.cparagraph(),
    type: mock.Random.integer(0, 9),
    price: mock.Random.float(1000, 5000, 1, 2)
  })
}
export default goodslist
