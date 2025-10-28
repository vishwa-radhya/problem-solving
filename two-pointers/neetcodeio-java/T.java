import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class T{
    public boolean isPalindrome(String s) {
        s=s.trim().toLowerCase();
        if(s.length() == 0) return true;
        char[] arr = s.toCharArray();
        int left =0,right = s.length()-1;
        while(left<=right){
            while(left<=right && !checkForIsPalindrome(arr[left])) left++;
            while(left<=right && !checkForIsPalindrome(arr[right])) right--;
            if(left > right || right < left) break;
            if(arr[left] != arr[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    static boolean checkForIsPalindrome(char c){
        return (c>='a' && c<='z') || (c>='A' && c<='Z') || (c>='0' && c<='9');
    }
    public int[] twoSum(int[] numbers, int target) {
        int left=0;
        int right=numbers.length-1;
        while(left<right){
            int sum =numbers[left]+numbers[right];
            if(sum == target) {
                return new int[]{left+1,right+1};
            }
            else if(sum<target) {
                left++;
            }
            else {
                right--;
            }
        }
        return new int[]{};
    }
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> list = new ArrayList<>();
        for(int i=0;i<nums.length-2;i++){
            if(i>0 && nums[i]==nums[i-1]) continue;
            twoSumForThreeSum(i, nums, list);
        }
        return list;
    }
    static void twoSumForThreeSum(int x,int[] nums,List<List<Integer>> list){
        int i=x+1,j=nums.length-1;
        while(i<j){
            int sum = nums[i]+nums[j]+nums[x];
            if(sum<0){
                i++;
            }else if(sum>0){
                j--;
            }else{
                // List<Integer> newEntry = new ArrayList<>();
                // newEntry.add(nums[x]);
                // newEntry.add(nums[i]);
                // newEntry.add(nums[j]);
                list.add(Arrays.asList(nums[i],nums[j],nums[x]));
                i++;
                j--;
                while(i<j && nums[i]==nums[i-1]) i++;
                while(i<j && nums[j]==nums[j+1]) j--;
            }
        }
    }
    public int maxArea(int[] height) {
        int i=0,j=height.length-1,maxArea=0;
        while(i<j){
            int area = (j-i)*Math.min(height[i],height[j]);
            maxArea = area > maxArea ? area : maxArea;
            if(height[i]>height[j]) j--;
            else i++;
        }
        return maxArea;
    }
    public static void main(String[] args) {
        T o = new T();
    }
}