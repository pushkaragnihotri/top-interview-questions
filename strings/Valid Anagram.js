// Given two strings s and t , write a function to determine if t is an anagram of s.

Example: Input: (s = 'anagram'), (t = 'nagaram')
Output: true

Example: Input: (s = 'rat'), (t = 'car')
Output: false

// Note: You may assume the string contains only lowercase alphabets.

// Follow up: What if the inputs contain unicode characters? How would you adapt your solution to such case?

/****************************** Solution ******************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
	return s.split('').sort().join() === t.split('').sort().join()
}
