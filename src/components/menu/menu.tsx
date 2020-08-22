import React, { Component, ReactNode } from 'react';
import { Menu, MenuDivider, H2 } from '@blueprintjs/core';

import { SpecificationMenuItems } from './specificationMenuItems';
import { ContentTypesMenuItems } from './contentTypesMenuItems';
import { ResourcesMenuItems } from './resourcesMenuItems';

import './menu.scss';
import LimeLogo from '../../assets/images/lime-logo.svg';

export default class LeftMenu extends Component {
  render(): ReactNode {
    return (
      <Menu id="left-menu" className="min-vh-100 br0 w5-l">
        <div className="flex items-center">
          <img src={LimeLogo} width={37} className="mt1 mb2 mr2" alt="LIME Protocol logo" />
          <H2 className="mb0 mt0">LIME</H2>
        </div>
        <MenuDivider />

        <Menu.Item text="Specification" className="b" icon="code" href="#specification" />
        <SpecificationMenuItems />
        <MenuDivider />

        <Menu.Item text="Content Types" className="b" icon="comment" href="#content-types" />
        <ContentTypesMenuItems />
        <MenuDivider />

        <Menu.Item text="Resources" className="b" icon="build" href="#resources" />
        <ResourcesMenuItems />
        <MenuDivider />

        <Menu.Item text="Libraries" className="b" icon="book" href="#libriaries" />
        <MenuDivider />

        <Menu.Item text="About" className="b" icon="info-sign" href="#about" />
      </Menu>
    )
  }
}