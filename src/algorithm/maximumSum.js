/**
 * 给你一个整数数组，返回它的某个 非空 子数组（连续元素）在执行一次可选的删除操作后，所能得到的最大元素总和。

换句话说，你可以从原数组中选出一个子数组，并可以决定要不要从中删除一个元素（只能删一次哦），（删除后）子数组中至少应当有一个元素
 ，然后该子数组（剩下）的元素总和是所有子数组之中最大的。

注意，删除一个元素后，子数组 不能为空。

请看示例：

示例 1：

输入：arr = [1,-2,0,3]
输出：4
解释：我们可以选出 [1, -2, 0, 3]，然后删掉 -2，这样得到 [1, 0, 3]，和最大。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
export const maximumSum = function(arr) {
    //删的最大连续子数组和，只有一个元素时不能删唯一的元素，所以把初始值置为最小值-1
    let del = -10001
    //不删的最大连续子数组和
    let noDel = arr[0]
    //初始化ans
    let ans = Math.max(-Infinity,noDel,del)
    for(let i = 1;i<arr.length;i++){
        del = Math.max(del+arr[i],noDel)
        noDel = Math.max(noDel+arr[i],arr[i])
        ans = Math.max(ans,noDel,del)
    }
    return ans
};
