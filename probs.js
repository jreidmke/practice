//4/4/21

//Two versions of running sum. I: [1, 1, 1, 1, 1], O: [1, 2, 3, 4, 5]. I: [1, 3, 5, 7, 9], O: [1, 4, 8, 12, 16];

function runningSum(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        if(i===0) {
            arr.push(nums[i])
        } else {
            arr.push(nums[i] + arr[i - 1]);
        };
    };
    return arr;
}

function runningSum(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]
    };
    return nums
};

//Defang IP address. I: "1.1.1.1" O: "1[.]1[.]1[.]1".

function defangIPaddr(address, str="") {
    if(!address.length) return str;
    str += address[0] === "." ? "[.]" : address[0];
    return defangIPaddr(address.slice(1), str);
};

function defangIPaddr(address) {
    return address.replaceAll(".", "[.]");
};

//Maximum Wealth. Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

function maximumWealth(accounts) {
    let men = {};
    for(let [i, money] of accounts.entries()) {
        men[i] = money.reduce((a, b) => a + b);
    };
    return Object.values(men).reduce((a, b) => Math.max(a, b));
};

function maximumWealth(accounts) {
    let max = Number.NEGATIVE_INFINITY;
    for(let a of accounts) {
        let total = a.reduce((a, b) => a + b);
        if(max < total) max = total;
    };
    return max;
};

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

function kidsWithCandies(candies, extraCandies) {
    return candies.map(c => c + extraCandies >= Math.max(...candies) ? true : false)
};

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

function shuffle(nums, n) {
    let arr = [];
    for(let i = 0; i < nums.length / 2; i++) {
        arr.push(nums.slice(0, n)[i]);
        arr.push(nums.slice(n)[i])
    };
    return arr;
}

function shuffle(nums, n) {
    let idx = 1;
    let len = nums.length;
    for(let num of nums.slice(n)) {
        nums.splice(idx, 0, num);
        idx += 2;
    }
    return nums.slice(0, len)
}

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

function numIdenticalPairs(nums) {
    let obj = {};
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]].push(i) : obj[nums[i]] = [i];
    };
    let arr = Object.values(obj).map(a => Math.floor(((a.length) * (a.length - 1)) / 2));
    return arr.reduce((a, b) => a + b);
};

function numIdenticalPairs(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j=i; j < nums.length; j++) {
            if(nums[i] === nums[j] && i < j) count++;
        };
    };
    return count;
};

//Max Depth of Bi Tree
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Return non-repeating number
// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
    return nums.filter(n => nums.indexOf(n) === nums.lastIndexOf(n))[0];
};

//Lol. Top post on discus: Why LeetCode accepted such stupid question?
//Remove node from linked list without head
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

//FizzBuzz. It's a class. Recurrsive. 
function fizzBuzz(n, arr = []) {
    if(!n) return arr.reverse();
    if(n % 5 === 0 && n % 3 === 0) {
        arr.push("FizzBuzz");  
    } else if(n % 3 === 0) {
        arr.push("Fizz")
    } else if(n % 5=== 0) {
        arr.push("Buzz")
    } else {
        arr.push(n)
    };
    return fizzBuzz(n-1, arr);
};

var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

fizzBuzz(15)

//Find the majority element in an array with Nums length. 
//Check out the 2nd solution. It's based on this https://www.cs.utexas.edu/~moore/best-ideas/mjrty/
//And it's absolutely gorgeous

function majorityElement(nums) {
    nums.sort()
    return nums[Math.floor(nums.length / 2)]
}

function majorityElement(nums) {
    let major = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++) {
        if(!count) {
            count++;
            major=nums[i];
        } else if(major===nums[i]) {
            count++;
        } else {
            count--;
        };
    };
    return major;
}

//Lowest common ancestor

function lca(root, node1, node2) {
    if(!root) return
    if(root.val > Math.max(node1.val, node2.val)) {
       return lca(root.left, node1, node2)
    } else if(root.val < Math.min(node1.val, node2.val)) {
       return lca(root.right, node1, node2)
    } else {
        return root
    };
}


//Anagrams
//First one is bad. But lets check out charcode. Ok, charcode doesn't work for my plan but the 2nd solution is cool too. 

function anagram(s, t) {
    if(s.length != t.length) return false;
    s = s.split('').sort() 
    t = t.split('').sort();
    for(let i = 0; i < s.length; i++) {
        if(s[i] != t[i]) return false;
    };
    return true;
}

function isAnagram(s, t) {
    const obj = {};
    s.split('').map(c => obj[c] = obj[c] ? obj[c] + 1 : 1);
    t.split('').map(c => obj[c] = obj[c] ? obj[c] - 1 : -1);
    console.log(obj)
    return Object.keys(obj).every(k => obj[k] === 0);
}

//Find min in rotated array

function findMinRotated(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    let count = 0;
    while(left <= right && count < 10) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[arr.length - 1]) {
            left = mid + 1;
        } else {
            idx = mid;
            right = mid - 1;
        };
        

        count++;
    };
    return idx;
}
function findMinRotated(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let last = arr[right];
        if(arr[mid] <= last) {
            idx = mid;  
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    };
    return idx;
}
function findMinRotated(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    let left = 0;
    let right = arr.length - 1;
    let boundary_index = -1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        // if <= last element, then belongs to lower half
        if (arr[mid] <= arr[arr.length - 1]) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundary_index;
}

//Peak of mountain array mountain array
function peakOfMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    return idx;
}

function peakOfMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    return idx;
}

