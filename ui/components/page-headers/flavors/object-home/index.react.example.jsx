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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Heading from 'ui/components/heading/index.react';


const icon = (
  <SvgIcon className="slds-button__icon slds-button__icon--right slds-no-flex" sprite="utility" symbol="down" />
);

const image = (
  <span className="slds-icon_container">
    <SvgIcon className="slds-icon slds-icon-standard-lead" sprite="standard" symbol="lead" />
  </span>
);

export default (
  <div className="slds-page-header slds-page-header--object-home">
    <div className="slds-grid">
      {/* Open Left Aligned Heading + Icon Grouping */}
      <div className="slds-col slds-has-flexi-truncate">
        <MediaObject figureLeft={image} className="slds-no-space slds-grow">
          <Heading className="slds-line-height--reset" flavor="label">Leads</Heading>
          <h1 className="slds-page-header__title slds-p-right--x-small">
            <button className="slds-button slds-button--reset slds-type-focus slds-truncate" aria-haspopup="true" title="this should match My Leads">
              <span className="slds-grid slds-has-flexi-truncate slds-grid--vertical-align-center">
                <span className="slds-truncate">My Leads</span>
                {icon}
              </span>
            </button>
          </h1>
        </MediaObject>
      </div>
      {/* Close Col */}
      {/* Open Right Aligned Icon Grouping */}
      <div className="slds-col slds-no-flex slds-grid slds-align-top slds-p-bottom--xx-small">
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button--neutral">
            New Lead
          </button>
          <button className="slds-button slds-button--neutral">
            Import Leads
          </button>
          <div className="slds-button--last">
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions" />
          </div>
        </div>
        {/* Close button Group */}
      </div>
      {/* Close Col */}
    </div>
    {/* Close Grid */}
    <div className="slds-grid">
      <div className="slds-col slds-align-bottom">
        <p className="slds-text-body--small">10 items &bull; Sorted by Name</p>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-bottom">
        <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--x-small" aria-expanded="false">
          <ButtonIcon
            className="slds-button--icon-more"
            symbol="settings"
            hasDropdown
            assistiveText="List View Controls"
            title="List View Controls" />
        </div>
        <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--xx-small" aria-expanded="false">
          <ButtonIcon
            className="slds-button--icon-more"
            symbol="table"
            hasDropdown
            assistiveText="Change view"
            title="Change view" />
        </div>
        <ButtonIcon
          className="slds-m-left--xx-small slds-button--icon-border"
          symbol="edit"
          assistiveText="Edit List"
          title="Edit List" />
        <ButtonIcon
          className="slds-m-left--xx-small slds-button--icon-border"
          symbol="refresh"
          assistiveText="Refresh"
          title="Refresh" />
        <div className="slds-button-group" role="group">
          <ButtonIcon
            className="slds-button--icon-border"
            symbol="chart"
            assistiveText="Charts"
            title="Charts" />
          <ButtonIcon
            className="slds-button--icon-border"
            symbol="filterList"
            assistiveText="Filters"
            title="Filters" />
        </div>
      </div>
    </div>
  </div>
);
