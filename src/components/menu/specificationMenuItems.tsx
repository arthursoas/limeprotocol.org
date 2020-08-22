import React from 'react';
import { useLocation } from "react-router-dom";
import { Menu } from '@blueprintjs/core';

export function SpecificationMenuItems() {
  const { pathname } = useLocation();

  if (pathname.startsWith('/specification')) {
    return (
      <div>
        <Menu.Item text="What is it?" icon="blank" href="#specification/#what" />
        <Menu.Item text="Why not XMPP?" icon="blank" href="#specification/#xmpp" />
        <Menu.Item text="Concepts" icon="blank" href="#specification/#concepts" />
        <Menu.Item text="Envelope" icon="blank" href="#specification/#envelope" />
        <Menu.Item text="Message" icon="blank" href="#specification/#message" />
        <Menu.Item text="Notification" icon="blank" href="#specification/#notification" />
        <Menu.Item text="Command" icon="blank" href="#specification/#command" />
        <Menu.Item text="Session" icon="blank" href="#specification/#session" />
      </div>
    )
  }

  return null;
}