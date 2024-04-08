
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Statistics ', '1', <PieChartOutlined />),
  getItem('Games ', '2', <DesktopOutlined />),
  

 
  getItem('Files', '9', <FileOutlined />),
];

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  

  return (
    <Layout style={{ minHeight: '1000vh', backgroundColor:'transparent'}} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{backgroundColor:'transparent'}}>
        <div />
        <Menu  theme={'light'} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
     
    </Layout>
  );
};



export default SideBar;
