/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import Sticky from 'app_modules/site/components/sticky';
import StickyNav from 'app_modules/site/components/sticky/nav';
import classNames from 'classnames';

import sets from '.generated/ui.tokens';
import categories from './_categories';

const nameFormats = [
  {
    role: 'regular',
    name: 'Sass',
    formatter: name => `$${_.kebabCase(name)}`
  },
  {
    role: 'aura',
    name: 'Lightning',
    formatter: name => `t(${_.camelCase(name)})`
  }
];

const Tokens = React.createClass({

  getInitialState() {
    const tokensByCategory = this.getTokensByCategory(sets);
    return {
      role: 'regular',
      tokensByCategory
    };
  },

  format() {
    return _.find(nameFormats, { role: this.state.role });
  },

  getTokensByCategory(sets) {
    const setTokens = sets.reduce((tokens, set) =>
      tokens.concat(set.contents.propKeys.map(key => set.contents.props[key]))
    , []);
    return _.groupBy(setTokens, 'category');
  },

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
                  {this.renderCategories()}
                </ul>
              </div>
            </StickyNav>
            <div className="site-main-content slds-col slds-col-rule--right slds-size--1-of-1 slds-large-size--4-of-6 slds-large-order--1">
              {this.renderInfo()}
              {this.renderTokens()}
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderHeader() {
    const formatSelect =
      <div className="slds-form-element slds-p-horizontal--medium">
        <label htmlFor="slds-tokens-name-format" className="slds-form-element__label">Format:</label>
        <div className="slds-form-element__control">
          <select className="slds-select slds-no-flex" id="slds-tokens-name-format" />
        </div>
      </div>;
    return (
      <Sticky className="site">
        <div className="site-tools slds-form--inline">
          <div className="slds-form-element slds-p-vertical--medium">
            <label className="slds-assistive-text" htmlFor="find-token-input">Find Token</label>
            <div className="slds-form-element__control">
              <input
                className="slds-input"
                id="find-token-input"
                type="search"
                placeholder="Find Token" />
            </div>
          </div>
          {formatSelect}
        </div>
      </Sticky>
    );
  },

  renderCategories() {
    const { tokensByCategory } = this.state;
    return categories
      .filter(category => tokensByCategory[category.key])
      .map(category =>
        <li className="slds-list__item" key={category.key}>
          <a href={`#category-${category.key}`}>
            {category.label}
          </a>
        </li>
      );
  },

  renderInfo() {
    if (this.state.query) { return null; }
    return [
      <div className="slds-container--large" key="info">
        <p className="site-text-introduction">
          Design tokens are the visual design atoms of the design system &mdash;
          specifically, they are named entities that store visual design
          attributes. We use them in place of hard-coded values (such as
          hex values for color or pixel values for spacing) in order to
          maintain a scalable and consistent visual system
          for <abbr title="User Interface">UI</abbr> development.
        </p>

        <p>
          Using Lightning Components? Read the Developer Guide
          on <a href="https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/tokens_intro.htm">Styling with Design Tokens</a>.
        </p>
      </div>
    ];
  },

  renderTokens() {
    const { tokensByCategory } = this.state;
    const nameFormat = this.format();
    return categories
      .filter(category => tokensByCategory[category.key])
      .map(category => {
        const tokens = tokensByCategory[category.key]
          .filter(token => token.deprecated !== true);
        return category.render(tokens, {
          nameFormat,
          role: this.state.role
        });
      });
  }

});

export default (
  <PageBody anchorTitle="Design Tokens" contentClassName={false}>
    <Tokens />
  </PageBody>
);
