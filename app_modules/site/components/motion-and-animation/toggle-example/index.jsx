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

export default React.createClass({

  displayName: 'ToggleExample',

  propTypes: {
    which: React.PropTypes.string,
    toggle: React.PropTypes.bool,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render() {
    const { which, title, description } = this.props;
    const className = classNames('site-example-tile__object', {
      [`site-${which}-example`]: which
    });
    const state = JSON.stringify({
      which: this.props.which,
      toggle: this.props.toggle,
      isAnimating: false,
      isOn: false
    });
    return (
      <li className="slds-col--padded-large slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-3 slds-m-bottom--xx-large">
        <div
          className="site-example-tile__frame slds-text-align--center"
          data-slds-motion-toggle-example={state}>
          <div
            className={className}
            data-slds-motion-toggle-example-target>
            <span>Abc</span>
          </div>
          <div className="site-example-tile__title">
            {title}
          </div>
          <hr className="site-hr site-hr--dark-blue" />
          <div className="site-example-tile__description">
            {description}
          </div>
        </div>
      </li>
    );
  }

});
