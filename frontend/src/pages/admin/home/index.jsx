"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function LogoBranding() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Home</p>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiInbox}>
            <p>Inbox</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>View Documents</p>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiTable}>
            <p>Sign Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
