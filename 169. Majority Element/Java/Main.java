class Solution {

    public int majorityElement(int[] nums) {
        int count = 0;
        int candidate = nums[0];

        for (int item : nums) {
            if (count == 0) {
                candidate = item;
            }
            count += (item == candidate) ? 1 : -1;
        }

        return candidate;
    }
}

public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] arr1 = { 3, 2, 3 };
        System.out.print("[3,2,3] = ");
        System.out.println(sol.majorityElement(arr1)); // Output: 3

        int[] arr2 = { 2, 2, 1, 1, 1, 2, 2 };
        System.out.print("[2,2,1,1,1,2,2] = ");
        System.out.println(sol.majorityElement(arr2)); // Output: 2
    }
}