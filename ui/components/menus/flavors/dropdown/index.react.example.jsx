/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

const TableIcon = (
  <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-left--small slds-shrink-none" sprite="utility" symbol="table" />
);

const KanbanIcon = (
  <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-left--small slds-shrink-none" sprite="utility" symbol="kanban" />
);

const ListIcon = (
  <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-left--small slds-shrink-none" sprite="utility" symbol="side_list" />
);

export let Trigger = props =>
  <div className={classNames('slds-dropdown-trigger slds-dropdown-trigger--click', props.className)}>
    { props.triggerIcon ? props.triggerIcon : <ButtonIcon className={ classNames( props.inverse ? 'slds-button--icon-border-inverse' : 'slds-button--icon-border-filled')} symbol="down" assistiveText="Show More" title="Show More" aria-haspopup="true" /> }
    {props.children}
  </div>;

export let Menu = props =>
  <div className={classNames('slds-dropdown', props.className)}>
    {props.children}
  </div>;

export let MenuList = props =>
  <ul className={classNames('slds-dropdown__list', props.className)} role="menu">
    {props.children}
  </ul>;

export let MenuItem = props => {
  const {
    className,
    isSelectable,
    isSelected,
    children,
    iconRight,
    tabIndex,
    ...rest
  } = props;

  return (
    <li {...rest} className={classNames('slds-dropdown__item', className)} role="presentation">
      <a
        href="javascript:void(0);"
        role={ isSelectable ? 'menuitemcheckbox' : 'menuitem' }
        aria-checked={ isSelected }
        tabIndex={ tabIndex || '-1' }>
        <span className="slds-truncate">
          { isSelectable ? <SvgIcon
                            className="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small"
                            sprite="utility"
                            symbol="check" /> : null }
          { children }
        </span>
        { iconRight ? iconRight : null }
      </a>
    </li>
  );
};


//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator"></li>
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let Small = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator"></li>
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let Medium = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--medium">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator"></li>
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let Large = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--large">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator"></li>
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let SubHeader = props =>
  <Demo style={{height: '260px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <li className="slds-dropdown__header" role="separator">
            <span className="slds-text-title--caps">Menu Sub Heading</span>
          </li>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <li className="slds-dropdown__header" role="separator">
            <span className="slds-text-title--caps">Menu Sub Heading</span>
          </li>
          <MenuItem>Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let IconLeft = props =>
  <Demo style={{height: '170px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem className="slds-is-selected" isSelected="true" isSelectable tabIndex="0">Menu Item One</MenuItem>
          <MenuItem isSelectable>Menu Item Two</MenuItem>
          <MenuItem isSelectable>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let DoubleIcon = props =>
  <Demo style={{height: '170px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem className="slds-is-selected" isSelected="true" isSelectable iconRight={TableIcon} tabIndex="0">Table View</MenuItem>
          <MenuItem isSelectable iconRight={KanbanIcon}>Kanban Board</MenuItem>
          <MenuItem isSelectable iconRight={ListIcon}>List View</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let IconRight = props =>
  <Demo style={{height: '170px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem iconRight={TableIcon} tabIndex="0">Table View</MenuItem>
          <MenuItem iconRight={KanbanIcon}>Kanban Board</MenuItem>
          <MenuItem iconRight={ListIcon}>List View</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'dropdown-menu',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'dropdown-menu-small',
    label: 'Small',
    element: <Small />
  },
  {
    id: 'dropdown-menu-medium',
    label: 'Medium',
    element: <Medium />
  },
  {
    id: 'dropdown-menu-large',
    label: 'Large',
    element: <Large />
  },
  {
    id: 'dropdown-menu-header',
    label: 'Sub Heading',
    element: <SubHeader />
  },
  {
    id: 'dropdown-menu-icon-left',
    label: 'Single Icon - Left',
    element: <IconLeft />
  },
  {
    id: 'dropdown-menu-icon-double',
    label: 'Double Icon - Left/Right',
    element: <DoubleIcon />
  },
  {
    id: 'dropdown-menu-icon-right',
    label: 'Single Icon - Right',
    element: <IconRight />
  }
];
