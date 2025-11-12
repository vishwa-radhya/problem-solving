'''
1. Given String is Palindrome or notDescription: Determine if a given string reads the same forwards and backwards (a palindrome). You may need to consider only alphanumeric characters and ignore case, depending on the exact problem constraints (here, we'll assume a simple, case-sensitive check for the test cases).Concept: Two Pointers (start and end) or String Reversal. In Python, checking if $S == S[::-1]$ is a quick approach.Test Cases:s = "racecar"Answer: Trues = "hello"Answer: False

2. Find Common CharactersDescription: Given an array of strings (words), return an array of all characters that show up in all strings, including duplicates. For example, if a character appears 3 times in all strings but only 2 times in one, it should appear 2 times in the output.Concept: Frequency Counting and Intersection. Start with the character counts of the first string, then update the count for each character by taking the minimum frequency across all subsequent strings.Test Cases:words = ["bella", "label", "roller"]Answer: ["e", "l", "l"] (e appears once, l appears twice in all)words = ["cool", "lock", "cook"]Answer: ["c", "o"]

3. Remove characterDescription: Given a string $S$ and a character $C$, return a new string with all occurrences of $C$ removed.Concept: String Traversal/Filtering. Iterate through the string and build a new string containing only the characters not equal to $C$.Test Cases:s = "programming", char_to_remove = 'g'Answer: "prorammine"s = "banana", char_to_remove = 'a'Answer: "bnn"

4. Reverse a stringDescription: Reverse the order of characters in a string (or an array of characters, often required to be done in-place).Concept: Two Pointers (swapping characters from the ends inwards) or using built-in language features (e.g., Python's slicing [::-1]).Test Cases:s = "python"Answer: "nohtyp"s = "A man, a plan, a canal: Panama"Answer: "amanaP :lanac a ,nalp a ,nam A"

5. Remove All Adjacent Duplicates In StringDescription: Given a string $S$ consisting of lowercase letters, a duplicate removal operation consists of choosing two adjacent and identical letters, and removing them. Repeat this operation until no more adjacent duplicates can be found. Return the final string.Concept: Stack. Iterate through the string. Push the current character onto the stack if it's different from the top of the stack. If it's the same, pop the stack (removing the adjacent pair).Test Cases:s = "abbaca"Answer: "ca" ($a\mathbf{bb}aca \to a\mathbf{aa}ca \to ca$)s = "azxxzy"Answer: "ay" ($az\mathbf{xx}zy \to a\mathbf{zz}y \to ay$)

6. Uncommon Words from Two SentencesDescription: Given two sentences, $A$ and $B$, return a list of all uncommon words. A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.Concept: Frequency Map (Dictionary). Count the frequency of every word across both sentences. Then, iterate through the map and return words whose count is exactly 1.Test Cases:A = "this apple is sweet", B = "this apple is sour"Answer: ["sweet", "sour"] (Order may vary)A = "apple apple", B = "banana"Answer: ["banana"]

7. Excel Sheet Column NumberDescription: Given a string representing an Excel sheet column title (e.g., "A", "B", ..., "Z", "AA", "AB", ...), return its corresponding column number. This is essentially a base-26 system (A=1, B=2, ..., Z=26, AA=27).Concept: Base Conversion. Similar to converting a binary or decimal number, but using base 26. For a column string $C_n C_{n-1} \dots C_1$, the number is $\sum_{i=1}^{n} \text{Value}(C_i) \cdot 26^{i-1}$.Test Cases:columnTitle = "AB"Answer: 28 ($1 \times 26^1 + 2 \times 26^0 = 26 + 2 = 28$)columnTitle = "ZY"Answer: 701 ($26 \times 26^1 + 25 \times 26^0 = 676 + 25 = 701$)

8. Frequency of characters in a stringDescription: Count the occurrences of each distinct character in a string.Concept: Hash Map (Dictionary). Iterate through the string, using the character as the key and incrementing its count.Test Cases:s = "programming"Answer: {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1} (Order may vary)s = "banana"Answer: {'b': 1, 'a': 3, 'n': 2}

9. Sort string of charactersDescription: Sort the characters of a given string alphabetically.Concept: Sorting. Convert the string to a list of characters, sort the list, and join it back into a string.Test Cases:s = "cba"Answer: "abc"s = "zyxw"Answer: "wxyz"

10. Valid AnagramDescription: Determine if two strings, $S$ and $T$, are anagrams of each other (meaning $T$ is formed by rearranging the letters of $S$).Concept: Frequency Counting/Sorting. Check if the frequency map of characters for $S$ is identical to that of $T$. Alternatively, if sorted($S$) equals sorted($T$), they are anagrams.Test Cases:s = "anagram", t = "nagaram"Answer: Trues = "rat", t = "car"Answer: False

11. Convert characters of a string to opposite caseDescription: Iterate through a string and convert all uppercase letters to lowercase and all lowercase letters to uppercase.Concept: String Iteration and Case-checking functions (isupper(), islower(), upper(), lower()).Test Cases:s = "PyThOn"Answer: "pYtHoN"s = "hello WORLD"Answer: "HELLO world"

12. Count Binary SubstringsDescription: Give a binary string $S$, count the number of non-empty (contiguous) substrings that have the same number of $0$'s and $1$'s and all the $0$'s and all the $1$'s are grouped consecutively. Examples: "0011", "01", "1100".Concept: Group Counting. Instead of checking every substring, count consecutive groups of characters (e.g., "000111" has groups [3, 3]). The number of valid substrings between two adjacent groups is $\text{min}(\text{size of group 1}, \text{size of group 2})$.Test Cases:s = "00110011"Answer: 6 (Valid substrings: "0011", "01", "1100", "10", "0011", "01")s = "10101"Answer: 4 ("10", "01", "10", "01")

13. Common subsequence in two stringsDescription: Find the longest common subsequence (LCS) between two strings, $S_1$ and $S_2$. A subsequence is derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.Concept: Dynamic Programming (DP). Use a DP table where $\text{DP}[i][j]$ stores the length of the LCS of $S_1[0..i-1]$ and $S_2[0..j-1]$.Test Cases:S1 = "AGGTAB", S2 = "GXTXAYB"Answer: 4 (LCS is "GTAB")S1 = "abcde", S2 = "ace"Answer: 3 (LCS is "ace")

14. Count Unique Characters of All Substrings of a Given StringDescription: For a given string $S$, count the total number of unique characters in all of its possible substrings. The result is the sum of unique character counts for every substring.Concept: Contribution of Each Character. Instead of iterating over all substrings, calculate how many times each character contributes to the final sum. A character $S[i]$ contributes if it's unique within a substring. The calculation involves finding the indices of the previous and next occurrences of $S[i]$.Test Cases:S = "ABC"Answer: 10 (A, B, C, AB, BC, ABC. Count: $1+1+1+2+2+3 = 10$)S = "ABA"Answer: 8 (A, B, A, AB, BA, ABA. Count: $1+1+1+2+2+1 = 8$)

15. Find the DifferenceDescription: Given two strings, $S$ and $T$, where $T$ is generated by randomly shuffling $S$ and then adding one extra character at a random position. Find the character that was added to $T$.Concept: XOR or Frequency Sum/Difference.XOR: XORing all characters in $S$ and $T$ together will result in the added character, as $X \oplus X = 0$.Sum/Difference: Sum the ASCII values of all characters in $T$ and subtract the sum of all characters in $S$.Test Cases:s = "abcd", t = "abcde"Answer: 'e's = "ae", t = "aea"Answer: 'a'

16. Duplicates in the input stringDescription: Print all characters that appear more than once in the input string.Concept: Frequency Map (Dictionary). Count character frequencies, then iterate over the map and print characters where the count is $> 1$.Test Cases:s = "programming"Answer: r, g, ms = "hello world"Answer: l, o (Ignoring space)

17. Count vowels, consonants, digits, and special characters in a stringDescription: Categorize and count characters in a string into four groups: vowels (a, e, i, o, u), consonants, digits (0-9), and special characters (anything else).Concept: String Traversal and Conditional Checks. Use functions like isalpha(), isdigit(), and an explicit set of vowels for checking.Test Cases:s = "Programming 1.0!"Answer: Vowels: 3 (o, a, i), Consonants: 8 (P, r, g, r, m, m, n, g), Digits: 2 (1, 0), Special/Space: 4 ( , ., !)s = "CS@2025"Answer: Vowels: 0, Consonants: 2 (C, S), Digits: 4 (2, 0, 2, 5), Special/Space: 1 (@)

18. Detect CapitalDescription: Given a word, determine if the usage of capitals is correct. It is correct if:All letters are capital (e.g., "USA").All letters are not capital (e.g., "leetcode").Only the first letter is capital (e.g., "Google").Otherwise, return False.Concept: Case Checking/Counting. Check if the string matches one of the three patterns using string methods like isupper(), islower(), or by manually counting capitals.Test Cases:word = "USA"Answer: True (Rule 1)word = "FlaG"Answer: False

19. Fizz BuzzDescription: This is a classic coding problem, often related to array/string output. Given an integer $n$, return a string array where:If $i$ is divisible by 3 and 5, the output is "FizzBuzz".If $i$ is divisible by 3, the output is "Fizz".If $i$ is divisible by 5, the output is "Buzz".Otherwise, the output is $i$ as a string.Concept: Modulus Operator and Conditional Logic. Check the largest divisor first (15) to ensure correct precedence.Test Cases:n = 5Answer: ["1", "2", "Fizz", "4", "Buzz"]n = 15Answer: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

20. Check if a string is substring of anotherDescription: Given two strings, a main string $S$ and a pattern $P$, determine if $P$ is a substring of $S$.Concept: String Matching Algorithms (like KMP or Rabin-Karp) for efficiency, or simple Brute Force traversal/built-in methods (like Python's in operator or find()).Test Cases:S = "Hello, world", P = "world"Answer: TrueS = "Programming", P = "gramer"Answer: False
'''

