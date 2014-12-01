fortranformat
=============

## What

Parses

`G24  21462977.211 8 112788783.034 8        49.600    21462985.609 7  87887388.309 7        43.100    21462985.238 8  87887398.316 8        50.000    21462984.551 9  84225432.544 9        55.900`
  
with

`A1,I2.2,12(F14.3,I1,I1)`
  
and generates

`['G', 24, 21462977.211, null, 8, 112788783.034, null, 8, 49.600, null, null, 21462985.609, null, 7, 87887388.309, null, 7, 43.100, null, null, 21462985.238, null, 8,  87887398.316, null, 8, 50.000, null, null, 21462984.551, null, 9, 84225432.544, null, 9, 55.900, null, null]`

## How

```javascript
var fixedWidth = require( 'fortranformat' );
var result = fixedWidth( line, format );
```

## License

[ISC](LICENSE)
