import { request } from './request'
export function getCategory() {
  return request({
    url: 'category'
  })
}


export function getCategoryIcon(maitKey) {
  return request({
    url: 'subcategory',
    params: {
      maitKey
    }
  })
}

// http://152.136.185.210:8000/api/z8/subcategory/detail?miniWallkey=50003&type=new
export function getCategoryGoods(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}