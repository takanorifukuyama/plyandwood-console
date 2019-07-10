import React, { Component } from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { DisplayMode, SearchInput } from 'components';
import { search_input } from "../../../../actions"
import styles from './styles';

var data = require('./products.json')

class ProductsToolbar extends Component {
  render() {
    const { classes, className, products, input_change } = this.props;
    const rootClassName = classNames(classes.root, className);
    function handle_input(e){
      console.log(e.target.value)
      var val = e.target.value
      // JavaScriptのfilter()メソッドで絞り込み、絞り込んだ配列をline変数に格納
      const line = data.filter((item) => (
      // idまたはnameにキーワードが含まれていればtrueを返す
        item.code.toString().indexOf(val) >= 0
        || item.product.toString().indexOf(val) >= 0
      ));
      input_change(line)
    }
    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            Add
          </Button>
        </div>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search product"
            onChange={handle_input}
          />
          <span className={classes.spacer} />
          <DisplayMode mode="grid" />
        </div>
      </div>
    );
  }
}

ProductsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  products: state.products,
})
const mapDispatchToProps = dispatch => ({
  input_change: value => dispatch(search_input(value))
})
// export default connect(withStyles(styles)(ProductsToolbar))(mapStateToProps, mapDispatchToProps)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductsToolbar))
