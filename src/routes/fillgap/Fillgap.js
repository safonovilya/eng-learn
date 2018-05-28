/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Fillgap.css';

// const vowelsRegExp = new RegExp(/[aeyuioj]/gi);
const consonantsRegExp = new RegExp(/[qwrtpsdfghklzxcvbnm]/gi);

class Fillgap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'default',
      isValid: null,
      hasError: null,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  getInitialState() {
    return {
      status: 'default',
      isValid: true,
      hasError: false,
    };
  }

  isMatch() {
    return this.wordInput.value.trim() === this.props.word;
  }

  updateStatus() {
    const match = this.isMatch();
    this.setState({
      isValid: match,
      hasError: !match,
    });
  }

  handleChange(event) {
    this.selectUnderscore();
    this.updateStatus();
  }
  makeGap(word) {
    return word.replace(consonantsRegExp, '_');
  }

  componentDidMount() {
    axios.get(`/getword`).then(res => {
      const data = res.data; // .data.children.map(obj => obj.data);
      // this.setState({ posts });
      console.log(data);
    });

    this.selectUnderscore();
    this.wordInput.focus();
  }

  selectUnderscore() {
    const indexOfUnderscore = this.wordInput.value.indexOf('_');
    this.wordInput.setSelectionRange(indexOfUnderscore, indexOfUnderscore + 1);
  }

  render() {
    // this.state = this.getInitialState();
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>

          <div className={s.wordDiv}>
            <input
              type="text"
              ref={input => {
                this.wordInput = input;
              }}
              defaultValue={this.makeGap(this.props.word)}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Fillgap);
