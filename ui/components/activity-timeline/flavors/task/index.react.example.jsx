/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { TimelineIcon, TimelineActions } from 'ui/components/activity-timeline/flavors/base/index.react.example';

export let states = [
  {
    id: 'timeline-task',
    label: 'Default',
    element:
    <div className="demo-only">
      <span className="slds-assistive-text">Task</span>
      <MediaObject figureRight={ <TimelineActions title="More Options for Task, Review proposals" assistiveText="More Options for Task, Review proposals" /> }>
        <MediaObject className="slds-media--timeline slds-timeline__media--task" figureLeft={ <TimelineIcon symbol="task" /> } figureLeftClassName="slds-timeline__icon">
          <MediaObject title="Review proposals for EBC deck with larger team and have marketing review this" figureLeft={ <Checkbox assistiveText="mark-complete" /> }>
            <h3 className="slds-truncate" title="Review proposals for EBC deck with larger team and have marketing review this">
              <a href="javascript:void(0);">Review proposals for EBC deck with larger team and have marketing review this</a>
            </h3>
            <ul className="slds-list--horizontal slds-wrap">
              <li className="slds-m-right--large">
                <span className="slds-text-title">Contact:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a></span>
              </li>
              <li className="slds-m-right--large">
                <span className="slds-text-title">Assigned to:</span>
                <span className="slds-text-body--small"><a href="javascript:void(0);">Betty Mason</a></span>
              </li>
            </ul>
          </MediaObject>
        </MediaObject>
      </MediaObject>
    </div>
  }
];
