import React, { useEffect, useRef, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import * as S from "./Sidebar.styled";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("카테고리", "sub1", null, [
    getItem("음식", "1"),
    getItem("쇼핑", "sub3", null, [
      getItem("화장품", "2"),
      getItem("신발", "3"),
      getItem("의류", "4"),
    ]),
    getItem("문화생활", "sub4", null, [
      getItem("영화", "5"),
      getItem("게임", "6"),
      getItem("놀이공원", "7"),
      getItem("워터파크", "8"),
    ]),
  ]),
  getItem("내 정보", "sub2", null, [
    getItem("정보수정", "9"),
    getItem("마이페이지", "10"),
  ]),
  // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),
];

const rootSubmenuKeys = ["sub1", "sub2"];

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
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
    <S.SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        items={items}
      />
    </S.SideBarWrap>
  );
}

export default Sidebar;
