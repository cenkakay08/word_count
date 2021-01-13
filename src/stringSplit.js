function splitter(str, id) {
  var counts = {};
  var keys = [];
  var wordsLength = 0;

  const allwords = str.replace(/(\n)/gm, "");
  const words = allwords.split(/\W+/);

  //Check every word and their number
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    if (word.length > 1) {
      if (counts[word] === undefined) {
        counts[word] = 1;
        keys.push(word);
      } else {
        counts[word] = counts[word] + 1;
      }
      wordsLength++;
    }
  }

  //Sort keys
  keys.sort(compare);

  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }
  var all = [];

  //Create whole string for words and counts
  for (var k = 0; k < keys.length; k++) {
    var key = keys[k];
    all.push([key, counts[key]]);
  }

  if (id === "info") {
    return (
      "Length of all words = " +
      wordsLength +
      "\nLength of unique words = " +
      keys.length
    );
  } else {
    return all;
  }
}

export default splitter;
