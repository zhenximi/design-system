/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Truncate from 'ui/components/lib/truncate/index.react';
import Heading from 'ui/components/heading/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';


const image = (
  <SvgIcon className="slds-icon slds-icon-standard-user" sprite="standard" symbol="user" />
);

export default (
  <div className="slds-page-header">
    <div className="slds-grid">
      <div className="slds-col slds-has-flexi-truncate">
        <MediaObject figureLeft={image} className="slds-no-space slds-grow">
          <Heading className="slds-line-height--reset" flavor="label">Record Type</Heading>
          <h1 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title="this should match the Record Title">Record Title</h1>
        </MediaObject>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-top">
        <button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
          <span className="slds-text-not-selected"><SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="add" />Follow</span>
          <span className="slds-text-selected"><SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="check" />Following</span>
          <span className="slds-text-selected-focus"><SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="close" />Unfollow</span>
        </button>
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button--neutral">
            Edit
          </button>
          <button className="slds-button slds-button--neutral">
            Delete
          </button>
          <button className="slds-button slds-button--neutral">
            Clone
          </button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last" aria-expanded="false">
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions" />
          </div>
        </div>
      </div>
    </div>
    <ul className="slds-grid slds-page-header__detail-row">
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Field 1">Field 1</p>
        <p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">
          Description that demonstrates truncation with a long text field.
        </p>
      </li>
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Field2 (3)">
          Field 2 (3)
          <ButtonIcon
            className="slds-button--icon"
            iconClassName="slds-button__icon--small"
            symbol="down"
            aria-haspopup="true"
            assistiveText="More Actions"
            title="More Actions" />
        </p>
        <p className="slds-text-body--regular">Multiple Values</p>
      </li>
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Field 3">Field 3</p>
        <a href="javascript:void(0);">Hyperlink</a>
      </li>
      <li className="slds-page-header__detail-block">
        <p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Field 4">Field 4</p>
        <p>
          <Truncate amount={50}>
            Description (2-line truncation—must use JS to truncate).
          </Truncate>
        </p>
      </li>
    </ul>
  </div>
);
