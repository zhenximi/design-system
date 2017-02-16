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

import CodeClass from 'app_modules/site/components/code-class';

export const intro = (
  <p className="site-text-introduction">
    You can group buttons together to create a navigation bar.
  </p>
);

export default (
  <ComponentDocs>
    <p>Buttons in a group are surrounded by a parent with the <CodeClass className="button-group" /> class, unless they are in a list (in which case they use <CodeClass className="button-group-list" />. If the last button is an icon, like the down triangle, use the <CodeClass className="button--icon-border-filled"/> class when accompanying a <CodeClass className="button--neutral"/> group.</p>

    <p>If the last button in a group needs to be wrapped in another element (for example, a drop-down trigger), add the <CodeClass className="button--last"/> class to the wrapper element to create proper spacing and borders.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Unless you are using the list version, include the Aria role <code>role="group"</code> so that assistive technologies are alerted to the grouping.</p>
  </ComponentDocs>
);
