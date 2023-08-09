var majorityElement = function(nums) {
    let count = 0;
    let candidate=null;
    for(item of nums){
        if(count === 0){
            candidate = item;
        }
        count+= item === candidate?1:-1;
        console.log("Item", item);
    }
    return candidate;
};

console.log("[3,2,3] = ", majorityElement([3,2,3]));

console.log("[2,2,1,1,1,2,2] = ", majorityElement([2,2,1,1,1,2,2]));