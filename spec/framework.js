isTruthy = function(test_name, statement) {
  if (statement) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};

include = function(test_name, includedObject, inclusiveObject) {
  if (inclusiveObject.includes(includedObject)) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};

isEqual = function(test_name, statement1, statement2) {
  if (statement1 === statement2) {
    testPassing(test_name);
  } else {
    testFailing(test_name);
  }
};

var testPassing = function(test_name) {
  console.log(' '.repeat(indentLevel) + 'PASSING TEST: "' + test_name + '"');
};

var testFailing = function(test_name) {
  console.log(' '.repeat(indentLevel) + 'FAILING TEST: "' + test_name + '"');
};

var indentLevel = 0;

describe = function(objectOfTest) {
  console.log(' '.repeat(indentLevel) + objectOfTest);
  indentLevel += 2;
};

endDescribe = function() {
  indentLevel -= 2;
  console.log();
};