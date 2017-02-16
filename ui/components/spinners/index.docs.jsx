/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ComponentDocs from 'app_modules/site/components/page/component/docs';

export const intro = (
  <p className="site-text-introduction">
    Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.
  </p>
);

export default (
  <ComponentDocs>
    <p>To use the spinner in a component, the parent of the spinner should be set to <code>position:relative</code>. You can use the utility class <code>.slds-is-relative</code> or add the declaration to your custom component CSS. If you are using the spinner in an <code>iframe</code> and dynamically loading DOM nodes after the page has loaded, it is recommended that you set the <code>.slds-spinner_container</code> to <code>position:fixed</code> so that it remains centered in the viewport.</p>
    <p>The background overlay for the spinner is an optional element.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>A spinner should have the Aria <code>role="status"</code> and contain assistive text that explains what is currently happening.</p>
  </ComponentDocs>
);
