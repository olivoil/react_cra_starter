import ApolloClient from 'apollo-boost';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import mergeGet from 'src/utils/mergeGet';

import * as themeStore from './theme/resolvers';

const stores = [themeStore];
const defaults = mergeGet('defaults')(stores);
const resolvers = mergeGet('resolvers')(stores);

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage as any
});

const client = new ApolloClient({
  cache,
  uri: '',
  resolvers
});

const initData = () =>
  client.writeData({
    data: defaults
  });

initData();

// client.resetStore()
client.onResetStore(async () => {
  initData();
});
// client.clearStore()
client.onClearStore(async () => {
  initData();
});

export default client;