//Move Zeros to end of array => [0,1,0,3,12] = [1, 3, 12, 0, 0]
//This one was easy but leetcode doesn't allow .flat(), spread or any thing else that's cool so this solution works

function moveZeroes(nums) {
    var idx = 0;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[idx] = nums[i];
        nums[i] = idx === i ? nums[i] : 0;
        idx++;
      }
    }
  }

//this below works in the real world but not in leet code
  function moveZeroes(nums) {
    let count = 0
    let arr = []
    for(let i = 0; i < nums.length; i++) {
        !nums[i] ? count++ : arr.push(nums[i])
    };
    arr.push(...new Array(count).fill(0));
    return arr
};

//Palindrome
var isPalindrome = function(s) {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    s = s.replace(regex, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] != s[right]) {
            return false;
        } else {
            left++
            right--
        }
    };
    return true
};

//reverse an integer

function reverseInt(int) {
    let s = parseInt(int.toString().split('').reverse().join(''));
    if(int < 0) s = s - (s * 2)
    return s;
};

reverseInt(-123)

//longest common prefix


function longestCommonPrefix(strs, idx=0, pre=strs[0].slice(0, idx)) {
    if(strs.every(s => s.startsWith(pre))) {
        return longestCommonPrefix(strs, idx + 1)
    };
    return pre.slice(0, idx - 1);
}

longestCommonPrefix(["flower","flow","flight"])

//Convert roman Roman to intergers int

const conversions = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function romanToInt(s) {
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        conversions[s[i]] < conversions[s[i + 1]] ? sum -= conversions[s[i]] : sum += conversions[s[i]];
    };
    return sum
}


function containsDuplicate(arr, idx=0, memo={}) {
    if(idx===arr.length) return false;
    if(arr[idx] in memo) return true;
    memo[arr[idx]] = true;
    return containsDuplicate(arr, idx + 1, memo);
}

var containsDuplicate = function(nums) {
    return nums.some(x => nums.indexOf(x)!==nums.lastIndexOf(x));
};

//Find missing number from range

function missingNumber(nums) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(i !== nums[i]) return i;
    };
    return nums.length
};

//Best stairclimb solution stairs climb climbing stairs the stairs

function climbStairs(n, memo={1: 1, 2: 2}) {
    if(memo[n] !== undefined) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n]
};

function plusOne(digits, lastDigit=digits[digits.length-1]) {
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if(digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    };
    digits.unshift(1);
    return digits
}

plusOne([9])

//power of 3
function isPowerOfThree(n) {
    let base = 1;
    let power = 3;
    while(true) {
        if(base < n) {
            base *= power
        } else if(base > n) {
            return false;
        } else {
            return true;
        }
    }
}

/**Come Back Not Done Trouble Hard Incomplete */

//Reverse a Linked List => https://medium.com/outco/reversing-a-linked-list-easy-as-1-2-3-560fbffe2088
//Different than array!!!!
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = head;
    while(curr) {
        next = next.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    };
    return prev;
};

//CONVERT SORTED ARRAY TO BST => Good Article: https://medium.com/@harycane/convert-sorted-array-to-bst-35781e940ca5
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1);
};

function helper(nums, low, hi) {
    if(low > hi) {
        return null;
    };
    
    let mid = Math.floor((low + hi)  / 2);
    
    let newNode = new TreeNode(nums[mid]);
    
    newNode.left = helper(nums, low, mid - 1);
    newNode.right = helper(nums, mid + 1, hi);
    return newNode;
}

//Other version of above
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    // subtrees are BSTs as well
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};

//MAX PROFIT PROBLEM => https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
//These are tricky and I need to keep looking at them

function maxProfit(prices) {
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let curr = prices[i]
        if(prev < curr) {
            profit += curr - prev;
        };
    };
    return profit;
};

//Hmmmmm. Ternary Tree Paths => https://algo.monster/problems/dfs_with_states
function ternary_tree_paths(root) {
    let res = [];
    if (root) dfs(root, [], res);
    return res;
}

function dfs(root, path, res) {
    // exit condition, reached leaf node, append paths to results
    if (root.children.every(child => !child)) {
        path.push(root.val);
        const cur_path = path.join('->');
        res.push(cur_path);
        path.pop();
        return;
    }
    // dfs on each non-null child
    for (let child of root.children) {
        if (child) {
            path.push(root.val);
            dfs(child, path, res);
            path.pop();
        }
    }
}

//Permutations of a letter
function permutations(letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

function dfs(letters, state, used, res) {
    if(state.length===letters.length) {
        res.push(Array.from(state));
        return;
    };
    for(let i = 0; i < letters.length; i++) {
        if(used[i]) continue;
        
        state.push(letters[i]);
        used[i] = true;
        dfs(letters, state, used, res);
        state.pop();
        used[i] = false;
    }
};

//Merge Two Lists

var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return (l1 ? l1 : l2);
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

//Serialize and deserialize a binary tree

function serialize(root) {
    let res = [];
    dfsS(root, res);
    return res.join('');
}

function dfsS(node, res) {
    if(!node) {
        res.push('x');
        return
    }; 
    res.push(node.val);
    dfsS(node.left, res);
    dfsS(node.right, res);
};

function deserialize(s) {
    return dfsD(s.split(' '));
}

function dfsD(nodes) {
    let next = nodes.shift();
    if(!next || next==="x") {
        return
    } else {
        let cur = new Node(next);
        cur.left = dfsD(nodes);
        cur.right = dfsD(nodes);
        return cur;
    };
};