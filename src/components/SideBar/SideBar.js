import { Divider, Layout, Menu } from 'antd';
import React from 'react';
import { LikeFilled, CompassFilled, PlayCircleFilled, HomeFilled, GroupOutlined, HistoryOutlined, ClockCircleOutlined, VideoCameraFilled } from '@ant-design/icons';

const { Sider } = Layout;

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
        <Menu.Item key="1" icon={<HomeFilled />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<CompassFilled />}>
          Trending
        </Menu.Item>
        <Menu.Item key="3" icon={<PlayCircleFilled />}>
          Subscriptions
        </Menu.Item>
        <Divider style={{ backgroundColor: '#ccc', padding: 0, margin: 0, lineHeight: '1px' }}></Divider>
        <Menu.Item key="4" icon={<GroupOutlined />}>
          Library
        </Menu.Item>
        <Menu.Item key="5" icon={<HistoryOutlined />}>
          History
        </Menu.Item>
        <Menu.Item key="6" icon={<VideoCameraFilled />}>
          Your Videos
        </Menu.Item>
        <Menu.Item key="7" icon={<ClockCircleOutlined />}>
          Watch Later
        </Menu.Item>
        <Menu.Item key="8" icon={<LikeFilled />}>
          Liked Videos
        </Menu.Item>
      </Menu>
    </Sider>
  )
}


