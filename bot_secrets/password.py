from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import os
import hashlib

password = input()

hashed_password = hashlib.sha256(b'{password}').digest()

print("this is the hashed_password:", hashed_password)

