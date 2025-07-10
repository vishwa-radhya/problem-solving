# move zeroes
def moveZeroes(nums):
    i=0
    for j in range(len(nums)):
        if(nums[j]!=0):
            t = nums[i]
            nums[i] = nums[j]
            nums[j] = t
            i+=1
    return nums


# print(moveZeroes([0,1,0,3,12]))
# print(moveZeroes([2,1]))

# majority element
def majorityElement(nums):
    return sorted(nums)[len(nums)//2]
# print(majorityElement([3,2,3]))
# an observation the .sort() method works on original array and modifies it and returns None
# where the sorted() returns new modified array

# remove duplicates from sorted array
def removeDuplicatesFromSortedArray(nums):
    # return len(set(nums))
    # works but fails for in place ones
    i=1
    for j in range(1,len(nums)):
        if(nums[j] != nums[j-1]):
            nums[i]=nums[j]
            i+=1
    return i
# print(removeDuplicatesFromSortedArray([1,1,2]))
# print(removeDuplicatesFromSortedArray([0,0,1,1,1,2,2,3,3,4]))

# best time to buy and sell stock
def bestTimeToBuyAnsSellStock(prices):
    # buy = prices[0]
    # ans=0
    # for j in range(1,len(prices)):
    #     buy = min(buy,prices[j])
    #     ans = max(ans,prices[j]-buy)
    # return ans
    # another better one
    i=0
    j=1
    ans=0
    while j< len(prices):
        if(prices[i]<prices[j]):
            ans = max(ans,prices[j]-prices[i])
        else:
            i=j
        j+=1
    return ans

# print(bestTimeToBuyAnsSellStock([7,1,5,3,6,4]))

# rotate array
def rotateArray(nums,k):
    k=k%len(nums)
    i=0
    j=len(nums)-1
    while(i<j):
        t=nums[i]
        nums[i]=nums[j]
        nums[j]=t
        i+=1
        j-=1
    i=0
    j=k-1
    while(i<j):
        t=nums[i]
        nums[i]=nums[j]
        nums[j]=t
        i+=1
        j-=1
    i=k
    j=len(nums)-1
    while(i<j):
        t=nums[i]
        nums[i]=nums[j]
        nums[j]=t
        i+=1
        j-=1
    return nums
# print(rotateArray([1,2,3,4,5,6,7],3))
# print(rotateArray([-1],2))

def product_of_array_except_itself(nums):
    length = len(nums)
    prefix=[0]*length
    suffix=[0]*length
    output=[0]*length
    prefix[0]=1
    for i in range(1,length):
        prefix[i]=nums[i-1]*prefix[i-1]
    suffix[length-1]=1
    for i in range(length-2,-1,-1):
        suffix[i]=nums[i+1]*suffix[i+1]
    for i in range(length):
        output[i]=prefix[i]*suffix[i]
    return output
    
print(product_of_array_except_itself([1,2,3,4]))