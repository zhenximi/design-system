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
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'tile-article',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Company One beats Company Two to the 200-mile affordable electric car">
          <p>by Steve Author</p>
          <ul className="slds-list--horizontal slds-has-dividers--right">
            <li className="slds-item">Breaking News</li>
            <li className="slds-item">1 day ago</li>
          </ul>
        </Tile>
      </div>
  },
  {
    id: 'tile-article-liker-bar',
    label: 'With like bar',
    element:
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Company One beats Company Two to the 200-mile affordable electric car">
          <p>...an introduction for beginners about climbing ropes and how they can use...</p>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-m-top--xx-small">
            <li className="slds-item">000001296</li>
            <li className="slds-item">Published</li>
            <li className="slds-item">How to Guide</li>
          </ul>
          <p>Last Modified: 1/14/16</p>
          <ul className="slds-list--horizontal slds-m-top--xx-small">
            <li>
              <button className="slds-button slds-button--icon-border slds-button--icon-x-small">
                <SvgIcon className="slds-button__icon" sprite="utility" symbol="like" />
                <span className="slds-assistive-text">Upvote</span>
              </button>
              <span className="slds-align-middle">1320</span>
            </li>
          </ul>
        </Tile>
      </div>
  }
];
