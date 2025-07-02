#include <stdio.h>
#include <string.h>

bool inRange(char c) {



}

bool isPalindrome(char* s) {

  size_t len = strlen(s);

  char b[len + 1];

  int writer = 0;

  for (char *c = s; *c != '\0'; ++c) {

    if (inRange(*c)) {
      b[writer] = *c;
      ++writer;
    }
  }

  size_t new_len = strlen(b);

  for (int i = 0; i < new_len/2; ++i) {

    if (b[new_len - 1 - i] != b[i]) {
      return false;
    }

  }

  return true;

}

int main() {

}
