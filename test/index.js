var test = require('tape');

var fixedWidth = require('../index');

var line1 = '2014/04/18 03:49:00.0    E11    322.9      6.6     46.50     0.0000',
    format1 = 'A23,1X,A4,1X,F8.1,1X,F8.1,1X,F9.2,1X,F10.4';

test('line1', function (t) {

  t.plan(1);

  var result1 = fixedWidth(line1, format1);

  var expected1 = ['2014/04/18 03:49:00.0  ', ' E11', 322.9, 6.6, 46.50, 0.0000];

  t.deepEqual(result1, expected1);

});

var line2 = 'TEST: ABCD 78 1.23456.7891 EFGH 78 2.23457.7891 IJKL 78 3.23458.7891 END X',
    format2 = 'A5,3(1X,A4,1X,2I1,1X,2F6.4),1X1,A3,1X,A';

test('line1', function (t) {

  t.plan(1);

  var result2 = fixedWidth(line2, format2);

  var expected2 = ['TEST:', 'ABCD', 7, 8, 1.2345, 6.7891, 'EFGH', 7, 8, 2.2345, 7.7891, 'IJKL', 7, 8, 3.2345, 8.7891, 'END', 'X'];

  t.deepEqual(result2, expected2);

});
