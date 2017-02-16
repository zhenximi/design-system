/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

const results = [{
  'unread': true,
  'colOne': 'Riley Shultz',
  'colTwo': '99',
  'colThree': 'Biotech, Inc.',
  'colFour': 'Nurturing'
}, {
  'unread': true,
  'colOne': 'Jason A. - VP of Sales',
  'colTwo': '92',
  'colThree': 'Case Management Solutions',
  'colFour': 'Contacted'
}, {
  'unread': true,
  'colOne': 'Josh Smith',
  'colTwo': '90',
  'colThree': 'Acme, Inc.',
  'colFour': 'Contacted'
}, {
  'unread': true,
  'colOne': 'Bobby Tree',
  'colTwo': '89',
  'colThree': 'Salesforce, Inc.',
  'colFour': 'Closing'
}, {
  'colOne': 'Riley Shultz',
  'colTwo': '74',
  'colThree': 'Tesla',
  'colFour': 'Contacted'
}, {
  'unread': true,
  'colOne': 'Andy Smith',
  'colTwo': '72',
  'colThree': 'Universal Technologies',
  'colFour': 'New'
}, {
  'colOne': 'Jim Steele',
  'colTwo': '71',
  'colThree': 'BigList, Inc.',
  'colFour': 'New'
}, {
  'colOne': 'John Gardner',
  'colTwo': '70',
  'colThree': '3C Systems',
  'colFour': 'Contacted'
}, {
  'colOne': 'Sarah Loehr',
  'colTwo': '68',
  'colThree': 'MedLife, Inc.',
  'colFour': 'New'
}];

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let SplitView = props =>
  <div className={ classNames('slds-split-view_container', props.hidden ? 'slds-is-closed' : 'slds-is-open') }>
    <ButtonIcon
      aria-controls="split-view-id"
      aria-expanded={ props.hidden ? 'false' : 'true' }
      className={ classNames('slds-button--icon-inverse slds-split-view__toggle-button', props.hidden ? 'slds-is-closed' : 'slds-is-open') }
      iconClassName="slds-button__icon--x-small"
      symbol="left"
      assistiveText={ props.hidden ? 'Open Split View' : 'Close Split View' }
    />
    <article
      aria-hidden={ props.hidden ? 'true' : 'false' }
      id="split-view-id"
      className={ classNames('slds-split-view slds-grid slds-grid--vertical slds-grow', props.className, props.hidden ? 'slds-hide' : null) }
    >
      <header className="slds-split-view__header">
        <div className="slds-grid">
          <div className="slds-has-flexi-truncate">
            <div className="slds-media slds-media--center slds-m-bottom--x-small">
              <div className="slds-media__figure">
                <div className="slds-icon_container slds-icon-standard-lead">
                  <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="lead" />
                  <span className="slds-assistive-text">Leads</span>
                </div>
              </div>
              <div className="slds-media__body">
                <h1 className="slds-text-heading--small slds-p-right--x-small">
                  <button className="slds-button slds-button--reset slds-type-focus slds-truncate" aria-haspopup="true" title="My Leads">
                    <span className="slds-grid slds-has-flexi-truncate slds-grid--vertical-align-center">
                      <span className="slds-truncate">My Leads</span>
                      <SvgIcon className="slds-button__icon slds-button__icon--right slds-no-flex" sprite="utility" symbol="down" />
                    </span>
                  </button>
                </h1>
              </div>
            </div>
          </div>
          <div className="slds-no-flex slds-grid slds-p-bottom--xx-small">
            <ButtonIcon
              className="slds-button--icon-border-inverse"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions" />
          </div>
        </div>
        <div className="slds-grid slds-grid--vertical-align-center">
          <p className="slds-text-body--small slds-text-color--inverse-weak">42 items &bull; Updated just now</p>
          <div className="slds-no-flex slds-col--bump-left">
            <ButtonIcon
              hasDropdown
              className="slds-button--icon-inverse slds-button--icon-container-more"
              symbol="side_list"
              assistiveText="Change View"
            />
            <ButtonIcon
              className="slds-button--icon-inverse slds-button--icon-container"
              symbol="refresh"
              assistiveText="Refresh Results"
            />
          </div>
        </div>
      </header>
      <div className="slds-grid slds-grid--vertical">
        <div className="slds-split-view__list-header slds-grid slds-text-title--caps">
          <span className="slds-assistive-text">Sorted by:</span>
          <span>Lead Score <SvgIcon className="slds-icon slds-icon--xx-small slds-text-icon-default slds-align-top" sprite="utility" symbol="arrowdown" /></span>
          <span className="slds-assistive-text">- Descending</span>
        </div>
        <ul aria-multiselectable="true" className="slds-scrollable--y" role="listbox" aria-label="My Leads - Select a lead to load it in a new workspace tab">
          { props.children }
        </ul>
      </div>
    </article>
  </div>;

