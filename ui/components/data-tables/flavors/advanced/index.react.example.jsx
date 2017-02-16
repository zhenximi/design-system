/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Checkbox } from 'ui/components/forms/flavors/checkbox/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';

const columns = ['Name', 'Account Name', 'Close Date', 'Stage', 'Confidence', 'Amount', 'Contact'];

const rows = [{
  'recordName': 'Acme - 1,200 Widgets',
  'accountName': 'Acme',
  'closeDate': '4/10/15',
  'stage': 'Value Proposition',
  'confidence': '30%',
  'amount': '$25,000,000',
  'contact': 'jrogers@acme.com'
}, {
  'recordName': 'Acme - 200 Widgets',
  'accountName': 'Acme',
  'closeDate': '1/31/15',
  'stage': 'Prospecting',
  'confidence': '60%',
  'amount': '$5,000,000',
  'contact': 'bob@acme.com'
}, {
  'recordName': 'salesforce.com - 1,000 Widgets',
  'accountName': 'salesforce.com',
  'closeDate': '1/31/15 3:45PM',
  'stage': 'Id. Decision Makers',
  'confidence': '70%',
  'amount': '$25,000',
  'contact': 'nathan@salesforce.com'
}];

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Table = props =>
  <table className={classNames('slds-table slds-table--bordered', props.className)} role="grid">
    {props.children}
  </table>;

export let Th = props => {

  const { columnName, focusable, ...rest } = props;
  const tabIndex = focusable ? '0' : '-1';
  const uniqueId = _.uniqueId('cell-resize-handle-');
  let sortDirection;
  if (props['aria-sort']) {
    sortDirection = (props['aria-sort'] === 'ascending' ? 'Sorted ascending' : 'Sorted descending' );
  }

  return (
    <th {...rest} className={classNames('slds-is-sortable slds-is-resizable slds-text-title--caps', props.className)} scope="col">
      <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset" tabIndex={ tabIndex }>
        <span className="slds-assistive-text">Sort </span>
        <span className="slds-truncate" title={columnName || 'Column Name'}>{ columnName || 'Column Name' }</span>
        <div className="slds-icon_container">
          <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" sprite="utility" symbol="arrowdown" />
        </div>
        <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">{sortDirection}</span>
      </a>
      <div className="slds-resizable">
        <label htmlFor={uniqueId} className="slds-assistive-text">{ columnName || 'Column Name' } column width</label>
        <input className="slds-resizable__input slds-assistive-text" type="range" min="20" max="1000" id={uniqueId} tabIndex={ tabIndex } />
        <span className="slds-resizable__handle">
          <span className="slds-resizable__divider"></span>
        </span>
      </div>
    </th>
  );
};

let RowData = props => {
  let checkboxLabel = 'Select item ' + props.index;

  return(
    <tr className={classNames('slds-hint-parent', props.className)} aria-selected={ props.checked }>
      <td role="gridcell" className="slds-text-align--right" style={{ width: '3.25rem' }}>
        <Checkbox label={ checkboxLabel } checked={ props.checked } hideLabel />
      </td>
      <th scope="row">
        <div className="slds-truncate" title={ props.recordName }>
          <a href="javascript:void(0);">{ props.recordName }</a>
        </div>
      </th>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.accountName }>{ props.accountName }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.closeDate }>{ props.closeDate }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.stage }>{ props.stage }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.confidence }>{ props.confidence }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.amount }>{ props.amount }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={ props.contact }><a href="javascript:void(0);">{ props.contact }</a></div>
      </td>
      <td role="gridcell" style={{ width: '3.25rem' }}>
        <ButtonIcon
          className="slds-button--icon-border-filled slds-button--icon-x-small"
          iconClassName="slds-button__icon--hint slds-button__icon--small"
          symbol="down"
          assistiveText="Show More"
          title="Show More"
        />
      </td>
    </tr>
  );
};



