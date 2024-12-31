function partitionString(s: string) {

	// go through string, the moment you see a duplicate in there, stop, add duplicate to 
	
	let substrings: string[] = []

	let substring: string = ""

	for (let i = 0; i < s.length; i++) {
		const char = s[i]
		console.log("new char", char)

		if (substring.includes(char)) {
			console.log("curr substring", substring)
			substrings.push(substring)
			substring = ""
			substring += char
			continue
		}

		substring += char

	}

	if (substring.length > 0) {
		substrings.push(substring)
	}
	console.log(substrings.length)

};

// abab => a ba b | ab a b | a b ab

partitionString("abacaba")
