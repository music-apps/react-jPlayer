/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';

import Media from '../media/mediaContainer';

const Video = ({ events }) => (
  <Media events={events}>
    <video />
  </Media>
);

Video.defaultProps = {
  events: null,
};

Video.propTypes = {
  events: PropTypes.shape({
    onAbort: PropTypes.func,
    onCanPlay: PropTypes.func,
    onCanPlayThrough: PropTypes.func,
    onDurationChange: PropTypes.func,
    onEmptied: PropTypes.func,
    onEncrypted: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
    onLoadedData: PropTypes.func,
    onLoadedMetadata: PropTypes.func,
    onLoadStart: PropTypes.func,
    onPause: PropTypes.func,
    onPlay: PropTypes.func,
    onPlaying: PropTypes.func,
    onProgress: PropTypes.func,
    onRateChange: PropTypes.func,
    onSeeked: PropTypes.func,
    onSeeking: PropTypes.func,
    onStalled: PropTypes.func,
    onSuspend: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onVolumeChange: PropTypes.func,
    onWaiting: PropTypes.func,
  }),
};

export default Video;
