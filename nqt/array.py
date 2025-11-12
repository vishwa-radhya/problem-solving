'''
1. Two SumDescription: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. Assume exactly one solution exists, and you may not use the same element twice.Concept: Uses a Hash Map/Dictionary for $O(n)$ time complexity to check for $target - current\_number$ in one pass.Test Cases:nums = [2, 7, 11, 15], target = 9Answer: [0, 1] (Since $nums[0] + nums[1] = 2 + 7 = 9$)nums = [3, 2, 4], target = 6Answer: [1, 2] (Since $nums[1] + nums[2] = 2 + 4 = 6$)

2. Program to check if an array is sorted or notDescription: Determine if an array is sorted in non-decreasing (ascending) order.Concept: Simple linear scan; check if every element $A[i]$ is less than or equal to the next element $A[i+1]$.Test Cases:arr = [10, 20, 20, 30, 40]Answer: Truearr = [5, 12, 11, 20, 15]Answer: False

3. Sum of elements in a given arrayDescription: Calculate the sum of all integer elements present in the array.Concept: Basic iteration or using a built-in function (like sum() in Python).Test Cases:arr = [1, 2, 3, 4, 5]Answer: 15arr = [-10, 20, 5]Answer: 15

4. Pascal's TriangleDescription: Given an integer numRows, generate the first numRows of Pascal's Triangle. In Pascal's Triangle, each number is the sum of the two numbers directly above it.Concept: Dynamic Programming or Combinatorics. The $k^{th}$ element in the $i^{th}$ row is given by the binomial coefficient $\binom{i}{k}$.Test Cases:numRows = 3Answer: [[1], [1, 1], [1, 2, 1]]numRows = 5Answer: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

5. Counting frequencies of array elementsDescription: Given an array, count the frequency (number of occurrences) of each distinct element.Concept: Use a Hash Map/Dictionary or the Counter class in Python to store element-frequency pairs.Test Cases:arr = [1, 2, 2, 3, 1, 4]Answer: {1: 2, 2: 2, 3: 1, 4: 1} (Dictionary/Map output)arr = [10, 10, 10, 20, 30, 20]Answer: {10: 3, 20: 2, 30: 1}

6. Move ZeroesDescription: Given an array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements. The operation must be done in-place.Concept: Two Pointers. Use one pointer to iterate and another (the write pointer) to track the position where the next non-zero element should be placed.Test Cases:nums = [0, 1, 0, 3, 12]Answer: [1, 3, 12, 0, 0]nums = [1, 0, 1, 0, 1, 0]Answer: [1, 1, 1, 0, 0, 0]

7. Add an element to an ArrayDescription: Given an array and a value, insert the value into the array at a specified position, shifting existing elements. (In Python, this is typically done using the built-in insert() method or by creating a new list).Concept: Array/List Manipulation. In static arrays, this requires shifting. In dynamic lists (Python list), the implementation handles the shift.Test Cases:arr = [1, 2, 4, 5], value = 3, position = 2 (0-indexed)Answer: [1, 2, 3, 4, 5]arr = [10, 20, 30], value = 5, position = 0Answer: [5, 10, 20, 30]

8. Contains DuplicateDescription: Check if an array contains any duplicates. Return True if any value appears at least twice, and False if every element is distinct.Concept: Use a Hash Set (Python set) to store elements seen so far and check for duplicates in $O(n)$ time.Test Cases:nums = [1, 2, 3, 1]Answer: Truenums = [1, 2, 3, 4]Answer: False

9. Find duplicates in O(n) time and O(1) extra spaceDescription: Given an array of integers of size $N$ where all numbers are in the range $[1, N]$, find all the elements that appear twice. The constraint is $O(n)$ time and $O(1)$ extra space (not counting the output list).Concept: Use the array itself as a Hash Map. Since numbers are $1$ to $N$, use the value $A[i]$ to index $A[|A[i]| - 1]$ and mark it as seen by making it negative.Test Cases:nums = [4, 3, 2, 7, 8, 2, 3, 1]Answer: [2, 3]nums = [1, 1]Answer: [1]

10. Print array after it is right rotated K timesDescription: Right-rotate the array by $K$ steps. A right rotation means the last element moves to the front. The operation must be performed in-place.Concept: Array Rotation. The most efficient in-place method often involves three steps of reversal. First, reverse the whole array. Then reverse the first $K$ elements, then the remaining $N-K$ elements. Alternatively, reverse $N-K$ then $K$, then the whole array.Test Cases:nums = [1, 2, 3, 4, 5], K = 2Answer: [4, 5, 1, 2, 3] (Original: 1,2,3,4,5 -> $K=1$: 5,1,2,3,4 -> $K=2$: 4,5,1,2,3)nums = [1, 2, 3], K = 4 (Note: $K$ is typically $\text{K} \pmod N$)Answer: [3, 1, 2] ($4 \pmod 3 = 1$ rotation)

11. Single NumberDescription: Given a non-empty array of integers, every element appears twice except for one. Find that single one.Concept: Use the Bitwise XOR operator ($\oplus$). The property $A \oplus A = 0$ and $A \oplus 0 = A$ means XORing all elements results in the unique element.Test Cases:nums = [2, 2, 1]Answer: 1nums = [4, 1, 2, 1, 2]Answer: 4

12. Mean and median of an unsorted arrayDescription: Calculate the mean (average) and median (middle value) of an array.Concept: Mean is $\frac{\sum A[i]}{N}$. Median requires sorting the array first: the middle element for odd length, or the average of the two middle elements for even length.Test Cases:arr = [1, 3, 2, 4, 5]Mean: 3.0Median: 3 (Sorted: [1, 2, **3**, 4, 5])arr = [1, 2, 3, 4]Mean: 2.5Median: 2.5 (Sorted: [1, **2, 3**, 4]. Median is $\frac{2+3}{2}$)

13. Smallest and second smallest elements in an arrayDescription: Find the smallest and second smallest distinct elements in the array.Concept: Linear Scan. Iterate through the array, maintaining two variables: smallest and second_smallest. Be careful to handle duplicates and the initial setting of these variables.Test Cases:arr = [10, 5, 20, 5, 15]Answer: Smallest: 5, Second Smallest: 10arr = [1, 1, 1]Answer: Smallest: 1, Second Smallest: None (or a specific error value, depending on problem constraints, assuming we need distinct elements)

14. Third Maximum NumberDescription: Given an integer array, return the third distinct maximum number. If the third maximum does not exist, return the maximum number.Concept: Three Variables/Set. Use a set to get distinct elements, then sort and pick the third largest. Or, use three variables (max1, max2, max3) to track the largest three distinct values during a single pass.Test Cases:nums = [3, 2, 1]Answer: 1nums = [2, 2, 3, 1]Answer: 1 (Distinct elements are 3, 2, 1. The third max is 1.)

15. Sort elements by frequencyDescription: Sort the array elements in increasing order of their frequency. If two elements have the same frequency, sort them in decreasing order of their value.Concept: Frequency Map and Custom Sort Key. Use a hash map to count frequencies, then use a custom sort function/key that primarily sorts by frequency (ascending) and secondarily by value (descending).Test Cases:nums = [1, 1, 2, 2, 2, 3]Answer: [3, 1, 1, 2, 2, 2] (3: freq 1; 1: freq 2; 2: freq 3)nums = [2, 3, 1, 3, 2]Answer: [1, 3, 3, 2, 2] (1: freq 1; 3: freq 2, value > 2; 2: freq 2, value < 3)

16. Majority ElementDescription: Find the element that appears more than $\lfloor \frac{n}{2} \rfloor$ times (where $n$ is the array size). Assume the majority element always exists.Concept: Boyer-Moore Voting Algorithm. A single-pass, $O(1)$ space algorithm that finds the majority candidate by incrementing a counter for the current candidate and decrementing it for other elements.Test Cases:nums = [3, 2, 3]Answer: 3nums = [2, 2, 1, 1, 1, 2, 2]Answer: 2 ($\lfloor \frac{7}{2} \rfloor = 3$. 2 appears 4 times.)

17. Next Greater Element IDescription: Given two distinct arrays, nums1 and nums2, find the Next Greater Element for each element of nums1 in nums2. The NGE of a number $x$ in nums2 is the first element to its right that is greater than $x$. If none exists, output $-1$. (nums1 is a subset of nums2).Concept: Monotonic Stack. Use a stack to efficiently track potential next greater elements. This solves the NGE for all elements of nums2 in $O(n)$ time.Test Cases:nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]Answer: [-1, 3, -1] (NGE of 4 in nums2 is -1; NGE of 1 is 3; NGE of 2 is -1)nums1 = [2, 4], nums2 = [1, 2, 3, 4]Answer: [3, -1]

18. Intersection of Two ArraysDescription: Given two integer arrays, nums1 and nums2, return an array of their intersection. Each element in the result must be unique. The result can be in any order.Concept: Hash Set. Convert both arrays to sets and find the set intersection (e.g., in Python: set(nums1) & set(nums2)).Test Cases:nums1 = [1, 2, 2, 1], nums2 = [2, 2]Answer: [2]nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]Answer: [9, 4] (Order may vary)

19. Find Peak ElementDescription: Find a peak element in an array. A peak element is an element that is strictly greater than its neighbors. Assume $A[-1] = A[N] = -\infty$. If multiple peaks exist, return the index of any one of them.Concept: Binary Search. Because of the $A[-1] = A[N] = -\infty$ boundary condition, a peak is guaranteed to exist. If $A[mid] < A[mid+1]$, the peak must be in the right half (since the array goes up). Otherwise, the peak is in the left half or at mid. This reduces search space in $O(\log n)$ time.Test Cases:nums = [1, 2, 3, 1]Answer: 2 (Index of value 3)nums = [1, 2, 1, 3, 5, 6, 4]Answer: 5 (Index of value 6, but 1 (value 2) is also a valid peak)

20. Longest Continuous Increasing SubsequenceDescription: Find the length of the longest continuous increasing subsequence (LCIS). A continuous increasing subsequence is defined by $A[i] < A[i+1] < \dots < A[j]$.Concept: Greedy/Simple Iteration. Use two variables: one to track the current_length of the increasing sequence ending at the current index, and another to track the max_length seen so far. Reset current_length to 1 if the increasing trend breaks.Test Cases:nums = [1, 3, 5, 4, 7]Answer: 3 (The LCIS is [1, 3, 5])nums = [2, 2, 2, 2, 2]Answer: 1 (An LCIS of length 1 is always possible)
'''

