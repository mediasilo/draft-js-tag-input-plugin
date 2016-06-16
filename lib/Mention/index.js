'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(props) {
  var entityKey = props.entityKey;
  var _props$theme = props.theme;
  var theme = _props$theme === undefined ? {} : _props$theme;

  var _Entity$get$getData = _draftJs.Entity.get(entityKey).getData();

  var mention = _Entity$get$getData.mention;


  if (mention.has('link')) {
    return _react2.default.createElement(
      'a',
      {
        href: mention.get('link'),
        className: theme.mention,
        spellCheck: false
      },
      props.mentionPrefix,
      props.children
    );
  }

  return _react2.default.createElement(
    'span',
    {
      className: theme.mention,
      spellCheck: false
    },
    props.mentionPrefix,
    props.children
  );
};

exports.default = Mention;