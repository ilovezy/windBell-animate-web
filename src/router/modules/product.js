import Layout from '@/views/layout/Layout'

export default [
  {
    path: '/product',
    component: Layout,
    meta: {
      title: '我要出借'
    },
    children: [{
      path: '',
      component: () => import('@/views/product/productListPage'),
      name: 'productList',
      meta: {
        title: '我要出借-列表'
      }
    }, {
      path: 'historyProductList',
      component: () => import('@/views/product/historyProductListPage'),
      name: 'historyProductList',
      meta: {
        title: '历史列表'
      }
    }, {
      path: 'productDetail',
      component: () => import('@/views/product/productDetailPage'),
      name: 'productDetail',
      meta: {
        title: '标的详情'
      }
    }]
  }
]
