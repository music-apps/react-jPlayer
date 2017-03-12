import React from 'react';
import expect from 'expect';
import merge from 'lodash.merge';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';
import getInitialStates from './getInitialStates';

const MockPlayer = () => <div />;
const MockPlayerTwo = () => <div />;

MockPlayer.options = {
  muted: true,
};
MockPlayer.id = MockPlayer.name;

MockPlayerTwo.options = {
  autoplay: true,
};
MockPlayerTwo.id = MockPlayerTwo.name;

describe('getInitialStates', () => {
  it('sets initial state correctly with one player', () => {
    const jPlayerInitialStates = getInitialStates(MockPlayer);

    expect(jPlayerInitialStates).toEqual({
      MockPlayer: merge({}, {
        ...internalStatus,
        ...defaultStatus,
        ...defaultOptions,
      }, MockPlayer.options),
    });
  });

  it('sets initial state correctly with multiple players', () => {
    const jPlayerInitialStates = getInitialStates({ MockPlayer, MockPlayerTwo });

    expect(jPlayerInitialStates).toEqual({
      MockPlayer: merge({}, {
        ...internalStatus,
        ...defaultStatus,
        ...defaultOptions,
      }, MockPlayer.options),
      MockPlayerTwo: merge({}, {
        ...internalStatus,
        ...defaultStatus,
        ...defaultOptions,
      }, MockPlayerTwo.options),
    });
  });
});
