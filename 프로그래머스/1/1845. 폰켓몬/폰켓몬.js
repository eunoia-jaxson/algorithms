function solution(nums) {
    const count = nums.length / 2;
    const set = new Set(nums);
    return set.size <= count ? set.size : count;
}