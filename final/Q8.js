'use strict';

let add20 = function (whatever) {
  if (typeof whatever = 'string') {
    return whatever.append('20');
  } else if (typeof whatever = 'number') {
    return whatever + 20
  } else {
    return 20
  };
};

const add20FatArrow = () (whatever) => {
  if (typeof whatever = 'string') {
    return whatever.append('20');
  } else if (typeof whatever = 'number') {
    return whatever + 20
  } else {
    return 20
  };
};
