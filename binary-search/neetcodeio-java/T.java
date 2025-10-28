import java.util.*;

public class T {
    public int findMin(int[] nums) {
        int res=nums[0];
        for(int i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                res=nums[i+1];
                break;
            }
        }
        return res;
    }
    public int search(int[] nums, int target) {
        int i=0,j=nums.length-1;
        while(i<=j){
            int m = (i+j)/2;
            if(nums[m]==target) return m;
            else if(nums[i]<=nums[m]){
                if(nums[i]<=target && target<=nums[m]){
                    j=m-1;
                }else{
                    i=m+1;
                }
            }
            else if(nums[j]>=nums[m]){
                if(nums[m]<=target && target<=nums[j]){
                    i=m+1;
                }else{
                    j=m-1;
                }
            }
        }
        return -1;
    }
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] merged = new int[nums1.length+nums2.length];
        int i=0,j=0,k=0;
        while(i<=nums1.length-1 && j<=nums2.length-1){
            if(nums1[i]<=nums2[j]){
                merged[k++]=nums1[i];
                i++;
            }else{
                merged[k++]=nums2[j];
                j++;
            }
        }
        while(i<=nums1.length-1){
            merged[k++]=nums1[i];
            i++;
        }
        while(j<=nums2.length-1){
            merged[k++]=nums2[j];
            j++;
        }
        double val;
        if(merged.length%2!=0){
            val = merged[merged.length/2];
        }else{
            val = (merged[(merged.length/2)-1]+merged[merged.length/2])/2.0;
        }
        System.out.println(val+Arrays.toString(merged));
        return val;
    }
    public int minEatingSpeed(int[] piles, int h) {
        int l =1,r=Arrays.stream(piles).max().getAsInt();
        int res=r;
        while(l<=r){
            int k=(l+r)/2;
            int hours=0;
            for(int p:piles){
                hours+=Math.ceil((double)p/k);
            }
            if(hours<=h){
                res=Math.min(res,k);
                r=k-1;
            }else{
                l=k+1;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        // findMedianSortedArrays(new int[]{1,3},new int[]{2});
        // findMedianSortedArrays(new int[]{1,2},new int[]{3,4});
    }
}