import math,functools
# 1
def is_palindrome(str):
    return str==str[::-1]
# print(is_palindrome("racecar"))

# 2
def common_characters(s):
    s2_map={}
    s3_map={}
    for x in s[1]:
        s2_map[x]=s2_map.get(x,0)+1
    for x in s[2]:
        s3_map[x]=s3_map.get(x,0)+1
    res=[]
    for x in s[0]:
        if (s2_map.get(x) and s2_map.get(x)>0) and (s3_map.get(x) and s3_map.get(x)>0):
            res.append(x)
            s2_map[x]=s2_map.get(x)-1
            s3_map[x]=s3_map.get(x)-1
    return res
# print(common_characters(["bella","label","roller"]))
# print(common_characters(["cool","lock","cook"]))

# 3
def remove_character(st,char_to_remove):
    # t1
    res = str.replace(char_to_remove,'')
    return res
    # t2
    # return ''.join([char for char in st if char != char_to_remove])
# print(remove_character("programming","g"))

# 4
def reverse_a_string(s):
    # return s[::-1]
    # return ''.join(list(reversed(s)))
    s_list = list(s)
    i,j=0,len(s)-1
    while i<j:
        t=s_list[i]
        s_list[i]=s_list[j]
        s_list[j]=t
        i+=1
        j-=1
    return ''.join(s_list)
