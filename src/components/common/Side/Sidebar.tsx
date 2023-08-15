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
    getItem("음식", "sub3", null, [getItem("식당", "1"), getItem("카페", "2")]),
    getItem("문화생활", "sub5", null, [
      getItem("영화", "3"),
      getItem("놀이공원", "4"),
      getItem("게임", "5"),
    ]),
    getItem("쇼핑", "sub4", null, [
      getItem("옷", "6"),
      getItem("신발", "7"),
      getItem("화장품", "8"),
    ]),
  ]),
  getItem("내 정보", "sub2", null, [
    getItem("정보수정", "9"),
    getItem("마이페이지", "10"),
  ]),
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
