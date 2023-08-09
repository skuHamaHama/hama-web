import React, { useEffect, useRef } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Layout, Menu, theme } from 'antd';
import * as S from './Sidebar.styled';

const { Sider } = Layout;
  
  const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );
 
function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });
 
  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };
 
  const toggleSide = () => {
    setIsOpen(false);
  };
 
  return (
    <S.SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
            <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
            </Sider>
    </S.SideBarWrap>
  );
}
 
export default Sidebar;