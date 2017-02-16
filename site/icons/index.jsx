/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import classNames from 'classnames';
import React from 'react';

import CTALink from 'app_modules/site/components/cta-link';
import Heading from 'app_modules/site/components/page/heading';
import PageBody from 'app_modules/site/components/page/body';
import Sticky from 'app_modules/site/components/sticky';
import StickyNav from 'app_modules/site/components/sticky/nav';
import SvgIcon from 'app_modules/ui/svg-icon';

import categories from '.generated/ui.icons';

class Icons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories
    };
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="site-content site">
          <div className="slds-grid slds-wrap">
            <StickyNav fixedElementsAbove=".site-tools">
              <div className="site-menu--jump-links">
                <h3 className="site-text-heading--label">Categories</h3>
                <ul className="slds-list--vertical slds-has-block-links">
                  {this.renderCategoryNav()}
                </ul>
              </div>
            </StickyNav>
            <div className="site-main-content slds-col slds-col-rule--right slds-size--1-of-1 slds-large-size--4-of-6 slds-large-order--1">
              <p className="site-text-introduction slds-m-bottom--none slds-container--large">
                Choose the icon you need from this page, then follow the implementation instructions on the <a href="/components/icons/">icon component page</a>. If you are building a Lightning Component, you may require an
                additional <CTALink href="/resources/lightning-svg-icon-component-helper" eventType="lightning-svg-icon-helper">Lightning helper component</CTALink> to use&nbsp;SVGs.
              </p>
              {this.renderCategories()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <Sticky className="site">
        <div className="site-tools slds-grid slds-grid--align-spread">
          <div className="slds-col slds-align-middle slds-shrink slds-p-vertical--medium">
            <label className="slds-assistive-text" htmlFor="find-icon-input">Find Icon</label>
            <input
              className="slds-input"
              id="find-icon-input"
              type="search"
              placeholder="Find Icon" />
          </div>
          <div className="slds-col slds-align-middle slds-shrink">
            <div className="tabs slds-tabs--default" role="tablist">
              <ul className="tabs__nav" role="presentation"></ul>
            </div>
          </div>
        </div>
      </Sticky>
    );
  }

  renderCategories() {
    return this.state.categories.map(category => {
      return (
        <div key={category.name} data-slds-icons-section>
          <Heading textLabel={`${category.name} Icons`} type="h2" id={category.name} className="slds-p-top--xx-large site-text-heading--large site-text-heading--callout site-icon-group-title">
            {`${category.name} Icons`}
          </Heading>
          {/* This is only outputing text without a paragraph. Can we fix? */}
          <div className="slds-container--large" dangerouslySetInnerHTML={{__html: category.description}} />
          <ul className={classNames(`${category.name}__icons`,'slds-m-top--x-large slds-grid slds-wrap icon-grid')}>
            {this.renderIcons(category)}
          </ul>
        </div>
      );
    });
  }

  renderCategoryNav() {
    return this.state.categories.map(category => {
      const modCategory = _.upperFirst(category.name);
      return (
        <li className="slds-list__item" key={category.name}>
          <a href={`#${category.name}`}>
            {modCategory}
          </a>
        </li>
      );
    });
  }

  renderIcons(category) {
    let isAction = category.name === 'action';
    let isUtility = category.name === 'utility';

    return category.icons.map(icon => {
      const svgClassName = classNames('slds-icon', {
        'slds-icon--large': !isUtility && !isAction,
        'slds-icon--small': isAction,
        'slds-icon-text-default': isUtility
      });
      return (
        <li className="site-icon-width-container slds-m-bottom--x-large" key={icon.symbol} data-slds-icon={icon.symbol}>
          <figure>
            <span className={classNames('slds-icon_container', icon.className, {'slds-icon_container--circle': isAction})}>
              <SvgIcon sprite={icon.sprite} symbol={icon.symbol} className={svgClassName} />
            </span>
            <figcaption className="slds-p-top--x-small slds-text-body--small">{icon.symbol}</figcaption>
          </figure>
        </li>
      );
    });
  }

}

export default (
  <PageBody anchorTitle="Icons" contentClassName={false}>
    <Icons />
  </PageBody>
);
