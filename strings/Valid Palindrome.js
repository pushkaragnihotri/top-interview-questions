// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

Example: Input: 'A man, a plan, a canal: Panama'
Output: true

Example: Input: 'race a car'
Output: false

/****************************** Solution ******************************/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
	s = s.replace(/\W/g, '').toLowerCase()
	return s.split('').reverse().join('') === s
}
