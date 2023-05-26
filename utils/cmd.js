const uiCmd = function(code) {
  const detected = utilDetect();

  if (detected.os === 'mac') {
    return code;
  }

  if (detected.os === 'win') {
    if (code === '⌘⇧Z') return 'Ctrl+Y';
  }

  var result = '',
    replacements = {
      '⌘': 'Ctrl',
      '⇧': 'Shift',
      '⌥': 'Alt',
      '⌫': 'Backspace',
      '⌦': 'Delete',
    };

  for (var i = 0; i < code.length; i++) {
    if (code[i] in replacements) {
      result += replacements[code[i]];
    }
    else {
      result += code[i];
    }
  }

  return result;
};
