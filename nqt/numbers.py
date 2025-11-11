import math
import functools

# 1
def climbing_stair_case(n):
    # this uses O(n) space
    if n<=2: return n
    dp=[0]*(n+1)
    dp[1]=1
    dp[2]=2
    for i in range(3,n+1):
        dp[i]=dp[i-1]+dp[i-2]
    return dp[n]
    # using O(1) space
    if n <= 2:
        return n
    ways_i_minus_2 = 1  
    ways_i_minus_1 = 2  
    current_ways = 0
    for _ in range(3, n + 1):
        current_ways = ways_i_minus_1 + ways_i_minus_2
        ways_i_minus_2 = ways_i_minus_1
        ways_i_minus_1 = current_ways
    return current_ways
# print(climbing_stair_case(7)) # same as fibonacci

# 2
def is_leap_year(year):
    return (year%4==0 and year%100!=0) or (year%400==0)
# print(is_leap_year(2000))

# 3
def prime_numbers(num):
    if num <=1: return False
    if num ==2: return True
    is_prime=True
    limit = int(math.sqrt(num))+1
    for i in range(2,limit):
        if num%i == 0:
            is_prime=False
            break
    print(is_prime)
# prime_numbers(59) 

# 4
def pos_neg_odd_even_zero(num):
    if num == 0: return "zero"
    if num>0:
        if num%2==0: return "positive even"
        else:return "positive odd"
    else:
        num = -(num)
        if num%2==0: return "negative even"
        else:return "negative odd"
# print(pos_neg_odd_even_zero(121))

# 5
def all_divisors_of_natural_numbers(num):
    if num <= 0:
        return []
    list =[]
    for i in range(1,num+1):
        if num%i==0:list.append(i)
    return list
# print(all_divisors_of_natural_numbers(2542))

# 6
def number_to_hexadecimal(num):
    if num == 0:
        return "0"
    num_map={10:"a",11:"b",12:"c",13:"d",14:"e",15:"f"}
    hex_str=""
    while num > 0:
        rem = int(num%16)
        if(rem<=9): hex_str+=str(rem)
        else: hex_str+=num_map[rem]
        num=num//16
    return hex_str[::-1]
# print(number_to_hexadecimal(255))

# 7
def valid_perfect_square(num):
    if num<1: return False
    if num ==1 : return True
    left,right=1,num
    while left<=right:
        mid = left+(right-left) // 2
        # mid = (left+right)//2
        # print(mid)
        sq =mid*mid
        if sq == num: return True
        elif sq<num:left=mid+1
        else: right=mid-1
    return False
# print(valid_perfect_square(144))

# 8
def add_two_fractions(n1,d1,n2,d2):
    new_numerator = (n1*d2)+(n2*d1)
    new_denominator = d1*d2
    common_divisor = math.gcd(new_numerator,new_denominator)
    return f'{new_numerator//common_divisor}/{new_denominator//common_divisor}'
# print(add_two_fractions(1,2,1,4))
# print(add_two_fractions(1,3,2,3))

# 9
def fibonacci_series(num):
    if num < 1: return []
    if num ==1: return [0]
    first_num,second_num=0,1
    list=[0,1]
    st=2
    while st<num:
        list.append(first_num+second_num)
        first_num=second_num
        second_num=list[len(list)-1]
        st+=1
    return list

# print(fibonacci_series(10))

# 10
def add_digits(num):
    new_num = str(num)
    if len(new_num) == 1: return int(new_num)
    while len(new_num) > 1:
        temp=0
        temp_num=int(new_num)
        while temp_num > 0:
            temp+=temp_num%10
            temp_num=temp_num//10
        new_num = str(temp)
    return new_num
# print(add_digits(334567))

# 11
def replace_occurance(num,placer):
    str_num = list(str(num))
    str_placer=str(placer)
    for i in range(len(str_num)):
        if str_num[i]=="0":
            str_num[i]=str_placer
    return int(''.join(str_num))
# print(replace_occurance(10450,9))

# 12
def perfect_number(num):
    list=[]
    for i in range(1,(num//2)+1):
        if num%i==0: list.append(i)
    return sum(list,0) == num
    # return functools.reduce(lambda acc,sum_v:acc+sum_v,list,0)==num
# print(perfect_number(28))

# 13
def armstrong_number(n):
    temp = n
    length = len(str(n))
    val=0
    while temp>0:
        rem=temp%10
        val+=math.pow(rem,length)
        temp=temp//10
    return val == n
# print(armstrong_number(370))
# print(armstrong_number(153))

# 14 
def sum_of_first_n(n):
    return (n*(n+1))//2
# print(sum_of_first_n(10))

# 15
def n_persons_around_circle(n): # (n-1)!
    return functools.reduce(lambda acc,num:acc*num,list(range(1,n)),1)
# print(n_persons_around_circle(5))

# 16
def roots_of_quadratic_equation(a,b,c):
    discriminant = (b*b)-(4*a*c)
    root_1 = int((-b)+(math.sqrt(discriminant)))//(2*a)
    root_2 = int((-b)-(math.sqrt(discriminant)))//(2*a)
    return f'{root_1},{root_2}'
# print(roots_of_quadratic_equation(1,-5,6)) #x^2-5x+6=0
# print(roots_of_quadratic_equation(1,4,4)) #x^2+4x+4=0

# 17
def maximum_product_of_three_nums_in_a_array(arr):
    # sort then max of product of last 3 or
    # product of if negative first,second and last num
    # [1,2,3,4]=>24
    # [-10,-5,1,2,3]=>-10*-5*3=>150
    arr.sort() # or arr = sorted(arr) .. opt params .sort(reverse=True), an opt called key=len to sort arr of strings acc to len
    if len(arr) <=3:
        return functools.reduce(lambda acc,num:acc*num,arr,1)
    arr_len = len(arr)
    last_three_product = arr[arr_len-1]*arr[arr_len-2]*arr[arr_len-3]
    first_two_then_last_product = arr[0]*arr[1]*arr[arr_len-1]
    return max(last_three_product,first_two_then_last_product)
    # return last_three_product if last_three_product>first_two_then_last_product else first_two_then_last_product
# print(maximum_product_of_three_nums_in_a_array([2,3,4,1]))
# print(maximum_product_of_three_nums_in_a_array([-10,-5,1,3,2]))

# 18
def happy_number(n):
    new_set=set()
    num=n
    while num != 1:
        if num in new_set:return False
        new_set.add(num)    
        temp=num
        temp_sum=0
        while temp >0:
            rem = temp%10
            temp_sum+=(rem*rem)
            temp=temp//10
        num = temp_sum
    return True
# print(happy_number(19))
# print(happy_number(4))