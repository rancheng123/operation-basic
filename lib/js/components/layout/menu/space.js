import Space from '@svg/space.svg'
export default {
    //二级路由
    key: '/space',
    text: '场地管理',
    icon: Space,
    children: [
        {
            path: '/space/build/list',
            key: '/space/build/list',
            text: '楼盘列表'
        },
        {
            path: '/space/location/list',
            key: '/space/location/list',
            text: '场地列表',
        },
        {
            path: '/space/station/list',
            key: '/space/station/list',
            text: '工位列表',
        },
        {
            path: '/space/room/list',
            key: '/space/room/list',
            text: '房间列表',
        },
        {
            path: '/space/owner/list',
            key: '/space/owner/list',
            text: '业主列表',
        },
        {
            path: '/space/main/list',
            key: '/space/main/list',
            text: '主体列表',
        }
    ]
};