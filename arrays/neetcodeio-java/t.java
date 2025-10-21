import java.util.*;
public class t {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(!set.contains(nums[i])){
                set.add(nums[i]);
            }else{
                return true;
            }
        }
        return false;
    }
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        int hash[]=new int[26];
        int len = s.length();
        for(int i=0;i<len;i++){
            hash[s.charAt(i)-'a']++;
            hash[t.charAt(i)-'a']--;
        }
    for(int i=0;i<26;i++){
        if(hash[i]!=0){
            return false;
        }
    }
       return true;
    }
    public int[] twoSum(int[] nums, int target) {
        // for(int i=0;i<nums.length;i++){
        //     for(int j=i+1;j<nums.length;j++){
        //         if(nums[i]+nums[j]==target){
        //             return new int[] {i,j};
        //         }
        //     }
        // }
        // return null;
        HashMap<Integer,Integer> hm = new HashMap<>();
        for(int i=0;i<nums.length;i++){
            hm.put(nums[i],i);
        }
        for(int i=0;i<nums.length;i++){
            int rem = target - nums[i];
            Integer val = hm.get(rem);
            if(val!=null && val!=i){
                return new int[]{i,val};
            }
        }
        return new int[]{};
    }
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> list = new ArrayList<>();
        if(strs==null || strs.length==0){
            return list;
        }
        if(strs.length == 1){
            list.add(Arrays.asList(strs));
            return list;
        }
        Map<String,Integer> map = new HashMap<>();
        int k=0;
        for(int i=0;i<strs.length;i++){
            String val = computeForGroupAnagrams(strs[i]);
            if(map.containsKey(val)){
                list.get(map.get(val)).add(strs[i]);
            }else{
                List<String> newGroup = new ArrayList<>();
                newGroup.add(strs[i]);
                list.add(newGroup);
                map.put(val,k);
                k++;
            }
        }
        return list;
    }
    static String computeForGroupAnagrams(String s){
        char[] c = s.toCharArray();
        Arrays.sort(c);
        return new String(c);
    }
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<nums.length;i++){
            map.put(nums[i],map.getOrDefault(nums[i],0)+1);
        }
        int arr[]=new int[k];
        int j=0;
        List<Map.Entry<Integer,Integer>> sortedEntries = new ArrayList<>(map.entrySet());
        sortedEntries.sort(Map.Entry.comparingByValue());
        for(int i=sortedEntries.size()-1;i>sortedEntries.size()-1-k;i--){
            arr[j++]=sortedEntries.get(i).getKey();
        }
        return arr;
    }
    public int[] productExceptSelf(int[] nums) {
        int length = nums.length;
        int prefix[] = new int[length];
        int suffix[] = new int[length];
        int output[]=new int[length];
        prefix[0]=1;
        for(int i=1;i<length;i++){
            prefix[i]=prefix[i-1]*nums[i-1];
        }
        suffix[length-1]=1;
        for(int i=length-2;i>=0;i--){
            suffix[i]=suffix[i+1]*nums[i+1];
        }
        for(int i=0;i<length;i++){
            output[i]=prefix[i]*suffix[i];
        }
        return output;
    }
    public boolean isValidSudoku(char[][] board) {
        Set<Character> set = new HashSet<>();
        // check rows
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                if(board[i][j]=='.') continue;
                if(!set.contains(board[i][j])){
                    set.add(board[i][j]);
                }else{
                    return false;
                }
            }
            set.clear(); 
        }

        // check columns
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                if(board[j][i]=='.') continue;
                if(!set.contains(board[j][i])){
                    set.add(board[j][i]);
                }else{
                    return false;
                }
            }
            set.clear(); 
        }

        // check boxes
        int[][] indexArray = {{0,1,2},{3,4,5},{6,7,8}};
        for(int i=0;i<indexArray.length;i++){
            int[] curr = indexArray[i];
            for(int[] map : indexArray){
                for(int j : curr){
                    for(int k : map){
                        if(board[j][k]=='.') continue;
                        if(!set.contains(board[j][k])){
                            set.add(board[j][k]);
                        }else{
                            return false;
                        }
                    }
                }
                set.clear(); 
            }
        }

        return true;
    }
    public static int longestConsecutive(int[] nums) {
        if(nums.length == 0) return 0;
        Set<Integer> set = new HashSet<>();
        for(int n:nums) set.add(n);
        int setArr[] = new int[set.size()];
        int k=0;
        for(Integer n:set){
            setArr[k++]=n;
        }
        Arrays.sort(setArr);
        int max=1;
        int curr=1;
        for(int i=0;i<set.size()-1;i++){
            if(setArr[i]+1==setArr[i+1]){
                curr++;
            }else{
                max = Math.max(max,curr);
                curr=1;
            }
        }
        max = Math.max(curr,max);
        return max;
    }
    public static void main(String[] args) {
        longestConsecutive(new int[]{1,2,3,2,1,3,4});
    }
}
