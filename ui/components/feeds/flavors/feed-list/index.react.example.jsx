/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Post, PostHeader, PostContent, PostFooter, PostFooterActions, PostFooterMeta, Comments } from 'ui/components/feeds/flavors/post/index.react.example';
import { Comment, CommentHeader, CommentContent, CommentFooter } from 'ui/components/feeds/flavors/comment/index.react.example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="slds-feed">
    <ul className="slds-feed__list">
      <li className="slds-feed__item">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
          </PostContent>
          <PostFooter>
            <PostFooterActions />
            <PostFooterMeta />
          </PostFooter>
        </Post>
        <Comments>
          <div className="slds-p-horizontal--medium slds-p-vertical--x-small slds-grid">
            <a href="javascript:void(0);">More comments</a>
            <span className="slds-text-body--small slds-col--bump-left">1 of 8</span>
          </div>
          <ul>
            <li>
              <Comment>
                <CommentHeader />
                <CommentContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CommentContent>
                <CommentFooter />
              </Comment>
            </li>
          </ul>
        </Comments>
      </li>
      <li className="slds-feed__item">
        <Post>
          <PostHeader />
          <PostContent>
            <p>Hey there! Here's the latest demo presentation <a href="javascript:void(0);" title="Jenna Davis">@Jenna Davis</a>, let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.</p>
          </PostContent>
          <PostFooter>
            <PostFooterActions />
            <PostFooterMeta />
          </PostFooter>
        </Post>
      </li>
    </ul>
  </div>
);
