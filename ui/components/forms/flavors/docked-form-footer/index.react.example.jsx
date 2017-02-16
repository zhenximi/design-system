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

export let states = [
  {
    id: 'docked-form-footer',
    label: 'Default',
    element:
      <div className="demo-only" style={{ height: '80px' }}>
        <div className="slds-docked-form-footer">
          <button type="button" className="slds-button slds-button--neutral">Cancel</button>
          <button type="button" className="slds-button slds-button--brand">Save</button>
        </div>
      </div>
  },
  {
    id: 'docked-form-footer-with-error',
    label: 'With error(s)',
    element:
      <div className="demo-only" style={{ height: '80px' }}>
        <div className="slds-docked-form-footer">
          <ButtonIcon className="slds-button--icon slds-button--icon-error" iconClassName="slds-button__icon--large" symbol="warning" assitiveText="Review the Following Errors" title="Review the Following Errors" />
          <button type="button" className="slds-button slds-button--neutral">Cancel</button>
          <button type="button" className="slds-button slds-button--brand">Save</button>
        </div>
      </div>
  },
  {
    id: 'docked-form-footer-with-popover',
    label: 'With error popover',
    element:
      <div className="demo-only" style={{ height: '180px' }}>
        <div className="slds-docked-form-footer">
          <ButtonIcon className="slds-button--icon slds-button--icon-error" iconClassName="slds-button__icon--large" symbol="warning" assitiveText="Review the Following Errors" title="Review the Following Errors" />
          <button type="button" className="slds-button slds-button--neutral">Cancel</button>
          <button type="button" className="slds-button slds-button--brand">Save</button>
          <div className="slds-popover slds-nubbin--bottom-left slds-theme--error" role="dialog" aria-label="Contextual title of this dialog" aria-describedby="dialog-description-01" style={{position: 'absolute', bottom: '56px', left: '50%', marginLeft: '58px', transform: 'translateX(-50%)' }}>
            <ButtonIcon className="slds-button--icon-inverse slds-button--icon-small slds-float--right slds-popover__close" symbol="close" assistiveText="Close" title="Close" />
            <div className="slds-popover__body slds-text-longform" id="dialog-description-01">
              <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</p>
            </div>
          </div>
        </div>
      </div>
  }
];
