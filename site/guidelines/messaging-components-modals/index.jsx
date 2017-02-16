/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import SvgIcon from 'app_modules/ui/svg-icon';
import StickyNav from 'app_modules/site/components/sticky/nav';

export default (
  <PageBody anchorTitle="Modals" contentClassName="site-guidelines slds-grid slds-wrap">
    <StickyNav>
      <div className="site-menu--jump-links">
        <h3 className="site-text-heading--label">Guidelines</h3>

        <ul className="slds-list--vertical slds-has-block-links">
          <li className="slds-list__name site-states-parent">
            <a href="#flavor-usage">Usage</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-in-context">Modal in Context</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-dos-donts">Dos and Don&rsquo;ts</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-variants-component">Variants - Component</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-variants-state">Variants - State</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-variants-screen">Variants - Screen Size</a>
          </li>

          <li className="slds-list__name site-states-parent">
            <a href="#flavor-specs">Recommended Specs</a>
          </li>
        </ul>
      </div>
    </StickyNav>

    <div className="site-main-content slds-col slds-col-rule--right slds-size--1-of-1 slds-large-size--4-of-6 slds-large-order--1">
      <div className="slds-container--large lmf">
        <p className="site-text-introduction">
          <strong>Modal</strong> can show an action in progress, confirm a
          user action, or communicate about an error.
        </p>

        <figure>
          <img src="/assets/images/messaging/diagram-modal.png" alt="" width="411" height="123" />
        </figure>

        <h2 className="site-text-heading--large" id="flavor-usage">Usage</h2>

        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/chart-modal.png" alt="" width="240" height="240" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <ul>
              <li><strong>Visual:</strong> Pronounced</li>

              <li><strong>Voice &amp; Tone:</strong> Informational</li>

              <li><strong>Motion:</strong> Dramatic</li>

              <li><strong>Duration:</strong> Permanent</li>

              <li><strong>Audio:</strong> Soft (or Vibrate)</li>
            </ul>
          </div>
        </div>

        <p>
          In the context of messaging, a modal can show one of the following
          states:
        </p>

        <ul>
          <li><strong>Transient:</strong> when a user is uploading files.</li>

          <li>
            <strong>Warning:</strong> when a user tries to commit a
            destructive action (e.g. deleting a record), complete an action
            that has major impacts (e.g. sending an email to all 100,000
            subscribers), or abandon an incomplete action (e.g. leaving an
            unsaved form).
          </li>
        </ul>

        <p>
          Modals behave the same whether they’re used as a create/edit
          container or as a messaging container. Use the default modal
          component specs plus the animation specs
          (see <a href="#flavor-specs">Recommended Specs</a>).
        </p>

        <h2 className="site-text-heading--large" id="flavor-in-context">
          Modal in Context
        </h2>

        <figure className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <img src="/assets/images/messaging/screenshot-modal-mobile.png" alt="Modal in Context (Mobile)" className="screenshot" width="187" height="334" />
          </div>

          <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--2-of-3">
            <img src="/assets/images/messaging/screenshot-modal-desktop.png" alt="Modal in Context (Desktop)" className="screenshot" width="640" height="512" />
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-dos-donts">
          Dos and Don&rsquo;ts
        </h2>

        <h3 className="site-text-heading--label">Do</h3>

        <ul>
          <li>
            <strong>Do</strong> use modals only when needed to convey
            progress, confirmation, or an error. A user shouldn’t see
            multiple warning modals in one flow.
          </li>

          <li>
            <strong>Do</strong> place the action buttons on the bottom right,
            consistent with the overall modal pattern.
          </li>

          <li>
            <strong>Do</strong> match the title and action button label. For
            instance, if the modal title is “Delete contact?” the action
            button should say “Delete.”
          </li>
        </ul>

        <h3 className="site-text-heading--label">Do Not</h3>

        <ul>
          <li>
            <strong>Do not</strong> use a modal to notify the user of a
            successful action, such as “Contact was added to the opportunity.”
            Use
            a <a href="/guidelines/messaging-components-toasts/">toast</a> for
            that instead.
          </li>

          <li>
            <strong>Do not</strong> focus the cursor on the action button. A
            user that relies on keyboard a lot may accidentally confirms the
            action.
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-variants-component">
          Variants - Components
        </h2>

        <p>
          N/A (There is only one UI version of the modal, but the UI text will
          change depending on the context)
        </p>

        <h2 className="site-text-heading--large" id="flavor-variants-state">
          Variants - State
        </h2>

        <figure className="slds-m-vertical--xx-large">
          <figcaption className="site-text-heading--label">
            Transient
          </figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div className="slds-modal__container">
              <div className="slds-modal__header">
                <button className="slds-button slds-button--icon-inverse slds-modal__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="action" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <h2 className="slds-text-heading--medium">
                  Uploading&hellip;
                </h2>
              </div>

              <div className="slds-modal__footer" style={{borderRadius: 0, borderTop: 0, textAlign: 'left'}}>
                <div>
                  <span className="slds-icon_container">
                    <SvgIcon className="slds-icon slds-icon--medium" style={{marginRight: 8 + 'px'}} aria-hidden="true" sprite="doctype" symbol="pdf" />

                    Q3 2017 presentation.pdf
                  </span>
                </div>
              </div>

              <div className="slds-progress-bar slds-progress-bar--large slds-progress-bar--circular" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" role="progressbar">
                <span className="slds-progress-bar__value" style={{width: 25 + '%'}}>
                  <span className="slds-assistive-text">Progress: 25%</span>
                </span>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Warning</figcaption>

          <div className="slds-notify_container slds-notify_container--inline">
            <div className="slds-modal" aria-hidden="false" role="dialog">
              <div className="slds-modal__container">
                <div className="slds-modal__header">
                  <button className="slds-button slds-button--icon-inverse slds-modal__close" tabIndex="-1">
                    <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="action" symbol="close" />

                    <span className="slds-assistive-text">Close</span>
                  </button>

                  <h2 className="slds-text-heading--medium">
                    Delete opportunity?
                  </h2>
                </div>

                <div className="slds-modal__content slds-p-around--large">
                  <div>
                    <p>
                      Are you sure you want to delete opportunity “Tesla
                      CloudHub + Anypoint Connectors”?
                    </p>
                  </div>
                </div>

                <div className="slds-modal__footer">
                  <button className="slds-button slds-button--neutral">
                    Cancel
                  </button>

                  <button className="slds-button slds-button--neutral slds-button--brand">
                    Delete
                  </button>
                </div>
              </div>

              <div className="slds-backdrop"></div>
            </div>
          </div>
        </figure>

        <h2 className="site-text-heading--large" id="flavor-variants-screen">
          Variants - Screen Size
        </h2>


        <figure className="slds-m-vertical--x-large">
          <figcaption className="site-text-heading--label">Mobile</figcaption>

          <div className="slds-notify_container slds-notify_container--inline slds-notify_container--mobile">
            <div className="slds-modal__container slds-notify--mobile slds-notify--modal">
              <div className="slds-modal__header">
                <button className="slds-button slds-button--icon-inverse slds-modal__close" tabIndex="-1">
                  <SvgIcon aria-hidden="true" className="slds-button__icon slds-button__icon--large" sprite="action" symbol="close" />

                  <span className="slds-assistive-text">Close</span>
                </button>

                <h2 className="slds-text-heading--medium">
                  Delete Opportunity
                </h2>
              </div>

              <div className="slds-modal__footer">
                <button className="slds-button slds-button--neutral slds-button--brand" tabIndex="-1">
                  Delete
                </button>

                <button className="slds-button slds-button--neutral" tabIndex="-1">
                  Cancel
                </button>
              </div>
            </div>

            <div className="slds-backdrop"></div>
          </div>
        </figure>

        <ul>
          <li>Smaller title</li>

          <li>Full-width buttons</li>

          <li>
            Don’t include body text unless it adds crucial information about
            the result of the action
          </li>
        </ul>

        <h2 className="site-text-heading--large" id="flavor-specs">
          Recommended Specs
        </h2>

        <p>
          <a href="/components/modals/">Refer to this code sample</a> for the
          modal markup.
        </p>

        <p>
          Modals behave the same whether they&rsquo;re used as a create/edit
          container or as a messaging container. Use the default modal
          component specs plus the animation specs below.
        </p>

        <div className="slds-scrollable--x">
          <table className="slds-table slds-table--bordered slds-table--col-bordered slds-no-row-hover">
            <thead className="slds-theme--shade">
              <tr className="site-text-heading--label">
                <th scope="col">Description</th>

                <th scope="col">Token</th>

                <th scope="col">Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">
                  Background fade in &amp; fade out duration
                </th>

                <td><code>$duration-quickly</code></td>

                <td>0.1 seconds</td>
              </tr>

              <tr>
                <th scope="row">Modal grow animation duration</th>

                <td><code>$duration-quickly</code></td>

                <td>0.1 seconds</td>
              </tr>

              <tr>
                <th scope="row">Modal grow initial size</th>

                <td><code>N/A</code></td>

                <td>0.9</td>
              </tr>

              <tr>
                <th scope="row">Modal grow final size</th>

                <td><code>N/A</code></td>

                <td>1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageBody>
);
