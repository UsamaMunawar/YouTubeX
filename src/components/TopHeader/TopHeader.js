import React from 'react';
import { Layout, Menu, Input } from 'antd';
import { VideoCameraFilled , MenuOutlined, BellFilled, UserOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { Search } = Input;



function TopHeader() {
    const onSearch = value => console.log(value);
    return (
        <Header className="header" style={{padding: '0px'}}>
            {/* <div className="logo" style={{backgroundColor: 'red'}}>YouTubeX</div> */}
            <Menu theme="dark" mode="horizontal" breakpoint="sm">
                <Menu.Item key="1" style={{width: 200, textAlign: 'center'}}>YouTubeX</Menu.Item>
                <Search placeholder="Search your favorite video content" onSearch={onSearch} style={{ width: 500, paddingTop: '15px' }} />
                <Menu.Item key="2"><VideoCameraFilled /></Menu.Item>
                <Menu.Item key="3"><MenuOutlined /></Menu.Item>
                <Menu.Item key="4"><BellFilled /></Menu.Item>
                <Menu.Item key="5"><UserOutlined /></Menu.Item>
            </Menu>
        </Header>
    )
}


export default TopHeader;