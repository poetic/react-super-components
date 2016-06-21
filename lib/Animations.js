const Animations = {

  fade: () => ({
    nextLayer: {
      transition: 'opacity 0.5s',
      startStyle: { opacity: 0 },
      endStyle: { opacity: 1 },
    },
  }),

  toLeft: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '100%' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '100%' },
      endStyle: { marginLeft: '0px' },
    },
  }),

  toRight: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '-100%' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '-100%' },
      endStyle: { marginLeft: '0px' },
    },
  }),

  toUp: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { marginTop: '0px' },
      endStyle: { marginTop: '-100%' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { marginTop: '-100%' },
      endStyle: { marginTop: '0px' },
    },
  }),

  toDown: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { marginTop: '0px' },
      endStyle: { marginTop: '100%' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { marginTop: '100%' },
      endStyle: { marginTop: '0px' },
    },
  }),

  coverLeft: () => ({
    currentlayer: {
      transition: 'transform 0.5s',
      startStyle: {
        transform: 'translateX(0%)',
      },
      endStyle: {
        transform: 'translateX(100%)',
      },
    },
    nextLayer: {
      transition: 'transform 0.5s',
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
      transition: 'transform 0.5s',
      startStyle: {
        transform: 'translateX(0%)',
      },
      endStyle: {
        transform: 'translateX(100%)',
      },
    },
    nextLayer: {
      transition: 'transform 0.5s',
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
      transition: 'transform 0.5s',
      startStyle: {
        transform: 'translateY(0%)',
      },
      endStyle: {
        transform: 'translateY(-100%)',
      },
    },
    nextLayer: {
      transition: 'transform 0.5s',
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
      transition: 'transform 0.5s',
      startStyle: {
        transform: 'translateY(0%)',
      },
      endStyle: {
        transform: 'translateY(100%)',
      },
    },
    nextLayer: {
      transition: ' transform 0.5s',
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
      transition: '0.5s',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '-100%' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '100%' },
      endStyle: { marginLeft: '0%' },
    },
  }),

  shiftRight: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '100%' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { marginLeft: '-100%' },
      endStyle: { marginLeft: '0px' },
    },
  }),

  flip: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { zIndex: 1, backfaceVisibility: 'hidden' },
      endStyle: { zIndex: 1, transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { transform: 'rotateY(-180deg)', backfaceVisibility: 'hidden' },
      endStyle: { backfaceVisibility: 'hidden' },
    },
  }),

  threeDFlip: () => ({
    currentLayer: {
      transition: '5s',
      transformStyle: 'preserve-3d',
      startStyle: { zIndex: 1, backfaceVisibility: 'hidden' },
      endStyle: { zIndex: 1, transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' },
    },
    nextLayer: {
      transition: '5s',
      transformStyle: 'preserve-3d',
      startStyle: { transform: 'rotateY(-180deg)', backfaceVisibility: 'hidden' },
      endStyle: { backfaceVisibility: 'hidden' },
    },
  }),
};

export default Animations;
