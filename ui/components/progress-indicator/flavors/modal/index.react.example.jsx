/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Progress, Step } from 'ui/components/progress-indicator/flavors/base/index.react.example';
import { Modal, ModalHeader, ModalContent, ModalFooter } from 'ui/components/modals/flavors/base/index.react.example';

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{height: '640px'}}>
    <Modal className="slds-modal--large" aria-labelledby="header43">
      <ModalHeader>
        <h2 id="header43" className="slds-text-heading--medium">Modal Header</h2>
      </ModalHeader>
      <ModalContent className="slds-grow slds-p-around--medium" />
      <ModalFooter className="slds-grid slds-grid--align-spread">
        <Progress className="slds-progress--shade slds-order--2" value="25">
          <Step done aria-describedby="step-1-tooltip">Step 1</Step>
          <Step active aria-describedby="step-2-tooltip">Step 2</Step>
          <Step aria-describedby="step-3-tooltip">Step 3</Step>
          <Step aria-describedby="step-4-tooltip">Step 4</Step>
          <Step aria-describedby="step-5-tooltip">Step 5</Step>
        </Progress>
        <button className="slds-button slds-button--neutral slds-order--1">Cancel</button>
        <button className="slds-button slds-button--brand slds-order--3">Save</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
