/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import assert from 'assert';
import path from 'path';
import uuid from 'uuid';

import { generateUI } from 'scripts/gulp/generate-ui';

/**
 * Find a specific id in the UI array
 *
 * @param {string} id
 * @returns {object}
 */
const getUI = id => _.find(generateUI(), { id }).components;

/**
 * Add additional fields to a nav item
 */
export const formatNavItem = (item, parent) => {
  assert(_.isString(item.label), 'item must have a "label" property');
  assert(
    _.isPlainObject(parent) && _.isString(parent.path) || _.isString(item.path),
    'root item must have a path'
  );
  item.uid = item.uid || uuid.v4();
  item.id = item.id || _.kebabCase(item.label);
  item.path = item.path || path.join(parent.path, item.id);
  if (item.children) {
    item.children = item.children.map(i => formatNavItem(i, item));
  }
  return item;
};

/**
 * Return root nav id
 */
export const rootNavId = (path) => {
  return _.drop(getActiveNavItems(nav, path)).map(item => item.id)[0] || 'resources';
};

/**
 * Return root nav label
 */
export const rootNavLabel = (path) => {
  if (/touch/.test(path)) return 'Components › Touch';
  if (/utilities/.test(path)) return 'Components › Utilities';
  return _.drop(getActiveNavItems(nav, path)).map(item => item.label)[0] || 'Resources';
};

/**
 * Return true if an item contains a path
 *
 * @param {object} item
 * @param {string} path
 * @returns {boolean}
 */
export const hasNavItem = (item, path) => {
  if (item.path === path) return true;
  if (item.children) {
    for (let c of item.children) {
      if (hasNavItem(c, path)) return true;
    }
  }
  return false;
};

/**
 * Return an array of active nav items based on a url path
 *
 * @param {object[]} navItems
 * @param {string} path
 * @return {object[]}
 */
export const getActiveNavItems = (item, path) => {
  let items = [];
  if (hasNavItem(item, path)) {
    items = items.concat(item);
    if (item.children) {
      for (let child of item.children) {
        if (hasNavItem(child, path)) {
          return items.concat(getActiveNavItems(child, path));
        }
      }
    }
  }
  return items;
};

const utilities = {
  label: 'Utilities',
  children: getUI('utilities').map(component => ({
    label: component.title,
    status: component.status
  }))
};

const touch = {
  label: 'Touch',
  children: getUI('touch').map(component => ({
    label: component.title,
    status: component.status
  }))
};

const components = getUI('components').map((component, index) => ({
  label: component.title,
  status: component.status,
  separator: index === 0
}));

const nav = formatNavItem({
  label: 'Root',
  path: '/',
  children: [
    {
      label: 'Getting Started'
    },
    {
      label: 'Platforms',
      children: [
        {
          label: 'Visualforce'
        },
        {
          label: 'Lightning'
        },
        {
          label: 'Heroku'
        },
        {
          id: 'ios',
          label: 'iOS'
        }
      ]
    },
    {
      label: 'Guidelines',
      children: [
        {
          label: 'Overview'
        },
        {
          label: 'Accessibility'
        },
        {
          label: 'Color'
        },
        {
          label: 'Data Entry'
        },
        {
          label: 'Displaying Data'
        },
        {
          label: 'Layout'
        },
        {
          label: 'Loading'
        },
        {
          label: 'Localization'
        },
        {
          label: 'Markup and Style'
        },
        {
          label: 'Messaging',
          children: [
            {
              path: '/guidelines/messaging-overview',
              label: 'Overview'
            },
            {
              path: '/guidelines/messaging-types',
              label: 'Types'
            },
            {
              label: 'Components',
              children: [
                {
                  path: '/guidelines/messaging-components-overview',
                  label: 'Overview'
                },
                {
                  path: '/guidelines/messaging-components-banners',
                  label: 'Banners'
                },
                {
                  path: '/guidelines/messaging-components-inline-text',
                  label: 'Inline Text'
                },
                {
                  path: '/guidelines/messaging-components-illustration-and-inline-text',
                  label: 'Illustration & Inline Text'
                },
                {
                  path: '/guidelines/messaging-components-modals',
                  label: 'Modals'
                },
                {
                  path: '/guidelines/messaging-components-notices',
                  label: 'Notices'
                },
                {
                  path: '/guidelines/messaging-components-notifications',
                  label: 'Notifications'
                },
                {
                  path: '/guidelines/messaging-components-popovers',
                  label: 'Popovers'
                },
                {
                  path: '/guidelines/messaging-components-toasts',
                  label: 'Toasts'
                }
              ]
            },
            {
              label: 'States',
              path: '/guidelines/messaging-states'
            }
          ]
        },
        {
          label: 'Motion'
        },
        {
          label: 'Navigation'
        },
        {
          label: 'Typography'
        },
        {
          label: 'Voice and Tone'
        }
      ]
    },
    {
      route: 'components',
      label: 'Components',
      children: [
        {
          path: '/components-overview',
          label: 'Overview'
        }
      ].concat([utilities, touch]).concat(components)
    },
    {
      label: 'Design Tokens'
    },
    {
      label: 'Icons'
    },
    {
      label: 'Downloads'
    },
    {
      label: 'Articles'
    },
    {
      label: 'FAQ',
      abbrTitle: 'Frequently Asked Questions'
    },
    {
      label: 'Feedback',
      path: 'https://github.com/salesforce-ux/design-system/issues',
      internal: false
    },
    {
      label: 'Feedback',
      path: '/feedback',
      internal: true
    },
    {
      label: 'Log a bug',
      path: '/bugs',
      internal: true
    }
  ]
});

export default () => nav;
