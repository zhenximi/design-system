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

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

export let FormElement = props =>
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>;

export let FormElementLabel = props =>
  <label className={ classNames('slds-form-element__label', props.className)} htmlFor="text-input-01">
    {props.children}
  </label>;

export let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

let Input = props =>
  <input
    {...props}
    id="text-input-01"
    className={classNames('slds-input', props.className)}
    type={props.type || 'text'}
    placeholder="Placeholder Text"
  />;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl>
        <Input />
      </FormElementControl>
    </FormElement>
  </Demo>;

let IconLeft = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl className="slds-input-has-icon slds-input-has-icon--left">
        <SvgIcon className="slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
        <Input />
      </FormElementControl>
    </FormElement>
  </Demo>;

let IconRight = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl className="slds-input-has-icon slds-input-has-icon--right">
        <SvgIcon className="slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
        <Input />
      </FormElementControl>
    </FormElement>
  </Demo>;

let IconLeftRight = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl className="slds-input-has-icon slds-input-has-icon--left-right">
        <SvgIcon className="slds-input__icon slds-input__icon--left slds-icon-text-default" sprite="utility" symbol="search" />
        <Input type="search" />
        <button className="slds-input__icon slds-input__icon--right slds-button slds-button--icon">
          <SvgIcon className="slds-button__icon" sprite="utility" symbol="clear" />
          <span className="slds-assistive-text">Clear</span>
        </button>
      </FormElementControl>
    </FormElement>
  </Demo>;

let Required = props =>
  <Demo>
    <FormElement>
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Input Label</FormElementLabel>
      <FormElementControl>
        <Input required />
      </FormElementControl>
    </FormElement>
  </Demo>;

let ErrorState = props =>
  <Demo>
    <FormElement className="slds-has-error">
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Input Label</FormElementLabel>
      <FormElementControl>
        <Input required aria-describedby={props.errorId} />
      </FormElementControl>
      <div id={props.errorId} className="slds-form-element__help">This field is required</div>
    </FormElement>
  </Demo>;

let ErrorIcon = props =>
  <Demo>
    <FormElement className="slds-has-error">
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Input Label</FormElementLabel>
      <FormElementControl className="slds-input-has-icon slds-input-has-icon--left">
        <SvgIcon className="slds-input__icon" sprite="utility" symbol="warning" />
        <Input required aria-describedby={props.errorId} />
      </FormElementControl>
      <div id={props.errorId} className="slds-form-element__help">This field is required</div>
    </FormElement>
  </Demo>;

let Disabled = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl>
        <Input disabled />
      </FormElementControl>
    </FormElement>
  </Demo>;

let ReadOnly = props =>
  <Demo>
    <FormElement>
      <span className="slds-form-element__label">Input Label</span>
      <FormElementControl className="slds-has-divider--bottom">
        <span className="slds-form-element__static">Read Only</span>
      </FormElementControl>
    </FormElement>
  </Demo>;

let FixedText = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl className="slds-input-has-fixed-addon">
        <span className="slds-form-element__addon">$</span>
        <Input />
        <span className="slds-form-element__addon">%</span>
      </FormElementControl>
    </FormElement>
  </Demo>;

let ReadOnlyFixedText = props =>
  <Demo>
    <FormElement>
      <span className="slds-form-element__label">Input Label</span>
      <FormElementControl className="slds-has-divider--bottom">
        <span className="slds-form-element__addon">$</span>
        <span className="slds-form-element__static">Read Only</span>
        <span className="slds-form-element__addon">%</span>
      </FormElementControl>
    </FormElement>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'input',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'input-icon-left',
    label: 'With icon to the left',
    element: <IconLeft />
  },
  {
    id: 'input-icon-right',
    label: 'With icon to the right',
    element: <IconRight />
  },
  {
    id: 'input-icon-left-right',
    label: 'With icon to the left and right',
    element: <IconLeftRight />
  },
  {
    id: 'input-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'input-error',
    label: 'Error',
    element: <ErrorState errorId="error-message" />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon errorId="error-message" />
  },
  {
    id: 'input-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'input-read-only',
    label: 'Read only',
    element: <ReadOnly />
  },
  {
    id: 'input-fixed-text',
    label: 'With fixed text',
    element: <FixedText />
  },
  {
    id: 'input-read-only-fixed-text',
    label: 'Read only With fixed text',
    element: <ReadOnlyFixedText />
  }
];
