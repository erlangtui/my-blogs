package main

import (
	"fmt"
	"strconv"
)

// 判断一个数字是否包含重复的数字
func hasDuplicateDigits(num int) bool {
	str := strconv.Itoa(num)
	digits := make(map[rune]bool)
	for _, digit := range str {
		if digits[digit] {
			return true
		}
		digits[digit] = true
	}
	return false
}

// 检查数字是否符合比例 1:2:3 的条件
func checkRatio(num1, num2, num3 int) bool {
	// 判断数字之间是否符合比例 1:2:3
	if num2 == 2*num1 && num3 == 3*num1 {
		// 检查数字中是否没有重复的数字
		if !hasDuplicateDigits(num1) && !hasDuplicateDigits(num2) && !hasDuplicateDigits(num3) {
			return true
		}
	}
	return false
}

// 将数字集合分割成三个三位数
func splitIntoThreeNumbers(digits []int) (int, int, int) {
	// 确保生成的数字不包含重复数字
	num1 := digits[0]*100 + digits[1]*10 + digits[2]
	num2 := digits[3]*100 + digits[4]*10 + digits[5]
	num3 := digits[6]*100 + digits[7]*10 + digits[8]
	return num1, num2, num3
}

// 寻找符合条件的组合
func findValidCombination() (int, int, int) {
	// 所有数字的排列
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	// 对数字进行全排列
	var permutations [][]int

	// 获取全排列
	var generatePermutations func([]int, int)
	generatePermutations = func(arr []int, index int) {
		if index == len(arr) {
			// 生成了一个排列，检查是否符合要求
			num1, num2, num3 := splitIntoThreeNumbers(arr)
			if checkRatio(num1, num2, num3) {
				permutations = append(permutations, append([]int{}, arr...))
			}
			return
		}
		for i := index; i < len(arr); i++ {
			// 交换
			arr[index], arr[i] = arr[i], arr[index]
			generatePermutations(arr, index+1)
			// 回溯
			arr[index], arr[i] = arr[i], arr[index]
		}
	}

	// 生成所有的排列
	generatePermutations(numbers, 0)

	// 返回找到的第一个符合条件的组合
	if len(permutations) > 0 {
		arr := permutations[0]
		num1, num2, num3 := splitIntoThreeNumbers(arr)
		return num1, num2, num3
	}
	return 0, 0, 0
}

func main() {
	num1, num2, num3 := findValidCombination()

	if num1 != 0 {
		fmt.Printf("Found valid numbers: %d, %d, %d\n", num1, num2, num3)
	} else {
		fmt.Println("No valid combination found.")
	}
}