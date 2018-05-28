/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Fillgap from './Fillgap';

const title = 'Fill Gap';
const word = 'default';

function action() {
  return {
    chunks: ['fillgap'],
    title,
    word,
    component: (
      <Layout>
        <Fillgap title={title} word={word} />
      </Layout>
    ),
  };
}

export default action;