import math,functools

# 1
def two_sum(arr,target):
    # arr.sort()
    # l,r=0,len(arr)-1
    # while l<r:
    #     c_sum = arr[l]+arr[r]
    #     if c_sum==target: return [arr[l],arr[r]]
    #     elif c_sum<target: l+=1
    #     else: r-=1
    # return []
    # indices
    num_map={}
    for i,num in enumerate(arr):
        rem = target-num
        if rem in num_map:
            return [num_map[rem],i]
        num_map[num]=i
    return []
# print(two_sum([2,7,11,15],9))
# print(two_sum([3,2,4],6))

# 2
def check_array_is_sorted(arr):
    for i in range(len(arr)-1):
        if arr[i]>arr[i+1]:
            return False
    return True
# print(check_array_is_sorted([10,20,30]))
# print(check_array_is_sorted([5,12,11,20,15]))

# 3
def sum_of_elements_in_array(arr):
    # return sum(list(arr))
    return functools.reduce(lambda a,s:a+s,list(arr),0)
# print(sum_of_elements_in_array([1,2,3,4,5]))
# print(sum_of_elements_in_array([-10,20,5]))

# 4
def pascals_triangle(n):
    if n ==1 : return [1]
    if n==2: return [1,1]
    pascal_list=[[1],[1,1]]
    while len(pascal_list)<n:
        new_list=[]
        curr_list=pascal_list[len(pascal_list)-1]
        curr_list_len = len(curr_list)
        new_list.append(curr_list[0])
        i,j=0,1
        while j<curr_list_len:
            new_list.append(curr_list[i]+curr_list[j])
            i+=1
            j+=1
        new_list.append(curr_list[curr_list_len-1])
        pascal_list.append(new_list)
    return pascal_list
