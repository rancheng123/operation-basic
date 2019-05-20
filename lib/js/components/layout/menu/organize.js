import Organize from '@svg/organize.svg'
export default {
    //二级路由
    key: '/organize',
    text: '组织管理',
    icon : Organize,
    children: [
        {
            path: '/organize/list',
            key: '/organize/list',
            text: '组织列表',
            children : []
        }
    ]
}