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
import SvgIcon from 'app_modules/ui/svg-icon';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let CheckboxAddButton = props => {
  const uniqueId = _.uniqueId('add-checkbox-');

  return (
    <div className="slds-checkbox--add-button">
      <input className="slds-assistive-text" type="checkbox" id={ uniqueId } disabled={ props.disabled } defaultChecked={ props.checked } tabIndex={ props.tabIndex }/>
      <label htmlFor={ uniqueId } className="slds-checkbox--faux">
        <span className="slds-assistive-text">{ props.label || 'Add product' }</span>
      </label>
    </div>
  );
};

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'checkbox-add-button',
    label: 'Default',
    element: <CheckboxAddButton />
  },
  {
    id: 'checkbox-add-button-checked',
    label: 'Checked',
    element: <CheckboxAddButton checked />
  },
  {
    id: 'checkbox-add-button-disabled',
    label: 'Disabled',
    element: <CheckboxAddButton disabled />
  }
];
