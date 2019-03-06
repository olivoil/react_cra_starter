import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './bootstrap';
import { ApolloProvider } from 'react-apollo-hooks';
import client from 'src/graphql/client';
import withTheme from 'src/utils/withTheme';
import App from 'src/pages/App';
import Loader from 'src/pages/Loader';
import * as serviceWorker from 'src/serviceWorker';

import 'src/i18n';

const Themed = withTheme(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Suspense fallback={<Loader />}>
      <Themed />
    </Suspense>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
