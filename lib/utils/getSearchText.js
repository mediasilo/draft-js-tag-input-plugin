"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSearchText = function getSearchText(editorState, selection) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset() - 1;
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();

  var lastEntityIndex = 0;

  currentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null;
  }, function (start, end) {
    lastEntityIndex = end;
  });

  return {
    word: blockText.substr(lastEntityIndex),
    begin: lastEntityIndex > 0 ? lastEntityIndex + 1 : lastEntityIndex,
    end: anchorOffset + 1
  };
};

exports.default = getSearchText;