let Row = props =>
  <li className={ classNames('slds-split-view__list-item', props.className, props.unread ? 'slds-is-unread' : null) } role="presentation">
    <a href="javascript:void(0);" aria-selected="false" role="option" className="slds-split-view__list-item-action slds-grow slds-has-flexi-truncate" tabIndex={props.tabIndex}>
      { props.unread ?
        <abbr className="slds-indicator--unread" title="unread item">
          <span className="slds-assistive-text">●</span>
        </abbr>
      : null }
      <div className="slds-grid slds-wrap">
        <span role="rowheader" className="slds-truncate slds-text-body--regular slds-text-color--inverse" title={ props.name || 'Object Name' }>
          { props.colOne || 'Column 1' }
        </span>
        <span className="slds-truncate slds-col--bump-left" title={ props.colTwo || 'Column 2' }>
          { props.colTwo || 'Column 2' }
        </span>
      </div>
      <div className="slds-grid slds-wrap">
        <span className="slds-truncate" title={ props.colThree || 'Column 3' }>
          { props.colThree || 'Column 3' }
        </span>
        <span className="slds-truncate slds-col--bump-left" title={ props.colFour || 'Column 4' }>
          { props.colFour || 'Column 4' }
        </span>
      </div>
    </a>
  </li>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView>
          { results.slice(0, 5).map((result, i) =>
            <Row
              key={ i }
              colOne={ result.colOne }
              colTwo={ result.colTwo }
              colThree={ result.colThree }
              colFour={ result.colFour }
              tabIndex={ (i===0) ? 0 : -1 }
            />
          )}
        </SplitView>
      </div>
  },
  {
    id: 'overflow',
    label: 'Overflow',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView>
          { results.map((result, i) =>
            <Row
              key={ i }
              colOne={ result.colOne }
              colTwo={ result.colTwo }
              colThree={ result.colThree }
              colFour={ result.colFour }
              tabIndex={ (i===0) ? 0 : -1 }
            />
          )}
        </SplitView>
      </div>
  },
  {
    id: 'unread',
    label: 'Unread Items',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView>
          { results.map((result, i) =>
            <Row
              key={ i }
              unread={ result.unread }
              colOne={ result.colOne }
              colTwo={ result.colTwo }
              colThree={ result.colThree }
              colFour={ result.colFour }
              tabIndex={ (i===0) ? 0 : -1 }
            />
          )}
        </SplitView>
      </div>
  },
  {
    id: 'panel-collapsed',
    label: 'Collapsed Panel',
    element:
      <div className="demo-only" style={{ display: 'flex', width: '20rem', height: '37.5rem' }}>
        <SplitView hidden>
          { results.map((result, i) =>
            <Row
              key={ i }
              unread={ result.unread }
              colOne={ result.colOne }
              colTwo={ result.colTwo }
              colThree={ result.colThree }
              colFour={ result.colFour }
              tabIndex={ (i===0) ? 0 : -1 }
            />
          )}
        </SplitView>
      </div>
  }
];
