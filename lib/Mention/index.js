'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(props) {
    var entityKey = props.entityKey,
        _props$theme = props.theme,
        theme = _props$theme === undefined ? {} : _props$theme,
        mentionComponent = props.mentionComponent;

    var _Entity$get$getData = _draftJs.Entity.get(entityKey).getData(),
        mention = _Entity$get$getData.mention;

    var MentionLink = function MentionLink(_ref) {
        var mention = _ref.mention,
            mentionPrefix = _ref.mentionPrefix,
            children = _ref.children,
            theme = _ref.theme;
        return _react2.default.createElement(
            'a',
            {
                href: mention.get('link'),
                className: theme.mention,
                spellCheck: false
            },
            mentionPrefix,
            children
        );
    };

    var MentionText = function MentionText(_ref2) {
        var theme = _ref2.theme,
            mentionPrefix = _ref2.mentionPrefix,
            children = _ref2.children;
        return _react2.default.createElement(
            'span',
            {
                className: theme.mention,
                spellCheck: false
            },
            mentionPrefix,
            children
        );
    };

    var Component = mentionComponent || (mention.has('link') ? MentionLink : MentionText);

    return _react2.default.createElement(
        Component,
        {
            entityKey: entityKey,
            theme: theme,
            mention: mention,
            mentionPrefix: props.mentionPrefix
        },
        props.children
    );
};

exports.default = Mention;