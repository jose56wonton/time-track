import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';

import styles from './styles';
import * as TableDataTypes from '~/constants/tableDataTypes';

export class SortSelectHead extends React.Component {
  createSortHandler = (property, type, keys) => event => {
    this.props.onRequestSort(event, property, type, keys);
  };

  render() {
    const { order, orderBy, headerData, keys, type, classes } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell className={classes.headerCell}>
            <div></div>
          </TableCell>
          {headerData.map(row => {
            let sortedColumn;
            if (type === TableDataTypes.OBJECT) {
              sortedColumn =
                orderBy === row.id && keys === row.keys && type === row.type;
            } else {
              sortedColumn = orderBy === row.id;
            }
            const key = row.keys ? row.id + row.keys.join(``) : row.id;
            return (
              <TableCell
                className={classes.headerCell}
                key={key}
                align={row.align}
                padding={row.padding}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={
                    row.align === `right` ? `bottom-end` : `bottom-start`
                  }
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={sortedColumn}
                    direction={order}
                    onClick={this.createSortHandler(row.id, row.type, row.keys)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

SortSelectHead.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number.isRequired,
  headerData: PropTypes.array.isRequired,
  keys: PropTypes.array,
  type: PropTypes.string
};

export default withStyles(styles)(SortSelectHead);
