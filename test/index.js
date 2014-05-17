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

test('line2', function (t) {

  t.plan(1);

  var result2 = fixedWidth(line2, format2);

  var expected2 = ['TEST:', 'ABCD', 7, 8, 1.2345, 6.7891, 'EFGH', 7, 8, 2.2345, 7.7891, 'IJKL', 7, 8, 3.2345, 8.7891, 'END', 'X'];

  t.deepEqual(result2, expected2);

});

var line3 = 'G24  21462977.211 8 112788783.034 8        49.600    21462985.609 7  87887388.309 7        43.100    21462985.238 8  87887398.316 8        50.000    21462984.551 9  84225432.544 9        55.900',
    format3 = 'A1,I2.2,12(F14.3,I1,I1)';

test('line3', function (t) {

  t.plan(1);

  var result3 = fixedWidth(line3, format3);

  var expected3 = ['G', 24, 21462977.211, null, 8, 112788783.034, null, 8, 49.600, null, null, 21462985.609, null, 7, 87887388.309, null, 7, 43.100, null, null, 21462985.238, null, 8,  87887398.316, null, 8, 50.000, null, null, 21462984.551, null, 9, 84225432.544, null, 9, 55.900, null, null];

  t.deepEqual(result3, expected3);

});
