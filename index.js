const template = require('@babel/template').default;
const generate = require('@babel/generator').default;
const type = require('@babel/types');

const sourceTemplate = template(`
  class CLASS_NAME {
    constructor() {

    }
  }
`);

const ast = sourceTemplate({
  CLASS_NAME: type.identifier('Region'),
});

console.log(generate(ast).code);