# print(pascals_triangle(3))
# print(pascals_triangle(5))

# 5
def counting_frequencies_of_array_elements(arr):
    arr_map={}
    for i in arr:
        if i in arr_map:
            arr_map[i]+=1
        else:
            arr_map[i]=1
        # arr_map[i] = arr_map.get(i,0)+1
    return arr_map
# print(counting_frequencies_of_array_elements([1,2,2,3,1,4]))

# 6
def move_zeros(arr):
    i=0
    for j in range(len(arr)):
        if arr[j] != 0:
            t=arr[j]
            arr[j]=arr[i]
            arr[i]=t
            i+=1
    return arr
# print(move_zeros([0,1,0,3,12]))

# 7
def add_an_element_to_array(arr,val,pos):
    arr.insert(pos,val)
    return arr
# print(add_an_element_to_array([1,2,4,5],3,2))

# 8
def contains_duplicate(arr):
    arr_set = set()
    for i in arr:
        if i in arr_set: return True
        arr_set.add(i)
    return False
# print(contains_duplicate([1,2,3,1]))

# 9
def find_duplicates(arr):
    hash_map={}
    duplicates_list=[]
    for i in arr:
        hash_map[i]= hash_map.get(i,0)+1
        if hash_map[i]>=2:duplicates_list.append(i)
    # hash_items= hash_map.items()
    # for key,val in hash_items:
    #     if val>=2:duplicates_list.append(key)
    return duplicates_list
