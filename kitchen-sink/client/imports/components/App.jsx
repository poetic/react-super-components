import React from 'react';
import Index from './Index';
import ImageDemo from './ImageDemo';
import SubscriptionsDemo from './SubscriptionsDemo';
import ListDemo from './ListDemo';
import StackDemo from './StackDemo';
import Stack from '../lib/Stack';

export default () => (
  <Stack index='path'>
    <Index index='' />
    <ImageDemo index='image' />
    <SubscriptionsDemo index='subscription' />
    <ListDemo index='list' />
    <StackDemo index='stack' />
  </Stack>
);
