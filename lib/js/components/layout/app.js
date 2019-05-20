import React, { Component, PropTypes } from 'react';

import { Layout } from 'antd';
import Main_left from './main_left'
import menuList from "./menu/index";

import AppHeader from './header';




// import { Layout } from 'antd';
// import Main_left from './main_left'
// import menuList from "./menu/index";

class App extends Component {
    constructor() {
        super();
        // utils.Cookies.get('token') ? "" : utils.Router.switchRoute('/login');
    }
    render() {
        return (
            <Layout>

                {/*头部  start*/}

                {/*头部  end*/}


                {/*左侧导航  start*/}
                <Main_left
                    $id="main_left"
                    data={menuList}
                ></Main_left>
                <Layout style={{overFlowY : 'auto', marginLeft: 224 }}>
                    <AppHeader></AppHeader>
                    {/*左侧导航  end*/}

                    {/*右侧内容  start*/}
                    {this.props.children}
                    {/*右侧内容  end*/}
                </Layout>


            </Layout>
        )
    }

}


export default App


