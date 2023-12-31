"use client";

import React from "react";
import { GiSpaceSuit } from "react-icons/gi";
import { GoHome, GoProject } from "react-icons/go";
import { BsChatLeft } from "react-icons/bs";
import { MdOutlineContacts } from "react-icons/md";

import styles from "@/styles/userLayout.module.scss";
import { Loader, LoadingUser, Sidebar } from "@/components";
import { SocketProvider } from "@/providers/socketIo";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store/store";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import {
//   AddDirectConversation,
//   AddDirectMessage,
//   UpdateDirectConversation,
// } from "@/redux/slices/conversationSlice";

const { userLayout, container } = styles;

const menu = [
  {
    name: "My Space",
    Icon: <GiSpaceSuit size={35} />,
    link: "/user/profile",
  },
  {
    name: "Home",
    Icon: <GoHome size={35} />,
    link: "/user",
  },
  {
    name: "My Orders",
    Icon: <GoProject size={35} />,
    link: "/user/orders",
  },
  {
    name: "Chats",
    Icon: <BsChatLeft size={35} />,
    link: "/user/chats",
  },
  {
    name: "Contact Us",
    Icon: <MdOutlineContacts size={35} />,
    link: "/contact-us",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector(
    (state: RootState) => state.authUser
  );

  return (
    <div className={userLayout}>
      {!isAuthenticated ? (
        <LoadingUser />
      ) : (
        <>
          <Sidebar menu={menu} />

          <SocketProvider>
            <div className={`${container} dContainer`}>{children}</div>
          </SocketProvider>
        </>
      )}
    </div>
  );
};

export default Layout;
