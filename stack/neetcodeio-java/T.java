
import java.util.*;
public class T {
    public boolean isValid(String s) {
        Map<Character,Character> map = new HashMap<>();
        map.put('}', '{');
        map.put(']', '[');
        map.put(')', '(');
        List<Character> list = new ArrayList<>();
        char[] arr = s.toCharArray();
        for(int i=0;i<arr.length;i++){
            if(arr[i] == '{' || arr[i] == '(' || arr[i]=='[') list.add(arr[i]);
            else{
                if(list.size()<=0) return false;
                if(list.remove(list.size()-1) != map.get(arr[i])) return false;
            }
        }
        return list.size() <= 0;
    }
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for(int i=0;i<tokens.length;i++){
            String token = tokens[i];
            if(token=="+" || token=="-" || token=="*" || token == "/"){
                int f = stack.pop();
                if(stack.size()>0){
                    
                }
                int s = stack.pop();
                if(token=="+") stack.push(f+s);
                else if(token=="-") stack.push(f-s);
                else if(token=="*") stack.push(f*s);
                else if(token=="/") stack.push(f/s);
            }else{
                stack.push(Integer.parseInt(token));
            }
        }
        return stack.pop();
    }
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        backtrackForGenerateParnthesis(res, new StringBuilder(), 0, 0, n);
        return res;
    }
    static void backtrackForGenerateParnthesis(List<String> res,StringBuilder current,int open,int close,int n){
        if(open==n && close==n){    
            res.add(current.toString());
            return;
        }
        if(open<n){
            current.append("(");
            backtrackForGenerateParnthesis(res, current, open+1, close, n);
            current.deleteCharAt(current.length()-1);
        }
        if(close < n){
            current.append(")");
            backtrackForGenerateParnthesis(res, current, open, close+1, n);
            current.deleteCharAt(current.length()-1);
        }
    }
    public int[] dailyTemperatures(int[] temperatures) {
        int[] res = new int[temperatures.length];
        Stack<Integer> stack = new Stack<>();
        for(int i=0;i<temperatures.length;i++){
            while(stack.size()>0 && temperatures[i]>temperatures[stack.get(stack.size()-1)]){
                int index = stack.pop();
                res[index] = i-index;
            }
            stack.push(i);
        }   
        return res;
    }

    public static void main(String[] args) {
        T o = new T();
        System.out.println(o.evalRPN(new String[]{"2","1","+","3","*"}));
    }
}
class MinStack {

    List<Integer> stack;
    List<Integer> minStack;

    public MinStack() {
        stack = new ArrayList<>();
        minStack = new ArrayList<>();
    }
    
    public void push(int val) {
        if(minStack.size() == 0 || val<=minStack.get(minStack.size()-1)){
            minStack.add(val);
        }
        stack.add(val);
    }
    
    public void pop() {
        int val = stack.remove(stack.size()-1);
        if(val == minStack.get(minStack.size()-1)){
            minStack.remove(minStack.size()-1);
        }
    }
    
    public int top() {
        return stack.get(stack.size()-1);
    }
    
    public int getMin() {
        return minStack.get(minStack.size()-1);
    }
}