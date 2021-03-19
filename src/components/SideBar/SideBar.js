import { Layout, Menu} from 'antd';
import React from 'react';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const {Sider} = Layout;

const { SubMenu } = Menu;


export default function SideBar() {
    return (
        <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Trending
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Subscriptions
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Library
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          History
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
          Your Videos
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />}>
          Watch Later
        </Menu.Item>
        <Menu.Item key="8" icon={<UserOutlined />}>
          Liked Videos
        </Menu.Item>
      </Menu>
    </Sider>
    )
}


