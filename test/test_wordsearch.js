const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "O", "B", "O", "L", "L", "E", "H"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "HELLOBOB"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
        ["A", "W", "Y", "F", "Q", "U", "A", "L"],
        ["S", "E", "B", "N", "F", "E", "L", "D"],
        ["Y", "F", "O", "F", "Q", "U", "A", "L"],
        ["H", "M", "B", "T", "E", "V", "R", "G"],
        ["W", "H", "O", "S", "Y", "E", "R", "L"],
        ["B", "F", "L", "E", "N", "E", "Y", "B"],
        ["U", "B", "L", "W", "A", "P", "A", "I"],
        ["O", "D", "E", "A", "K", "U", "A", "S"],
        ["E", "Z", "H", "F", "Q", "U", "A", "L"],
      ],
      "HELLOBOBY"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
        ["A", "W", "C", "F", "Q", "S", "A", "L"],
        ["X", "E", "A", "N", "O", "E", "M", "Q"],
        ["Y", "F", "C", "F", "Q", "I", "A", "L"],
        ["H", "M", "J", "T", "E", "N", "R", "G"],
        ["W", "H", "C", "S", "Y", "F", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "L", "A", "I"],
        ["O", "D", "C", "A", "K", "D", "A", "S"],
        ["E", "Z", "K", "F", "Q", "S", "A", "L"],
      ],
      "SEINFELDS"
    )

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([], 'FRANK')

    assert.isFalse(result);
  });
});
