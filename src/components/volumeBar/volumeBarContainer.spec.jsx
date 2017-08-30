import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockBar = {
  getBoundingClientRect: () => ({
    width: 20,
    height: 200,
    top: 20,
    left: 0,
  }),
};
const mockClickEvent = {
  pageX: 20,
  pageY: 100,
  preventDefault: Function.prototype,
};
const mockTouchEvent = {
  touches: [
    {
      pageX: 20,
      pageY: 100,
    },
  ],
  preventDefault: Function.prototype,
};
const mockVolumeBar = props => (
  <div
    onClick={() => props.clickMoveBar(mockBar, mockClickEvent)}
    onTouchStart={() => props.touchMoveBar(mockBar, mockTouchEvent)}
  />
);
const VolumeBarContainer = proxyquire('./volumeBarContainer', {
  './volumeBar': mockVolumeBar,
}).default;
const setup = (jPlayers, props) => containerSetup(VolumeBarContainer, jPlayers, props);

describe('VolumeBarContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  describe('moveVolumeBar', () => {
    it('verticalVolume when true gives expected output', () => {
      jPlayers[id].verticalVolume = true;

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(0.6);
    });

    it('onClick moves moveVolumeBar', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(1);
    });

    it('onTouch moves moveVolumeBar', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('touchstart');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(1);
    });
  });
});
