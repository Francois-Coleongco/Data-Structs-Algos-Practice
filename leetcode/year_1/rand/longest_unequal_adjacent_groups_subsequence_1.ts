function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const words_len = words.length;

  let longest = 0;

  let final: string[] = [];
  let tmp: string[] = [];

  let buf = 0

  let i = 0

  if (words_len == 1) {
    return words
  }

  while (i < words_len - 1) {
    if (groups[i] != groups[i + 1]) {
      // alternated here
      tmp.push(words[i])
      buf += 1
    }
    else {
      // end sub, flush buf and tmp
      console.log("pushing words[i]", words[i])
      tmp.push(words[i])

      if (buf + 1 > longest) {
        //set the tmp to final
        final = tmp
      }

      longest = Math.max(longest, buf);
      buf = 0
      tmp = []
    }
    i += 1
  }

  if (buf != 0) {

    console.log("pushing words[i]", words[i])

    tmp.push(words[i])

    console.log("longest, buf", longest, buf)

    if (buf + 1 > longest) {
      //set the tmp to final
      final = tmp
    }

    longest = Math.max(longest, buf + 1);
    buf = 0
    tmp = []
  }

  return final
}

console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]))

