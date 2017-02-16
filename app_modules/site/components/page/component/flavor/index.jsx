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
import SvgIcon from 'app_modules/ui/svg-icon';
import { pathToURL } from 'app_modules/util/string';
import _ from 'lodash';
import { renderMarkdownAndReplaceGlobals, replaceGlobals } from 'app_modules/site/util/component/render-markdown';
import highlightMarkup from 'app_modules/site/util/component/highlight-markup';

import Heading from 'app_modules/site/components/page/heading';
import JumpAnchor from 'app_modules/site/components/page/jump-anchor';
import Tabs from 'ui/components/tabs/index.react';



/**
 * Return a list of tab objects for the "preview" section
 */
function getPreviewTabs() {
  return [{
    key: 'mobile',
    icon: 'phone_portrait',
    iconClass: 'phone-portrait',
    label: 'Small',
    formFactor: 'small'
  },{
    key: 'tablet',
    icon: 'tablet_portrait',
    iconClass: 'tablet-portrait',
    label: 'Medium',
    formFactor: 'medium'
  },{
    key: 'desktop',
    icon: 'desktop',
    iconClass: 'desktop',
    label: 'Large',
    formFactor: 'large'
  }];
}

class ComponentFlavor extends React.Component {

  constructor(props) {
    super(props);
    const { flavor } = props;
    // Get a list of preview tabs that should be displayed based
    // on the list provided by flavor.showFormFactors
    const previewTabs = getPreviewTabs().filter(tab => {
      const { showFormFactors: factors } = flavor;
      return _.isArray(factors) && !_.isEmpty(factors)
        ? _.includes(factors, tab.formFactor)
        : false;
    });
    this.state = {
      previewTabs,
      previewTabActive: previewTabs.length
        // If there is a default specified, use that
        ? (flavor.showFormFactorsDefault
          ? _.find(previewTabs, { formFactor: flavor.showFormFactorsDefault })
          // Otherwise, just use the last tab
          : _.last(previewTabs))
        : null,
      // If the component example has states, set the initial previewState
      previewState: _.has(flavor.example, 'states')
        ? _.first(flavor.example.states) : false
    };
  }

  render() {
    const { flavor, component } = this.props;

    let statesIds = null;
    if (flavor.example && _.isArray(flavor.example.states)) {
      statesIds = flavor.example.states.map(state => <JumpAnchor key={`flavor-${flavor.id}-${state.id}`} id={`flavor-${flavor.id}-${state.id}`} level="2">{flavor.title} › {state.label}</JumpAnchor>);
    }

    let lightning = (component.lightning && flavor.id === 'base' ? component.lightning : null) || flavor.lightning;

    return (
      <section
        className="slds-m-bottom--xx-large slds-p-top--x-large" >
        <div className="slds-grid slds-wrap">
          <div className={classNames('slds-col slds-size--1-of-1', {
            'slds-large-size--4-of-6': lightning
          })}>
            <Heading textLabel={flavor.title} type="h2" id={`flavor-${flavor.id}`} className="site-text-heading--large site-text-heading--callout slds-p-bottom--medium">
              {statesIds}
              {flavor.title}
              {this.renderBadge(flavor.status)}
              {this.renderBadge(flavor.formFactorStatus)}
              {this.renderCompatiblityBadges()}
            </Heading>
          </div>
          {lightning ?
            <div className="slds-col slds-size--1-of-1 slds-large-size--2-of-6 slds-text-align--right">
              <a href={lightning.url}>Lightning Components Developer Guide</a>
            </div> : null
          }
        </div>

        <div className="slds-grid slds-wrap slds-grid--vertical-stretch">
          <h3 className="slds-assistive-text">Preview</h3>
          <div className="slds-col slds-size--1-of-1 slds-large-size--5-of-6 slds-large-order--1 site-component-example">
            {this.renderPreview()}
            <h3 className="slds-assistive-text">Code</h3>
            {this.renderDesc()}
            {this.renderNotDevReadyCodeAlert(flavor.status)}
            {this.renderCode(flavor, flavor.status)}
            {this.renderInfo()}
          </div>
        </div>
      </section>
    );
  }

  renderNotDevReadyCodeAlert(status) {
    return (status !== 'dev-ready') ? (
      <div className="js-show-for-proto" data-slds-status={status}>
        <div className="slds-box slds-theme--default slds-theme--alert-texture slds-m-vertical--medium">
          <p>Code will be available when this component reaches a Dev-Ready state.</p>
        </div>
      </div>
    ) : null;
  }

  renderBadge(status) {
    if (!status) return null;
    const words = _.words(status).join(' ');
    const statusBadgeType = _.words(status).join('-');
    const className = classNames(
      'slds-badge slds-m-left--medium slds-shrink-none slds-align-middle',
      `site-badge--${statusBadgeType}`
    );
    return (
      <span className={className}>{words}</span>
    );
  }

