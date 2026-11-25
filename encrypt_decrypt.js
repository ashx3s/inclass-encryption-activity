// Generate a key

// Plain text information to demo

const crypto = require("crypto");

// Function to encrypt a message using AES-128-CBC
function aesEncrypt(text, secretKey) {
  // Your implementation here
}

// Function to decrypt a message using AES-128-CBC
function aesDecrypt(encryptedMessage, secretKey, ivHex) {
  // Your implementation here
}

// Test your functions
const secretKey = Buffer.from("mysecretkey12345"); // 16-byte key (128-bit)
const textToEncrypt = "This is a secret message!";

// Encrypt the message
const { encryptedMessage, iv } = aesEncrypt(textToEncrypt, secretKey);
console.log("Encrypted Message:", encryptedMessage);
console.log("IV:", iv);

// Decrypt the message
const decryptedMessage = aesDecrypt(encryptedMessage, secretKey, iv);
console.log("Decrypted Message:", decryptedMessage);
