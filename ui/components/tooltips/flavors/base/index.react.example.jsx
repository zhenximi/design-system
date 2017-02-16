/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

export let Tooltip = props =>
  <div className={classNames('slds-popover slds-popover--tooltip', props.className)} role="tooltip" id={props.id} style={props.style}>
    <div className="slds-popover__body">
      { props.children }
    </div>
  </div>;

export default (
  <div className="demo-only" style={{ paddingLeft: '2rem', paddingTop: '5rem' }}>
    <div className="slds-form-element">
      <div className="slds-form-element__icon slds-align-middle">
        <ButtonIcon
          className="slds-button slds-button--icon"
          symbol="info"
          aria-describedby="help"
          assistiveText="Help"
          title="Help"
        />
      </div>
    </div>
    <Tooltip className="slds-nubbin--bottom-left" id="help" style={{position: 'absolute', top: '0px', left: '15px'}}>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
    </Tooltip>
  </div>
);
