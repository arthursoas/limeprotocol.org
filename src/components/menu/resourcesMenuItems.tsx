import React from 'react';
import { useLocation } from "react-router-dom";
import { Menu } from '@blueprintjs/core';

export function ResourcesMenuItems() {
  const { pathname } = useLocation();

  if (pathname.startsWith('/resources')) {
    return (
      <div>
        <Menu.Item text="Account" icon="blank" href="#resources/#account" />
        <Menu.Item text="Capability" icon="blank" href="#resources/#capability" />
        <Menu.Item text="Contact" icon="blank" href="#resources/#contact" />
        <Menu.Item text="Delegation" icon="blank" href="#resources/#delegation" />
        <Menu.Item text="Group" icon="blank" href="#resources/#group" />
        <Menu.Item text="Member" icon="blank" href="#resources/#member" />
        <Menu.Item text="Ping" icon="blank" href="#resources/#ping" />
        <Menu.Item text="Presence" icon="blank" href="#resources/#presence" />
        <Menu.Item text="Quota" icon="blank" href="#resources/#quota" />
        <Menu.Item text="Receipt" icon="blank" href="#resources/#receipt" />
      </div>
    )
  }

  return null;
}