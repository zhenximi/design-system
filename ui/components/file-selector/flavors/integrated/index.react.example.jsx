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
import { FileSelector } from 'ui/components/file-selector/flavors/files/index.react.example';

let IntegratedFileSelector = props =>
  <div className={classNames('slds-file-selector slds-file-selector--integrated', props.className)}>
    <div className={classNames('slds-file-selector__dropzone slds-file-selector__dropzone--integrated', props.drag ? 'slds-has-drag' : null, props.draggover ? 'slds-has-drag-over' : null)} aria-hidden="true">
      <input className="slds-file-selector__input slds-assistive-text" accept="image/png" type="file" id="file-upload-input-01" disabled={props.draggoverError} tabIndex="-1" />
      <label className="slds-file-selector__body slds-file-selector__body--integrated" htmlFor="file-upload-input-01">
        { props.draggoverError ?
          <SvgIcon className="slds-file-selector__body-icon slds-icon slds-icon-text-default" sprite="utility" symbol="ban" />
        : <SvgIcon className="slds-file-selector__body-icon slds-icon slds-icon-text-default" sprite="utility" symbol="upload" /> }
        <span className="slds-file-selector__text slds-file-selector__text--integrated slds-text-heading--medium slds-text-align--center">
          { props.draggoverError ? 'Too many files selected. Attach up to 1 file.' : 'Drop Files' }</span>
      </label>
    </div>
    { props.children }
  </div>;

export let states = [
  {
    id: 'integrated-file-selector-default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector className="slds-file-selector--integrated">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
  },
  {
    id: 'integrated-file-selector-drag',
    label: 'Drag',
    element:
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector className="slds-file-selector--integrated" drag>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
  },
  {
    id: 'integrated-file-selector-draggover',
    label: 'Dragover',
    element:
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector className="slds-file-selector--integrated" drag draggover>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
  },
  {
    id: 'integrated-file-selector-draggover-error',
    label: 'Dragover with error',
    element:
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector className="slds-file-selector--integrated" drag draggoverError error>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
  }
];
