//子数组异或查询

/*
题目描述：
有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。
并返回一个包含给定查询 queries 所有结果的数组。
*/


/*
实例：
输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
输出：[2,7,14,8]
解释：
数组中元素的二进制表示形式是：
1 = 0001
3 = 0011
4 = 0100
8 = 1000
查询的 XOR 值为：
    [0,1] = 1 xor 3 = 2
    [1,2] = 3 xor 4 = 7
    [0,3] = 1 xor 3 xor 4 xor 8 = 14
    [3,3] = 8
*/


/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 * 异或（xor）是一个数学运算符。它应用于逻辑运算。异或的数学符号为“⊕”，计算机符号为“xor”。其运算法则为：
 a⊕b = (¬a ∧ b) ∨ (a ∧¬b);异或：^
 */

/**
* 解题思路
* 这又是一道非常直白的题目。数据提供了一个 queries 数组，其中每一个 query 其实就是在给定的 arr 数组中划定一个范围，
 * 然后我们需要做的计算就是把这个范围内的所有数字进行异或（xor）运算，最终得到这个 query 的结果。
*/
export const xorQueries = function(arr, queries) {
    let newArr=[]
    for(let i=0; i<queries.length;i++){
        let val
        for(let j=queries[i][0]; j<=queries[i][1];j++){
            val ^= arr[j]
        }

        newArr.push(val)
    }

    return newArr
};

