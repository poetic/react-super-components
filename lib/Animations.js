const Animations = {
  crossFade: () => ({
    nextLayer: {
      transition: 'opacity 0.5s',
      startStyle: { opacity: 0 },
      endStyle: { opacity: 1 },
    },
  }),

  toLeft: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateX(0%)' },
      endStyle: { transform: 'translateX(-100%)' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateX(100%)' },
      endStyle: { transform: 'translateX(0%)' },
    },
  }),

  toRight: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateX(0%)' },
      endStyle: { transform: 'translateX(100%)' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateX(-100%)' },
      endStyle: { transform: 'translateX(0%)' },
    },
  }),

  toUp: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateY(0%)' },
      endStyle: { transform: 'translateY(-100%)' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateY(100%)' },
      endStyle: { transform: 'translateY(0%)' },
    },
  }),

  toDown: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateY(0%)' },
      endStyle: { transform: 'translateY(100%)' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateY(-100%)' },
      endStyle: { transform: 'translateY(0%)' },
    },
  }),

  coverLeft: () => ({
    nextLayer: {
      transition: '0.5s',
      startStyle: { transform: 'translateX(100%)' },
      endStyle: { transform: 'translateX(0%)' },
    },
  }),

  coverRight: () => ({
    nextLayer: {
      transition: 'transform 0.5s',
      startStyle: { transform: 'translateX(-100%)' },
      endStyle: { transform: 'translateX(0%)' },
    },
  }),

  coverUp: () => ({
    nextLayer: {
      transition: 'transform 0.5s',
      startStyle: { transform: 'translateY(100%)' },
      endStyle: { transform: 'translateY(0%)' },
    },
  }),

  coverDown: () => ({
    nextLayer: {
      transition: ' transform 0.5s',
      startStyle: { transform: 'translateY(-100%)' },
      endStyle: { transform: 'translateY(0%)' },
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

  // NOTE: the container must have this css to make the animation work
  // perspective: '1000px'
  flip3D: () => ({
    currentLayer: {
      transition: '0.5s',
      startStyle: { transformStyle: 'preserve-3d', zIndex: 1, backfaceVisibility: 'hidden' },
      endStyle: { transformStyle: 'preserve-3d', zIndex: 1, transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' },
    },
    nextLayer: {
      transition: '0.5s',
      startStyle: { transformStyle: 'preserve-3d', transform: 'rotateY(-180deg)', backfaceVisibility: 'hidden' },
      endStyle: { transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' },
    },
  }),
};

export default Animations;
