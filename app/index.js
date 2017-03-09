require.ensure([], function(require) {
  var foo = require("moment");
  console.log(foo);
}, "custom-chunk-name");