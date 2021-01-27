import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
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
    component: () =>
      import(
        /* webpackChunkName: "OrderLayout" */ "./pages/layout/OrderLayout"
      ),
    children: [
      {
        path: "",
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
        path: "confirm",
        name: "OrderConfirm",
        component: () =>
          import(
            /* webpackChunkName: "OrderConfirm" */ "./pages/order/OrderConfirm"
          ),
      },
    ],
  },
];

const router = new VueRouter({
    routes
})

export default router