import axios from '@/utils/http'
import MockAdapter from 'axios-mock-adapter'
import homeNav from './data/homenav'
import bannerimg from './data/bannerimg'
import advertising from './data/advertising'
import recommendthings from './data/recommendthings'
import goodslist from './data/goodslist'
import fenleiData from './data/fenlei'
var mock = new MockAdapter(axios, { delayResponse: 1000 })
mock.onGet('/data/homenav').reply(config => {
  return [200, homeNav]
})
mock.onGet('/data/bannerimg').reply(config => {
  return [200, bannerimg]
})
mock.onGet('/data/advertising').reply(config => {
  return [200, advertising]
})
mock.onGet('/data/recommendthings').reply(config => {
  return [200, recommendthings]
})
mock.onGet('/data/goodslist').reply(config => {
  let {type, page, pageSize} = config.params
  let i = 0
  let newData = goodslist.filter((item, index) => {
    if (item.type === type) {
      item.index = i++
    }
    return item.type === type
  })
  return [200, newData.splice(pageSize * page, pageSize)]
})
mock.onGet('/data/fenlei').reply(config => {
  return [200, fenleiData]
})
