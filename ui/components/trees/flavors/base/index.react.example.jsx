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

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let TreeItem = props =>
<div className="slds-tree__item">
  <ButtonIcon
    disabled
    className="slds-button--icon slds-m-right--x-small slds-is-disabled"
    iconClassName="slds-button__icon--small"
    symbol="chevronright"
    assistiveText="Toggle"
    title="Toggle" />
  <a href="javascript:void(0);" tabIndex="-1" role="presentation" className="slds-truncate" title="Tree Item">Tree Item</a>
  {props.children}
</div>;

let TreeBranch = props =>
<div className="slds-tree__item">
  <ButtonIcon
    aria-controls={props.ariaControls}
    className="slds-button--icon slds-m-right--x-small"
    iconClassName="slds-button__icon--small"
    symbol="chevronright"
    assistiveText="Toggle"
    title="Toggle" />
  <a
    id={props.ariaControls + '__label'}
    href="javascript:void(0);" tabIndex="-1" role="presentation" className="slds-truncate" title="Tree Branch">Tree Branch</a>
</div>;

let Pill = props =>
<span className="slds-pill slds-shrink-none slds-align-middle">
  <span className="slds-pill__label">Label</span>
</span>;

let AdditionalItems = props =>
<li id="tree0-node1-1" role="treeitem" aria-level="2" aria-expanded="true">

  <TreeBranch ariaControls="tree0-node1-1" />

  <ul className="slds-is-expanded" role="group" aria-labelledby="tree0-node1-1__label">

    <li id="tree0-node1-1-0" role="treeitem" aria-level="3">
      <TreeItem />
    </li>

    <li id="tree0-node1-1-1" role="treeitem" aria-level="3">
      <TreeItem><Pill /></TreeItem>
    </li>

    <li id="tree0-node1-1-2" role="treeitem" aria-level="3" aria-expanded="false">

      <TreeBranch ariaControls="tree0-node1-1-2" />

      <ul className="slds-is-collapsed" role="group" aria-labelledby="tree0-node1-1-2__label">

        <li id="tree0-node1-1-2-0" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-2-1" role="treeitem" aria-level="4">
          <TreeItem><Pill /></TreeItem>
        </li>

        <li id="tree0-node1-1-2-2" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

      </ul>
    </li>

    <li id="tree0-node1-1-3" role="treeitem" aria-level="3" aria-expanded="true">

      <TreeBranch ariaControls="tree0-node1-1-3" />

      <ul className="slds-is-expanded" role="group" aria-labelledby="tree0-node1-1-3__label">

        <li id="tree0-node1-1-3-1" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-3-2" role="treeitem" aria-level="4">
          <TreeItem><Pill /></TreeItem>
        </li>

        <li id="tree0-node1-1-3-3" role="treeitem" aria-level="4">
          <TreeItem />
        </li>

        <li id="tree0-node1-1-3-4" role="treeitem" aria-level="4" aria-expanded="true">

          <TreeBranch ariaControls="tree0-node1-1-3-4" />

          <ul className="slds-is-expanded" role="group" aria-labelledby="tree0-node1-1-3-4__label">

            <li id="tree0-node1-1-3-4-1" role="treeitem" aria-level="5">
              <TreeItem />
            </li>

            <li id="tree0-node1-1-3-4-2" role="treeitem" aria-level="5">
              <TreeItem><Pill /></TreeItem>
            </li>

            <li id="tree0-node1-1-3-4-3" role="treeitem" aria-level="5">
              <TreeItem />
            </li>

          </ul>
        </li>

        <li id="tree0-node1-1-3-5" role="treeitem" aria-level="4">
          <TreeItem />
        </li>
      </ul>
    </li>

    <li id="tree0-node1-1-4" role="treeitem" aria-level="3">
      <TreeItem />
    </li>
  </ul>
</li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<div className="slds-tree_container" role="application">
  <h4 className="slds-text-title--caps" id="treeheading">Tree Group Header</h4>

  <ul className="slds-tree" role="tree" aria-labelledby="treeheading" aria-activedescendant={props.isExpanded}>

    <li id="tree0-node0" role="treeitem" aria-level="1">
      <TreeItem>{props.itemContent}</TreeItem>
    </li>

    <li id="tree0-node1" role="treeitem" aria-level="1" aria-expanded={props.isExpanded ? true : false}>
      <TreeBranch ariaControls="tree0-node1" />

      <ul className={props.isExpanded ? 'slds-is-expanded' : 'slds-is-collapsed'} role="group" aria-labelledby="tree0-node1__label">

        <li id="tree0-node1-0" role="treeitem" aria-level="2">
          <TreeItem />
        </li>

        {props.additionalItems}
      </ul>
    </li>
    <li id="tree0-node2" role="treeitem" aria-level="1">
      <TreeBranch ariaControls="tree0-node2" />

      <ul className="slds-is-collapsed" role="group" aria-labelledby="tree0-node2__label">

        <li id="tree0-node2-0" role="treeitem" aria-level="2">
          <TreeItem />
        </li>
      </ul>
    </li>
    <li id="tree0-node3" role="treeitem" aria-level="1">
      <TreeItem>{props.itemContent}</TreeItem>
    </li>
  </ul>
</div>;


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'expanded',
    label: 'Expanded',
    element: <Default isExpanded="tree0-node1" />
  },
  {
    id: 'with-label',
    label: 'Pill in an item',
    element: <Default itemContent={<Pill />} />
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: <Default isExpanded="tree0-node1" additionalItems={<AdditionalItems />} />
  }
];
