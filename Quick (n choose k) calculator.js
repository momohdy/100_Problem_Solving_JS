// You may be familiar with the concept of combinations:
// for example, if you take 5 cards from a 52 cards deck as you would playing poker,
//  you can have a certain number (2,598,960, would you say?) of different combinations.

// In mathematics the number of k combinations you can have taking from a set of n elements is called the binomial coefficient of n and k, more popularly called n choose k.

// The formula to compute it is relatively simple: n choose k==n!/(k!*(n-k)!), where ! of course denotes the factorial operator.

// You are now to create a choose function that computes the binomial coefficient, like this:

// choose(1,1)==1
// choose(5,4)==5
// choose(10,5)==252
// choose(10,20)==0
// choose(52,5)==2598960
// Be warned: a certain degree of optimization is expected, both to deal with larger numbers precision (and their rounding errors in languages like JS) and computing time.

function factorialize(num) {
  if (num == 0) return 1;
  if (num == 1) return 1;
  return num * factorialize(num - 1);
}

function choose(n, k) {
  newN = factorialize(n);
  newK = factorialize(k);
  if (n - k < 0) return 0;
  if (n - k == 0) return 1;
  NewN_K = factorialize(n - k);

  return Math.round(newN / (newK * NewN_K));
}

console.log(choose(100, 80));

// Code runs correct except 4 Cases 
// Expected: 2573031125, instead got: NaN
// Expected: 166167000, instead got: NaN
// Expected: 55098996177225, instead got: NaN
// Expected: 962822846700, instead got: NaN