# print(reverse_a_string('python'))

# 5
def remove_all_adjacent_duplicates_in_string(s):
    stack=[]
    for x in s:
        if stack and x == stack[-1]:
            stack.pop()
        else: stack.append(x)
    return ''.join(stack)
# print(remove_all_adjacent_duplicates_in_string('abbaca'))
# print(remove_all_adjacent_duplicates_in_string('azxxzy'))

# 6
def uncommon_words_from_two_sentences(a,b):
    s_map={}
    rtn=[]
    a_list = [word for word in a.split(" ") if word!=""]
    b_list = [word for word in b.split(" ") if word!=""]
    for x in a_list:
        s_map[x]=s_map.get(x,0)+1
    for x in b_list:
        s_map[x]=s_map.get(x,0)+1
    for k,v in s_map.items():
        if v==1: rtn.append(k)
    return rtn
# print(uncommon_words_from_two_sentences('this apple is sweet','this apple is sour'))
# print(uncommon_words_from_two_sentences('apple   apple','banana'))

# 7
def excel_sheet_column_number(s):
    alpha_map={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':3,'x':24,'y':25,'z':26}
    s_indexing = len(s)-1
    val=0
    for x in list(s):
        val=val+(alpha_map[x.lower()]*math.pow(26,s_indexing))
        s_indexing-=1
    return int(val)
# print(excel_sheet_column_number('AB'))
# print(excel_sheet_column_number('ZY'))

# 8
def frequency_of_chars_in_string(s):
    s_map={}
    for x in s:s_map[x]=s_map.get(x,0)+1
    return s_map
# print(frequency_of_chars_in_string('programming'))
# print(frequency_of_chars_in_string('banana'))

# 9
def sort_string(s):
    return ''.join(sorted(list(s)))
# print(sort_string('cba'))

# 10
def valid_anagram(s,t):
    # ord(char)->num
    # chr(num)->char
    # return ''.join(sorted(s)) == ''.join(sorted(t))
    arr=[0]*26
    for x in s:
        arr[ord(x)%97]+=1
    for x in t:
        arr[ord(x)%97]-=1
    for x in arr:
        if x != 0: return False
    return True
# print(valid_anagram('anagram','nagaram'))
# print(valid_anagram('rat','car'))

# 11
def convert_chars_to_opposite_case(s):
    st=''
    for x in s:
        if x.isupper():
            st+=x.lower()
        else: st+=x.upper()
    return st
# print(convert_chars_to_opposite_case('PyThOn'))

# 12
def count_binary_substrings(s):
    groups=[]
    count=1
    for i in range(1,len(s)):
        if s[i]==s[i-1]:
            count+=1
        else:
            groups.append(count)
            count=1
    groups.append(count)
    print(groups)
    result=0
    for i in range(1,len(groups)):
        result+=min(groups[i-1],groups[i])
    return result
# print(count_binary_substrings('00110011'))
# print(count_binary_substrings('10101'))
# 13
def least_common_subsequence(S1,S2):
    n, m = len(S1), len(S2)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    # print(dp)
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if S1[i - 1] == S2[j - 1]:
                # print('at if')
                dp[i][j] = 1 + dp[i - 1][j - 1]
                # print(dp)
            else:
                # print('at else')
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                # print(dp)
    return dp[n][m]
# print(least_common_subsequence('AGGTAB','GXTXAYB'))
# print(least_common_subsequence('abcde','ace'))
# 14

# 15
def find_the_difference(s,t):
    s_val,t_val=0,0
    for x in s:
        s_val+=ord(x)
    for x in t:
        t_val+=ord(x)
    return chr(t_val-s_val)
# print(find_the_difference('abcd','abcde'))
# print(find_the_difference('ae','aea'))

# 16
def duplicates_in_string(s):
    dups=[]
    new_set =set()
    for x in [x for x in s if x !=" "]:
        if x in new_set:dups.append(x)
        else: new_set.add(x)
    return list(set(dups))
# print(duplicates_in_string('hello world'))
# print(duplicates_in_string('programming'))

# 17
def count_vowels_consonants_digits_special_chars(s):
    v_count,c_count,d_count,s_count=0,0,0,0
    vowels=set(['a','e','i','o','u'])
    for x in s:
        x_lower =x.lower()
        if x.isdigit(): d_count+=1
        elif not x.isalpha():s_count+=1
        elif x in vowels: v_count+=1
        else: c_count+=1
    return f'{v_count},{c_count},{d_count},{s_count}'
# print(count_vowels_consonants_digits_special_chars('Programming 1.0!'))
# print(count_vowels_consonants_digits_special_chars('CS@2025'))

# 18
# detect_capital can be done using isupper() and islower()

# 19
def fizz_buzz(n):
    res=[]
    for x in range(1,n+1):
        if x%3==0 and x%5==0:res.append("FizzBuzz")
        elif x%3==0:res.append("Fizz")
        elif x%5==0:res.append("Buzz")
        else:res.append(str(x))
    return res
# print(fizz_buzz(15))

# 20 
def substring_of_string(s,p):
    # return p in s
    return s.find(p)>0
# print(substring_of_string('Hello, world','world'))
# print(substring_of_string('Programming','gramer'))