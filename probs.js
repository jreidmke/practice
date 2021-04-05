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

fizzBuzz(15)



/**Come Back Not Done Trouble Hard Incomplete */

//Reverse a Linked List
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