//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-line-height--reset">
            <th scope="col" style={{ width: '3.25rem' }} className="slds-text-align--right">
              <div className="slds-th__action slds-th__action--form">
                <Checkbox label="Select All" hideLabel />
              </div>
            </th>
            { _.times(columns.length, i =>
              <Th key={ i }
                columnName={ columns[i] }
                focusable />
            )}
            <th scope="col" style={{ width: '3.25rem' }}>
              <div className="slds-th__action">
                <span className="slds-assistive-text">Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { _.times(rows.length, i =>
            <RowData key={ i }
              index={ i + 1 }
              recordName={ rows[i].recordName }
              accountName={ rows[i].accountName }
              closeDate={ rows[i].closeDate }
              stage={ rows[i].stage }
              confidence={ rows[i].confidence }
              amount={ rows[i].amount }
              contact={ rows[i].contact }
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'row-selected',
    label: 'Row Selected',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-line-height--reset">
            <th scope="col" style={{ width: '3.25rem' }} className="slds-text-align--right">
              <div className="slds-th__action slds-th__action--form">
                <Checkbox label="Select All" checked hideLabel />
              </div>
            </th>
            { _.times(columns.length, i =>
              <Th key={ i }
                columnName={ columns[i] }
                focusable />
            )}
            <th scope="col" style={{ width: '3.25rem' }}>
              <div className="slds-th__action">
                <span className="slds-assistive-text">Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { _.times(rows.length, i =>
            <RowData key={ i }
              index={ i + 1 }
              className={ (i===1) ? 'slds-is-selected' : null }
              recordName={ rows[i].recordName }
              accountName={ rows[i].accountName }
              closeDate={ rows[i].closeDate }
              stage={ rows[i].stage }
              confidence={ rows[i].confidence }
              amount={ rows[i].amount }
              contact={ rows[i].contact }
              checked={ (i===1) ? true : null }
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'all-row-selected',
    label: 'All Rows Selected',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-line-height--reset">
            <th scope="col" style={{ width: '3.25rem' }} className="slds-text-align--right">
              <div className="slds-th__action slds-th__action--form">
                <Checkbox label="Select All" checked hideLabel />
              </div>
            </th>
            { _.times(columns.length, i =>
              <Th key={ i }
                columnName={ columns[i] }
                focusable />
            )}
            <th scope="col" style={{ width: '3.25rem' }}>
              <div className="slds-th__action">
                <span className="slds-assistive-text">Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { _.times(rows.length, i =>
            <RowData key={ i }
              index={ i + 1 }
              className="slds-is-selected"
              recordName={ rows[i].recordName }
              accountName={ rows[i].accountName }
              closeDate={ rows[i].closeDate }
              stage={ rows[i].stage }
              confidence={ rows[i].confidence }
              amount={ rows[i].amount }
              contact={ rows[i].contact }
              checked
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'sorted-column-asc',
    label: 'Sorted Ascending',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-line-height--reset">
            <th scope="col" style={{ width: '3.25rem' }} className="slds-text-align--right">
              <div className="slds-th__action slds-th__action--form">
                <Checkbox label="Select All" hideLabel />
              </div>
            </th>
            { _.times(columns.length, i =>
              <Th key={ i }
                className={ (i===1) ? 'slds-is-sorted slds-is-sorted--asc' : null }
                aria-sort={ (i===1) ? 'ascending' : null }
                columnName={ columns[i] }
                focusable
              />
            )}
            <th scope="col" style={{ width: '3.25rem' }}>
              <div className="slds-th__action">
                <span className="slds-assistive-text">Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { _.times(rows.length, i =>
            <RowData key={ i }
              index={ i + 1 }
              recordName={ rows[i].recordName }
              accountName={ rows[i].accountName }
              closeDate={ rows[i].closeDate }
              stage={ rows[i].stage }
              confidence={ rows[i].confidence }
              amount={ rows[i].amount }
              contact={ rows[i].contact }
            />
          )}
        </tbody>
      </Table>
  },
  {
    id: 'sorted-column-desc',
    label: 'Sorted Descending',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-line-height--reset">
            <th scope="col" style={{ width: '3.25rem' }} className="slds-text-align--right">
              <div className="slds-th__action slds-th__action--form">
                <Checkbox label="Select All" hideLabel />
              </div>
            </th>
            { _.times(columns.length, i =>
              <Th key={ i }
                className={ (i===1) ? 'slds-is-sorted slds-is-sorted--desc' : null }
                aria-sort={ (i===1) ? 'descending' : null }
                columnName={ columns[i] }
                focusable
              />
            )}
            <th scope="col" style={{ width: '3.25rem' }}>
              <div className="slds-th__action">
                <span className="slds-assistive-text">Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { _.reverse(_.times(rows.length, i =>
            <RowData key={ i }
              index={ i + 1 }
              recordName={ rows[i].recordName }
              accountName={ rows[i].accountName }
              closeDate={ rows[i].closeDate }
              stage={ rows[i].stage }
              confidence={ rows[i].confidence }
              amount={ rows[i].amount }
              contact={ rows[i].contact }
            />
          ))}
        </tbody>
      </Table>
  },
  {
    id: 'resized-column',
    label: 'Column resized',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-line-height--reset">
            <th scope="col" style={{ width: '3.25rem' }} className="slds-text-align--right">
              <div className="slds-th__action slds-th__action--form">
                <Checkbox label="Select All" hideLabel />
              </div>
            </th>
            { _.times(columns.length, i =>
              <Th key={ i }
                style={{ width: (i===0) ? '300px' : null }}
                columnName={ columns[i] }
                focusable
              />
            )}
            <th scope="col" style={{ width: '3.25rem' }}>
              <div className="slds-th__action">
                <span className="slds-assistive-text">Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { _.times(rows.length, i =>
            <RowData key={ i }
              index={ i + 1 }
              recordName={ rows[i].recordName }
              accountName={ rows[i].accountName }
              closeDate={ rows[i].closeDate }
              stage={ rows[i].stage }
              confidence={ rows[i].confidence }
              amount={ rows[i].amount }
              contact={ rows[i].contact }
            />
          )}
        </tbody>
      </Table>
  }
];
