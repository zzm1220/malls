/*
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-01 09:46:55
 * @FilePath: \malls\src\router.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "./pages/layout/Layout"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "./pages/home/Home"),
      },
      {
        path: "/product/:id",
        name: "Product",
        component: () =>
          import(/* webpackChunkName: "Product" */ "./pages/product/Product"),
      },
      {
        path: "/detail/:id",
        name: "Detail",
        component: () =>
          import(/* webpackChunkName: "Detail" */ "./pages/detail/Detail"),
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    redirect: "/orderHome",
    component: () =>
      import(
        /* webpackChunkName: "OrderLayout" */ "./pages/layout/OrderLayout"
      ),
    children: [
      {
        path: "/orderHome",
        name: "OrderHome",
        component: () =>
          import(/* webpackChunkName: "OrderHome" */ "./pages/order/Order"),
      },
      {
        path: "list",
        name: "OrderList",
        component: () =>
          import(/* webpackChunkName: "OrderList" */ "./pages/order/OrderList"),
      },
      {
        path: "pay",
        name: "OrderPay",
        component: () =>
          import(/* webpackChunkName: "OrderPay" */ "./pages/order/OrderPay"),
      },
      {
        path: "alipay",
        name: "AliPay",
        component: () => 
          import(/* webpackChunkName: "AliPay" */ "./pages/payment/alipay"),
      },
      {
        path: "confirm",
        name: "OrderConfirm",
        component: () =>
          import(
            /* webpackChunkName: "OrderConfirm" */ "./pages/order/OrderConfirm"
          ),
      },
    ],
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ "./pages/cart/Cart")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName:"Login" */ "./pages/login/Login")
  }
];

const router = new VueRouter({
  routes
})

export default router