// Generated by CoffeeScript 1.6.1
(function() {

  (function($, document) {
    var getCaret, selection, setCaret;
    $.fn.caret = function(start, end) {
      var result, _ref;
      switch (arguments.length) {
        case 0:
          result = getCaret(this[0]);
          result.text = this.val().substring(result.start, result.end);
          return result;
        case 1:
          if (typeof start === 'object') {
            _ref = start, start = _ref.start, end = _ref.end;
          } else {
            end = start;
          }
      }
      return this.each(function() {
        return setCaret(this, start, end);
      });
    };
    if (selection = document.selection) {
      getCaret = function(element) {
        var end, range, start, value;
        value = element.value;
        range = selection.createRange().duplicate();
        range.moveEnd('character', value.length);
        start = range.text === '' ? value.length : value.lastIndexOf(range.text);
        range = selection.createRange().duplicate();
        range.moveStart('character', -value.length);
        end = range.text.length;
        return {
          start: start,
          end: end
        };
      };
      return setCaret = function(element, start, end) {
        var range;
        range = element.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
        return range.focus();
      };
    } else {
      getCaret = function(element) {
        return {
          start: element.selectionStart,
          end: element.selectionEnd
        };
      };
      return setCaret = function(element, start, end) {
        element.selectionStart = start;
        return element.selectionEnd = end;
      };
    }
  })(jQuery, document);

}).call(this);