# print(find_duplicates([4,3,2,7,8,2,3,1]))
# print(find_duplicates([1,1]))

# 10
def array_rotate(arr,k):
    arr_len = len(arr)
    k=k%arr_len
    # list(reversed(arr))
    # i,j=0,arr_len-1
    # while i<=j:
    #     t=arr[i]
    #     arr[i]=arr[j]
    #     arr[j]=t
    #     i+=1
    #     j-=1
    # i,j=0,k-1
    # while i<=j:
    #     t=arr[i]
    #     arr[i]=arr[j]
    #     arr[j]=t
    #     i+=1
    #     j-=1
    # i,j=k,arr_len-1
    # while i<=j:
    #     t=arr[i]
    #     arr[i]=arr[j]
    #     arr[j]=t
    #     i+=1
    #     j-=1
    # return arr
    # arr.reverse()
    return list(reversed(list(reversed(arr))[0:k]))+list(reversed(list(reversed(arr))[k:arr_len]))

# print(array_rotate([1,2,3,4,5],2))
# print(array_rotate([1,2,3],4))

# 11
def single_number(arr):
    arr_map = {}
    for i in arr:
        arr_map[i]=arr_map.get(i,0)+1
    arr_items = arr_map.items()
    for key,val in arr_items:
        if val ==1: return key
# print(single_number([2,2,1]))
# print(single_number([4,1,2,1,2]))

# 12
def mean_median(arr):
    mean = functools.reduce(lambda a,s:a+s,list(arr),0)/len(arr)
    sorted_array = list(sorted(arr))
    mid_index = len(sorted_array)//2
    median = sorted_array[mid_index] if len(sorted_array)%2!=0 else ((sorted_array[mid_index-1])+(sorted_array[mid_index]))/2
    return f'{mean},{median}'
# print(mean_median([1,3,2,4,5]))
# print(mean_median([1,2,3,4]))

# 13
def smallest_second_smallest(arr):
    sorted_unique_list = list(sorted(list(set(arr))))
    if len(sorted_unique_list)>=2:
        return f'{sorted_unique_list[0]},{sorted_unique_list[1]}'
    else: return f'{sorted_unique_list[0]}'
# print(smallest_second_smallest([10,5,20,5,15]))
# print(smallest_second_smallest([1,1,1]))

# 14
def third_max_number(arr):
    sorted_unique_list = list(reversed(list(set(arr))))
    return sorted_unique_list[2] if len(sorted_unique_list)>=3 else sorted_unique_list[0]
# print(third_max_number([3,2,1]))
# print(third_max_number([2,2,3,1]))

# 15
def sort_elements_by_freq(arr):
    arr_map = {}
    for i in arr:
        arr_map[i]=arr_map.get(i,0)+1
    sorted_arr = sorted(arr,key=lambda x:(arr_map[x],-x))
    return sorted_arr
# print(sort_elements_by_freq([1,1,2,2,2,3]))

# 16
def majority_element(arr):
    return list(sorted(arr))[len(arr)//2]
# print(majority_element([3,2,3]))
# print(majority_element([2,2,1,1,1,2,2]))

# 17
def next_greater_element_1(nums1,nums2):
    nge_map={}
    stack=[]
    for num in nums2:
        while stack and num > stack[-1]:
            stack_element = stack.pop()
            nge_map[stack_element]=num
        stack.append(num)
        print(stack,nge_map)
    res=[]
    for x in nums1:
        res.append(nge_map.get(x,-1))
    return res
# print(next_greater_element_1([4,1,2],[1,3,4,2])) # [-1,3,-1]
# print(next_greater_element_1([2,4],[1,2,3,4])) # [3,-1]

# 18
def intersection_of_two_arrays(arr1,arr2):
    return list(set(arr1) & set(arr2))
# print(intersection_of_two_arrays([1,2,2,1],[2,2]))
# print(intersection_of_two_arrays([4,9,5],[9,4,9,8,4]))

# 19
def find_peak_element(arr):
    peak_element=-1
    peak_index=-1
    for i in range(1,len(arr)-1):
        if arr[i]>arr[i-1] and arr[i]>arr[i+1]:
            peak_element=arr[i]
            peak_index=i
    return peak_index
# print(find_peak_element([1,2,3,1]))
# print(find_peak_element([1,2,1,3,5,6,4]))

# 20
def longest_continuos_increasing_subsequence(arr):
    longest_count=1
    for i in range(len(arr)-1):
        if arr[i] < arr[i+1]:
            longest_count+=1
        else:
            break
    return longest_count
# print(longest_continuos_increasing_subsequence([1,3,5,4,7]))
# print(longest_continuos_increasing_subsequence([2,2,2,2]))