function frequencyCounter(word) {

  let freq = {};

  for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (freq[char]) {
         freq[char]++;
      } else {
         freq[char] = 1;
      }
  }
  console.log(freq);
};

frequencyCounter("apple");

// Do not edit this line;
module.exports = frequencyCounter;