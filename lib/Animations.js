const Animations = {

  fade: () => {
    return {
      nextLayer: {
        transition: '1s opacity ease',
        startStyle: { opacity: 0 },
        endStyle: { opacity: 1 },
      },
    };
  },

  toLeft: () => {
    return {
      currentLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '0px' },
        endStyle: { marginLeft: '100%' },
      },
      nextLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '100%' },
        endStyle: { marginLeft: '0px' },
      },
    };
  },

  toRight: () => {
    return {
      currentLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '0px' },
        endStyle: { marginLeft: '-100%' },
      },
      nextLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '-100%' },
        endStyle: { marginLeft: '0px' },
      },
    };
  },

  toUp: () => {
    return {
      currentLayer: {
        transition: '1s all',
        startStyle: { marginTop: '0px' },
        endStyle: { marginTop: '-100%' },
      },
      nextLayer: {
        transition: '1s all',
        startStyle: { marginTop: '-100%' },
        endStyle: { marginTop: '0px' },
      },
    };
  },

  toDown: () => {
    return {
      currentLayer: {
        transition: '1s all',
        startStyle: { marginTop: '0px' },
        endStyle: { marginTop: '100%' },
      },
      nextLayer: {
        transition: '1s all',
        startStyle: { marginTop: '100%' },
        endStyle: { marginTop: '0px' },
      },
    };
  },

  shiftLeft: () => {
    return {
      currentLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '0px' },
        endStyle: { marginLeft: '-100%' },
      },
      nextLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '100%' },
        endStyle: { marginLeft: '-100%' },
      },
    };
  },

  shiftRight: () => {
    return {
      currentLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '0px' },
        endStyle: { marginLeft: '100%' },
      },
      nextLayer: {
        transition: '1s all',
        startStyle: { marginLeft: '-100%' },
        endStyle: { marginLeft: '0px' },
      },
    };
  },

  flip: () => {
    return {
      currentLayer: {
        transition: 'transform 0.3s',
        startStyle: { WebkitBackfaceVisibility: 'hidden', zIndex: 1 },
        endStyle: { transform: 'rotateY(180deg)' },
      },
      nextLayer: {
        transition: 'transform 0.3s',
        startStyle: { WebkitBackfaceVisibility: 'hidden' },
        endStyle: { transform: 'rotateY(-180deg)' },
      },
    };
  },

  threeDFlip: () => {
    return {};
  },

  bookFlip: () => {
    return {};
  },
};

export default Animations;
