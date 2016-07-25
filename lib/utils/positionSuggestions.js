'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');
  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var positionSuggestions = function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect;
  var popover = _ref.popover;
  var state = _ref.state;
  var props = _ref.props;

  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect = {};

  if (relativeParent) {
    relativeRect.scrollLeft = relativeParent.scrollLeft;
    relativeRect.scrollTop = relativeParent.scrollTop;

    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect.left = decoratorRect.left - relativeParentRect.left;
    relativeRect.top = decoratorRect.top - relativeParentRect.top;
  } else {
    relativeRect.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    relativeRect.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    relativeRect.top = decoratorRect.top;
    relativeRect.left = decoratorRect.left;
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;

  let result = {
    left: left + 'px',
    top: top + 'px',
    transformOrigin: '1em 0%'
  };
  if (state.isActive) {
    result.transform = 'scale(1)';
    result.WbkitTransform = 'scale(1)';
    result.transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    result.WebkitTransition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
  }

  return result;
};

exports.default = positionSuggestions;
