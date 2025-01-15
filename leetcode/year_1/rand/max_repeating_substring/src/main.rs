fn max_repeating(sequence: String, word: String) -> i32 {

    let mut max = 0;

    let mut tmp = word.clone();

    let seq_len = sequence.len();

    let mut tmp_len = tmp.len();

    

    while tmp_len <= seq_len && sequence.contains(&tmp) {
        max += 1;
        tmp.push_str(&word);
        tmp_len = tmp.len()
    }

    return max

}


fn main() {
    max_repeating()
}
