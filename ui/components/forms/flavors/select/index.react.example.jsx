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

let FormElement = props =>
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>;

let FormElementLabel = props =>
  <label className="slds-form-element__label" htmlFor="select-01">{props.children}</label>;

let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

export let Select = props =>
  <div className="slds-select_container">
    <select id="select-01" className={classNames('slds-select', props.className)} disabled={props.disabled} multiple={props.multiple} aria-describedby={ props['aria-describedby'] }>
      {props.children}
    </select>
  </div>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Select Label</FormElementLabel>
      <FormElementControl>
        <Select>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </Select>
      </FormElementControl>
    </FormElement>
  </Demo>;

let Required = props =>
  <Demo>
    <FormElement>
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Select Label</FormElementLabel>
      <FormElementControl>
        <Select>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </Select>
      </FormElementControl>
    </FormElement>
  </Demo>;

let ErrorState = props =>
  <Demo>
    <FormElement className="slds-has-error">
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Select Label</FormElementLabel>
      <FormElementControl>
        <Select aria-describedby="error-02">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </Select>
      </FormElementControl>
      <div className="slds-form-element__help" id="error-02">This field is required</div>
    </FormElement>
  </Demo>;

let Disabled = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Select Label</FormElementLabel>
      <FormElementControl>
        <Select disabled>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </Select>
      </FormElementControl>
    </FormElement>
  </Demo>;

let Multiple = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Select Label</FormElementLabel>
      <FormElementControl>
        <select id="select-01" className="slds-select" multiple>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </select>
      </FormElementControl>
    </FormElement>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'select',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'select-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'select-error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'select-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'select-multiple',
    label: 'Multiple Selection',
    element: <Multiple />
  }
];
