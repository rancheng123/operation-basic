import Order from '@svg/order.svg'
export default {
    key: '/order',
    text: '订单管理',
    icon: Order,
    children: [{
        text: '办公服务订单管理',
        key: '/order/office/list/pre',
        path: '/order/office/list/pre'
    }, {
        text: '办公服务变更管理',
        key: '/order/office/list/altered',
        path: '/order/office/list/altered'
    }]
}