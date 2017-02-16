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
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Tile = props =>
  <div className={classNames('slds-tile', props.className, props.actions ? 'slds-hint-parent' : null)}>
    { props.actions ?
      <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
        <h3 className="slds-truncate" title={ props.title || 'Title' }>
          <a href="javascript:void(0);">{ props.title || 'Title' }</a>
        </h3>
        <div className="slds-shrink-none">
          <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" iconClassName="slds-button__icon--hint" symbol="down" aria-haspopup="true" assistiveText="More options" title="More options" />
        </div>
      </div>
    :
      <h3 className="slds-truncate" title={ props.title || 'Title' }>
        <a href="javascript:void(0);">{ props.title || 'Title' }</a>
      </h3>
    }
    <div className="slds-tile__detail slds-text-body--small">
      { props.children ? props.children : <Detail /> }
    </div>
  </div>;

export let TileMedia = props =>
  <div className={classNames('slds-tile slds-media', props.className, props.actions ? 'slds-hint-parent' : null)}>
    { props.media ?
      <div className="slds-media__figure">
        { props.media }
      </div>
    : null }
    <div className="slds-media__body">
      { props.actions ?
        <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
          <h3 className="slds-truncate" title={ props.title || 'Title' }>
            <a href="javascript:void(0);">{ props.title || 'Title' }</a>
          </h3>
          <div className="slds-shrink-none">
            <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" iconClassName="slds-button__icon--hint" symbol="down" aria-haspopup="true" assistiveText="More options" title="More options" />
          </div>
        </div>
      :
        <h3 className="slds-truncate" title={ props.title || 'Title' }>
          <a href="javascript:void(0);">{ props.title || 'Title' }</a>
        </h3>
      }
      <div className="slds-tile__detail slds-text-body--small">
        { props.children ? props.children : <Detail /> }
      </div>
    </div>
  </div>;

let Detail = props =>
  <dl className="slds-list--horizontal slds-wrap">
    <dt className="slds-item--label slds-text-color--weak slds-truncate" title="First Label">First Label:</dt>
    <dd className="slds-item--detail slds-truncate">Description for first label</dd>
    <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Second Label">Second Label:</dt>
    <dd className="slds-item--detail slds-truncate">Description for second label</dd>
  </dl>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'tile',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '30rem' }}>
        <Tile title="Salesforce UX" />
      </div>
  },
  {
    id: 'tile-with-action',
    label: 'Default with actions',
    element:
      <div className="demo-only" style={{ width: '30rem' }}>
        <Tile title="Salesforce UX" actions />
      </div>
  }
];
