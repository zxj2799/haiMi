import mock from 'mockjs'
let homeNav = []
for (var i = 0; i < 10; i++) {
  homeNav.push({
    name: mock.Random.cword(2),
    type: i === 0 ? 1 : 2,
    id: i
  })
}
export default homeNav
