import java.util.HashSet;
import java.util.Set;

public class T{
    public static int lengthOfLongestSubstring(String s) {
        int maxLen=0,left=0;
        Set<Character> set = new HashSet<>();
        char[] arr = s.toCharArray();
        for(int right=0;right<arr.length;right++){
            while(set.contains(arr[right])){
                set.remove(arr[left]);
                left++;
            }
            set.add(arr[right]);
            maxLen = Math.max(maxLen,(right-left)+1);
        }
        return maxLen;
    }
    public static int characterReplacement(String s, int k) {
        int maxLen=0,left=0;
        Set<Character> set = new HashSet<>();
        char[] arr = s.toCharArray();
        for(int right=0;right<arr.length;right++){
            
        }
    }
    public static void main(String[] args) {
        // lengthOfLongestSubstring(new String("abcabcbb"));
        characterReplacement(new String("ABAB"), 2);
        characterReplacement(new String("AABABBA"), 1);
    }
}