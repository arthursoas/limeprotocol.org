import React from 'react';
import { useLocation } from "react-router-dom";
import { Menu } from '@blueprintjs/core';

export function ContentTypesMenuItems() {
  const { pathname } = useLocation();

  if (pathname.startsWith('/content-types')) {
    return (
      <div>
        <Menu.Item text="Chat State" icon="blank" href="#content-types/#chat-state" />
        <Menu.Item text="Collection" icon="blank" href="#content-types/#collection" />
        <Menu.Item text="Documment Select" icon="blank" href="#content-types/#document-select" />
        <Menu.Item text="Location" icon="blank" href="#content-types/#location" />
        <Menu.Item text="Media Link" icon="blank" href="#content-types/#media-link" />
        <Menu.Item text="Select" icon="blank" href="#content-types/#select" />
        <Menu.Item text="Text" icon="blank" href="#content-types/#text" />
        <Menu.Item text="Web Link" icon="blank" href="#content-types/#web-link" />
      </div>
    )
  }

  return null;
}