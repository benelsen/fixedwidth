module.exports = function(line, format) {

  var match, times, expanded, i;

  // Expand groups: A2,3(1X,I2) => A2,1X,I2,1X,I2,1X,I2
  while ( ( match = /(\d+)\((.*)\)/.exec(format) ) !== null ) {

    times = parseInt(match[1], 10);

    expanded = '';

    for (i = 0; i < times; i++) {
      expanded += match[2];
      if ( i !== times - 1 ) {
        expanded += ',';
      }
    }

    format = format.replace(match[0], expanded);

    if ( format.slice(-1) === ',' ) {
      format = format.slice(0, -1);
    }

  }

  // Expand repetitions: 3F6.4 => F6.4,F6.4,F6.4
  while ( ( match = /(\d+)([AFIX]{1}[\d\.]+)/.exec(format) ) !== null ) {

    times = parseInt(match[1], 10);

    expanded = '';

    for (i = 0; i < times; i++) {
      expanded += match[2];
      if ( i !== times - 1 ) {
        expanded += ',';
      }
    }

    format = format.replace(match[0], expanded);

    if ( format.slice(-1) === ',' ) {
      format = format.slice(0, -1);
    }

  }

  var elements = format.split(',');

  var startIndex = 0;

  var result = elements.map( function(e) {

    var match = /(\d+)?([AFEIX]{1})((\d+){1}[.\d]*)?/.exec(e);

    var repetitions = parseInt(match[1], 10) || 1,
        type = match[2],
        width = parseInt(match[4], 10) || 1;

    var foo;

    switch ( type ) {
      case 'A':
        foo = line.slice(startIndex, startIndex+width);
        break;
      case 'F':
      case 'E':
        foo = parseFloat( line.slice(startIndex, startIndex+width) );
        break;
      case 'I':
        foo = parseInt( line.slice(startIndex, startIndex+width), 10);
        break;
      case 'X':
        foo = null;
        break;
    }

    startIndex += width;

    return foo;
  }).filter( function(d) {
    return d !== null;
  });

  return result;

};

