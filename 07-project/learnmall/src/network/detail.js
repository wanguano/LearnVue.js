import {request} from './request'
export function getDetailData(iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
	return request({
		url: '/recommend'
	})
}

/**
 * 详情页中商品的详情信息,从传递的对象中取出需要用到的属性
 */
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

/**
 * 店铺信息
 */
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
	constructor(info, rule) {
		// 注: images可能没有值(某些商品有值, 某些没有值)
		this.image = info.images ? info.images[0] : '';
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}