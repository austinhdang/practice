/**
 * Problem:
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Example 1:
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Constraints:
 * 1 <= n <= 45
 * 
 * @param {number} n
 * @return {number}
 */

/* Solution 1: Recursion with Memoization
 * Time Complexity: O(n). Size of recursion tree can go up to n.
 * Space Complexity: O(n). Depth of recursion tree can go up to n.
 */
var climbStairsMemo = function(n) {
  const memo = [];
  return climb(0, n, memo);

  function climb(i, n, memo) {
    if (i > n) return 0;
    if (i === n) return 1;
    if (memo[i] > 0) return memo[i];
    memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo);
    return memo[i];
  }
};

/* Solution 2: Dynamic Programming
 * Time Complexity: O(n). Single loop up to n.
 * Space Complexity: O(n). dp array of size n used.
 */
var climbStairsDP = function(n) {
  if (n === 1) return 1;

  dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
