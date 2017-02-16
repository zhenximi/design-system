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
  <label className="slds-form-element__label" htmlFor="textarea-input-01">{props.children}</label>;

let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

let Textarea = props =>
  <textarea {...props} id="textarea-input-01" className={classNames('slds-textarea', props.className)} placeholder="Placeholder Text" />;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Textarea Label</FormElementLabel>
      <FormElementControl>
        <Textarea />
      </FormElementControl>
    </FormElement>
  </Demo>;

let Required = props =>
  <Demo>
    <FormElement>
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Textarea Label</FormElementLabel>
      <FormElementControl>
        <Textarea required />
      </FormElementControl>
    </FormElement>
  </Demo>;

let ErrorState = props =>
  <Demo>
    <FormElement className="slds-has-error">
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Textarea Label</FormElementLabel>
      <FormElementControl>
        <Textarea required aria-describedby="error-01" />
      </FormElementControl>
      <div className="slds-form-element__help" id="error-01">This field is required</div>
    </FormElement>
  </Demo>;

let Disabled = props =>
  <Demo>
    <FormElement>
      <FormElementLabel>Textarea Label</FormElementLabel>
      <FormElementControl>
        <Textarea disabled />
      </FormElementControl>
    </FormElement>
  </Demo>;

let ReadOnly = props =>
  <Demo>
    <FormElement>
      <span className="slds-form-element__label">Textarea Label</span>
      <FormElementControl className="slds-has-divider--bottom">
        <div className="slds-form-element__static slds-text-longform"><p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</p></div>
      </FormElementControl>
    </FormElement>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'textarea',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'textarea-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'textarea-error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'textarea-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'textarea-read-only',
    label: 'Read only',
    element: <ReadOnly />
  }
];