  renderCompatiblityBadges() {
    const { flavor } = this.props;
    if (!flavor.compatibility) return null;
    const labels = {
      s1: 'S1 Mobile',
      aura: 'Aura',
      lightning: 'Lightning Out'
    };
    const labelVisbility = {
      internal: ['aura', 's1'],
      external: ['s1', 'lightning']
    };
    return _.keys(flavor.compatibility)
      .filter(key => labels[key])
      .filter(key => {
        const k = process.env.INTERNAL ? 'internal' : 'external';
        return _.includes(labelVisbility[k], key);
      })
      .reduce((badges, key) => {
        const compatible = flavor.compatibility[key];
        const label = `${compatible ? '' : 'Not '}Compatible with ${labels[key]}`;
        const className = classNames('slds-badge slds-m-left--medium slds-shrink-none slds-align-middle', {
          'site-badge--compatible': compatible,
          'site-badge--not-compatible': !compatible
        });
        return badges.concat((
          <span className={className} key={`site-badge-${key}`}>
            {label}
          </span>
        ));
      }, []);
  }

  renderInfo() {
    const { flavor } = this.props;

    return flavor.info.markup ? (
      <div
        className="slds-text-longform"
        dangerouslySetInnerHTML={flavor.info.markup} />
    ) : null;
  }

  renderDesc() {
    const { flavor } = this.props;
    const exampleDescriptionMarkup = renderMarkdownAndReplaceGlobals(flavor.exampleDescription);

    return <div
              id={`description-${flavor.uid}`}
              dangerouslySetInnerHTML={{__html: exampleDescriptionMarkup}} />;
  }

  renderPreview() {
    if (!this.props.flavor.example) return null;
    const { flavor } = this.props;
    const { previewTabActive, previewTabs, previewState } = this.state;
    const formFactor = this.state.previewTabActive
      ? this.state.previewTabActive.formFactor : '';
    const src = previewState ? previewState.id : 'default';
    const iframe = (
      <iframe
        src={`/${pathToURL(flavor.path)}/_${src}.html?iframe&initial`}
        id={`iframe-${flavor.uid}`}
        name={flavor.uid}
        ref="iframe"
        data-form-factor={previewTabActive ? this.state.previewTabActive.key : null} />
    );
    const previewPanel = (
      <Tabs.Content
        id={`${flavor.uid}__preview-content`}
        className="site-example--content slds-m-bottom--xx-large slds-scrollable--x"
        aria-labelledby={previewTabActive ? `${flavor.uid}__preview-tab-${previewTabActive.key}` : null}
        data-form-factor={previewTabActive ? this.state.previewTabActive.key : null}>
        {iframe}
      </Tabs.Content>
    );
    // Only use tabs if there are more than 1
    const contentClassName = classNames('slds-scrollable--x', {
      'site-example--content': this.state.previewTabActive,
      // No form factors were specified
      'site-bleed': !this.state.previewTabActive
    });
    return this.state.previewTabs.length > 1
      ? (
        <Tabs
          className="site-example--tabs"
          flavor="default"
          panel={previewPanel}
          selectedIndex={previewTabs.indexOf(previewTabActive)}>
          {this.renderPreviewTabs()}
        </Tabs>
      )
      : (
        <div
          className={contentClassName}
          data-form-factor={previewTabActive ? this.state.previewTabActive.key : null}>
          {iframe}
        </div>
      );
  }

  renderPreviewTabs() {
    const { flavor } = this.props;
    return this.state.previewTabs.map((tab, index) => {
      const content = (
        <span>
          <SvgIcon sprite="utility" symbol={tab.icon} className={`slds-icon slds-icon__svg slds-icon-utility-${tab.iconClass} slds-icon--x-small slds-icon-text-default slds-m-right--x-small`} />
          {tab.label}
        </span>
      );
      return (
        <Tabs.Item
          key={tab.key}
          aria-controls={`${flavor.uid}__preview-content`}
          aria-describedby={flavor.uid}
          data-form-factor={tab.key}
          data-controls={tab.key}
          id={`${flavor.uid}__preview-tab--${tab.key}`}
          content={content} />
      );
    });
  }

  renderCode(flavor, status) {
    const className = 'language-markup';
    const code = flavor.exampleMarkup
      ? highlightMarkup(flavor.exampleMarkup) : null;
    return (
      <div
        className="site-code--content slds-scrollable--x"
        data-slds-status={status}
        style={status !== 'dev-ready' ? { display: 'none' } : null }>
        <pre className={className}>
          <code
            id={`code-${flavor.uid}`}
            className={className}
            dangerouslySetInnerHTML={{__html: code}} />
        </pre>
      </div>
    );
  }

}

export default ComponentFlavor;
