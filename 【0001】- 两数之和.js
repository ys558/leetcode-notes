/**
	输入：nums = [2,7,11,15], target = 9
	输出：[0,1]
	解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/two-sum
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// ! 原理：我们遍历到数字 a 时，用 target 减去a，就会得到b，若b存在于哈希表中，我们就可以直接返回结果了。若 b不存在，那么我们需要将a存入哈希表，好让后续遍历的数字使用。

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++){
			
			if(map.has(target - nums[i])){
				return [map.get(target - nums[i]), i];
			}else{
					// 1. 检查map里是否有该数，没有则将其set进map里，该数字为健，位置为值
					map.set(nums[i], i);
        }
    }
    return [];
};


twoSum([2,7,11,15], 9)
console.log(twoSum([2,7,11,15], 9)) // [ 0，1 ]
