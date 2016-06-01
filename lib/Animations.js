const Animations = {

  fade: () => ({
    nextLayer: {
      transition: '1s opacity ease',
      startStyle: { opacity: 0 },
      endStyle: { opacity: 1 },
    },
  }),

  toLeft: () => ({
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
  }),

  toRight: () => ({
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
  }),

  toUp: () => ({
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
  }),

  toDown: () => ({
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
  }),

  coverLeft: () => ({
    currentlayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateX(0%)',
      },
      endStyle: {
        transform: 'translateX(100%)',
      },
    },
    nextLayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateX(100%)',
      },
      endStyle: {
        transform: 'translateX(0%)',
      },
    },
  }),

  coverRight: () => ({
    currentlayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateX(0%)',
      },
      endStyle: {
        transform: 'translateX(100%)',
      },
    },
    nextLayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateX(-100%)',
      },
      endStyle: {
        transform: 'translateX(0%)',
      },
    },
  }),

  coverUp: () => ({
    currentlayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateY(0%)',
      },
      endStyle: {
        transform: 'translateY(-100%)',
      },
    },
    nextLayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateY(-100%)',
      },
      endStyle: {
        transform: 'translateY(0%)',
      },
    },
  }),

  coverDown: () => ({
    currentlayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateY(0%)',
      },
      endStyle: {
        transform: 'translateY(100%)',
      },
    },
    nextLayer: {
      transition: '1s all',
      startStyle: {
        transform: 'translateY(100%)',
      },
      endStyle: {
        transform: 'translateY(0%)',
      },
    },
  }),

  shiftLeft: () => ({
    currentLayer: {
      transition: '1s all',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '-100%' },
    },
    nextLayer: {
      transition: '1s all',
      startStyle: { marginLeft: '100%' },
      endStyle: { marginLeft: '0%' },
    },
  }),

  shiftRight: () => ({
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
  }),

  flip: () => ({
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
  }),

  threeDFlip: () => ({
    currentLayer: {
      perspective: '1000px',
      transition: '0.3s',
      transformStyle: 'preserve-3d',
      startStyle: { WebkitBackfaceVisibility: 'hidden', zIndex: 1 },
      endStyle: { transform: 'rotateY(180deg)' },
    },
    nextLayer: {
      transition: '0.3s',
      transformStyle: 'preserve-3d',
      startStyle: { WebkitBackfaceVisibility: 'hidden' },
      endStyle: { transform: 'rotateY(180deg)' },
    },
  }),

  bookFlip: () => ({}),
};

export default Animations;
