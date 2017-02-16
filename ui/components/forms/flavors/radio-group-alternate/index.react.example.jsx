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

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={classNames('slds-form-element', props.className)}>
    <legend className="slds-form-element__legend slds-form-element__label">Scheduled Day(s)</legend>
    <div className="slds-form-element__control">
      {props.children}
    </div>
  </fieldset>;

let RadioGroup = props =>
  <div className="slds-radio--button-group">
    {props.children}
  </div>;

let Radio = props =>
  <span className={classNames('slds-button slds-radio--button', props.className)}>
    <input name="radio" type="radio" id={props.id} disabled={props.disabled} aria-describedby={props.errorId} />
    <label className="slds-radio--button__label" htmlFor={props.id}>
      <span className="slds-radio--faux">
        {props.children}
      </span>
    </label>
  </span>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <Fieldset>
      <RadioGroup>
        <Radio id="monday">Mon</Radio>
        <Radio id="tuesday">Tue</Radio>
        <Radio id="wednesday">Wed</Radio>
        <Radio id="thursday">Thu</Radio>
        <Radio id="friday">Fri</Radio>
      </RadioGroup>
    </Fieldset>
  </Demo>;

let StateB = props =>
  <Demo>
    <Fieldset className="slds-has-error">
      <RadioGroup>
        <Radio errorId="error_01" id="monday">Mon</Radio>
        <Radio errorId="error_01" id="tuesday">Tue</Radio>
        <Radio errorId="error_01" id="wednesday">Wed</Radio>
        <Radio errorId="error_01" id="thursday">Thu</Radio>
        <Radio errorId="error_01" id="friday">Fri</Radio>
      </RadioGroup>
      <div id="error_01" className="slds-form-element__help">This field is required</div>
    </Fieldset>
  </Demo>;

let StateC = props =>
  <Demo>
    <Fieldset>
      <RadioGroup>
        <Radio id="monday" disabled="true">Mon</Radio>
        <Radio id="tuesday" disabled="true">Tue</Radio>
        <Radio id="wednesday" disabled="true">Wed</Radio>
        <Radio id="thursday" disabled="true">Thu</Radio>
        <Radio id="friday" disabled="true">Fri</Radio>
      </RadioGroup>
    </Fieldset>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'radio-group-alt',
    label: 'Default',
    element: <StateA />
  },
  {
    id: 'radio-group-alt-has-error',
    label: 'Has error',
    element: <StateB />
  },
  {
    id: 'radio-group-alt-disabled',
    label: 'Disabled',
    element: <StateC />
  }
];
