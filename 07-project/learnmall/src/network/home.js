import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

/**
 * 获取商品列表数据
 * @param {string} type 商品类型数据
 * @param {number} page 商品页码
 */
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

