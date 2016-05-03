import React from 'react';
import Index from './Index';
import ImageDemo from './ImageDemo';
import SubscriptionsDemo from './SubscriptionsDemo';
import ListDemo from './ListDemo';
import StackDemo from './StackDemo';
import Stack from '../lib/Stack';
import Layer from '../lib/Layer';
import Assembler from '../lib/Assembler';

export default () => (
  <Assembler>
    <Stack id='path'>
      <Layer id='' component={Index} />
      <Layer id='image' component={ImageDemo} />
      <Layer id='subscription' component={SubscriptionsDemo} />
      <Layer id='list' component={ListDemo} />
      <Layer id='stack' component={StackDemo} />
    </Stack>
  </Assembler>
);
