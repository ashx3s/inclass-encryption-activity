# AES Encryption Activity

## Steps

1. Project Initialization (npm)
2. Encryption Functionality
   - logic that will take text and encrypt it using a key
   - logic that will take the encrypted text and the same key and decrypt it
3. test functionality: try to encrypt and decrypt text

## Technical Scope

_ie: "the text and key will be created in the code. user input is handled later"_

-use aes_128_cbc to endcrypt the plain with the key

-Use the same algorithm and key to decrypt the ciphertext from the previous step. Then compare the decrypted plaintext with the original plaintext to verify that they match.

## Key Concepts & Code to Review

_ie: what is Buffer.from()_

function aesDecrypt(encryptedMessage, secretKey, ivHex) what is ivHex？
const { encryptedMessage, iv } = aesEncrypt(textToEncrypt, secretKey); what is iv. -- I guess it's An ID for the encryption algorithm. maybe it refers to aes_128_cbc
