const Animations = {

  fade: () => ({
    nextLayer: {
      transition: 'opacity 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { opacity: 0 },
      endStyle: { opacity: 1 },
    },
  }),

  toLeft: () => ({
    currentLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '100%' },
    },
    nextLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '100%' },
      endStyle: { marginLeft: '0px' },
    },
  }),

  toRight: () => ({
    currentLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '-100%' },
    },
    nextLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '-100%' },
      endStyle: { marginLeft: '0px' },
    },
  }),

  toUp: () => ({
    currentLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginTop: '0px' },
      endStyle: { marginTop: '-100%' },
    },
    nextLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginTop: '-100%' },
      endStyle: { marginTop: '0px' },
    },
  }),

  toDown: () => ({
    currentLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginTop: '0px' },
      endStyle: { marginTop: '100%' },
    },
    nextLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginTop: '100%' },
      endStyle: { marginTop: '0px' },
    },
  }),

  coverLeft: () => ({
    currentlayer: {
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: {
        transform: 'translateX(0%)',
      },
      endStyle: {
        transform: 'translateX(100%)',
      },
    },
    nextLayer: {
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
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
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: {
        transform: 'translateX(0%)',
      },
      endStyle: {
        transform: 'translateX(100%)',
      },
    },
    nextLayer: {
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
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
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: {
        transform: 'translateY(0%)',
      },
      endStyle: {
        transform: 'translateY(-100%)',
      },
    },
    nextLayer: {
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
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
      transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: {
        transform: 'translateY(0%)',
      },
      endStyle: {
        transform: 'translateY(100%)',
      },
    },
    nextLayer: {
      transition: ' transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
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
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '-100%' },
    },
    nextLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '100%' },
      endStyle: { marginLeft: '0%' },
    },
  }),

  shiftRight: () => ({
    currentLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '0px' },
      endStyle: { marginLeft: '100%' },
    },
    nextLayer: {
      transition: '0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { marginLeft: '-100%' },
      endStyle: { marginLeft: '0px' },
    },
  }),

  flip: () => ({
    currentLayer: {
      transition: ' transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { WebkitBackfaceVisibility: 'hidden', zIndex: 1 },
      endStyle: { transform: 'rotateY(180deg)' },
    },
    nextLayer: {
      transition: ' transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      startStyle: { WebkitBackfaceVisibility: 'hidden' },
      endStyle: { transform: 'rotateY(-180deg)' },
    },
  }),

  threeDFlip: () => ({
    currentLayer: {
      perspective: '1000px',
      transition: ' transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      transformStyle: 'preserve-3d',
      startStyle: { WebkitBackfaceVisibility: 'hidden', zIndex: 1 },
      endStyle: { transform: 'rotateY(180deg)' },
    },
    nextLayer: {
      transition: ' transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      transformStyle: 'preserve-3d',
      startStyle: { WebkitBackfaceVisibility: 'hidden' },
      endStyle: { transform: 'rotateY(180deg)' },
    },
  }),

  bookFlip: () => ({}),
};

export default Animations;
