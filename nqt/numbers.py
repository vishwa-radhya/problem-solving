'''
1. Climbing StairsDescription: Given $n$ stairs, you can climb either 1 or 2 steps at a time. The goal is to find the total number of distinct ways to reach the top. This is a classic Dynamic Programming problem often solved using the Fibonacci sequence concept.Test Case 1: Input: $n = 2$Answer: 2 (Ways: 1+1, 2)Test Case 2: Input: $n = 4$Answer: 5 (Ways: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)

2. Check if a given year is leap yearDescription: A year is a leap year if it is divisible by 4, except for years divisible by 100 but not by 400.Test Case 1: Input: Year = 2000Answer: True (Divisible by 400)Test Case 2: Input: Year = 1900Answer: False (Divisible by 100 but not by 400)

3. Prime NumbersDescription: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The task is usually to check if a given number is prime, or to generate primes up to a certain limit (e.g., using the Sieve of Eratosthenes).Test Case 1: Input: $N = 17$Answer: TrueTest Case 2: Input: $N = 15$Answer: False ($15 = 3 \times 5$)

4. Number is Positive, Negative, Odd, Even, ZeroDescription: Determine and report the properties of a given integer. This involves using conditional logic (if/elif/else) and the modulo operator (%) to check for even/odd status.Test Case 1: Input: $N = -10$Answer: Negative and EvenTest Case 2: Input: $N = 7$Answer: Positive and Odd

5. All divisors of a natural numberDescription: Find all positive integers that divide the given natural number $N$ exactly, without leaving a remainder. For efficiency, you only need to check up to the square root of $N$.Test Case 1: Input: $N = 12$Answer: $[1, 2, 3, 4, 6, 12]$Test Case 2: Input: $N = 25$Answer: $[1, 5, 25]$

6. Convert a Number to HexadecimalDescription: Convert a given integer from base-10 to its base-16 (hexadecimal) representation. The output should use lowercase letters ('a' through 'f'). In Python, the built-in hex() function can be used, but the challenge is usually to implement the conversion logic (using repeated division by 16).Test Case 1: Input: $N = 255$Answer: "ff"Test Case 2: Input: $N = 26$Answer: "1a"

7. Valid Perfect SquareDescription: Determine if a given positive integer $N$ is a perfect square, meaning it is the square of some integer. This can be solved by checking the integer square root, or efficiently using Binary Search or the Newton's method.Test Case 1: Input: $N = 16$Answer: True ($4^2 = 16$)Test Case 2: Input: $N = 14$Answer: False

8. Program to add two fractionsDescription: Given two fractions, $\frac{a}{b}$ and $\frac{c}{d}$, add them and return the result as a fraction $\frac{p}{q}$ in its simplest form (reduced to lowest terms). The addition formula is $\frac{a \times d + c \times b}{b \times d}$. Simplification requires finding the Greatest Common Divisor (GCD) of the numerator and the denominator.Test Case 1: Input: $\frac{1}{2}$ and $\frac{1}{4}$Answer: $\frac{3}{4}$ (Calculation: $\frac{1 \times 4 + 1 \times 2}{2 \times 4} = \frac{6}{8}$, simplified to $\frac{3}{4}$)Test Case 2: Input: $\frac{1}{3}$ and $\frac{2}{3}$Answer: $\frac{1}{1}$ (Calculation: $\frac{1 \times 3 + 2 \times 3}{3 \times 3} = \frac{9}{9}$, simplified to $\frac{1}{1}$)

9. Fibonacci numbersDescription: The Fibonacci sequence is defined by the rule that the next number is the sum of the two preceding ones, starting from 0 and 1. The task is to find the $n^{th}$ number in the sequence. $F_n = F_{n-1} + F_{n-2}$, with $F_0=0$ and $F_1=1$.Test Case 1: Input: $n = 6$Answer: 8 (Sequence: 0, 1, 1, 2, 3, 5, 8...)Test Case 2: Input: $n = 0$Answer: 0

10. Add DigitsDescription: Given a non-negative integer, repeatedly add all its digits until the result has only one digit. This can be solved with a loop or by using the mathematical property known as the Digital Root ($N \pmod 9$).Test Case 1: Input: $N = 38$Answer: 2 (Process: $3 + 8 = 11$; $1 + 1 = 2$)Test Case 2: Input: $N = 9$Answer: 9

11. Replace all '0' with '5' in an input IntegerDescription: Given an integer $N$, you need to replace every occurrence of the digit '0' within $N$ with the digit '5'. This task typically involves converting the number to a string to perform character replacement, or using modulo and division to examine the digits one by one.Test Case 1: Input: $N = 10240$Answer: $15245$Test Case 2: Input: $N = 55$Answer: $55$ (No '0's to replace)

12. Perfect NumberDescription: A Perfect Number is a positive integer that is equal to the sum of its proper positive divisors (divisors excluding the number itself). The task is to check if a given number $N$ is perfect.Test Case 1: Input: $N = 6$Answer: True (Proper divisors are 1, 2, 3. Sum: $1 + 2 + 3 = 6$)Test Case 2: Input: $N = 28$Answer: True (Proper divisors are 1, 2, 4, 7, 14. Sum: $1 + 2 + 4 + 7 + 14 = 28$)

13. Armstrong NumbersDescription: An Armstrong Number (or Narcissistic Number) is an $n$-digit number that is equal to the sum of the $n^{th}$ powers of its digits. For a 3-digit number $abc$, it is Armstrong if $a^3 + b^3 + c^3 = abc$. The task is to check if a given number $N$ is an Armstrong number.Test Case 1: Input: $N = 153$Answer: True ($1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$)Test Case 2: Input: $N = 370$Answer: True ($3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370$)

14. Sum of first $n$ natural numbersDescription: Calculate the sum of all positive integers from 1 up to a given number $n$. This can be done with a simple loop, or efficiently using the arithmetic progression formula: $S = \frac{n(n+1)}{2}$.Test Case 1: Input: $n = 5$Answer: 15 (Sum: $1+2+3+4+5=15$)Test Case 2: Input: $n = 10$Answer: 55 (Formula: $\frac{10 \times 11}{2} = 55$)

15. Permutations to arrange $N$ persons around a circular tableDescription: Find the number of distinct ways to arrange $N$ unique objects in a circle. In circular arrangements, rotations of the same arrangement are considered identical. The number of circular permutations for $N$ objects is $(N-1)!$.Test Case 1: Input: $N = 3$Answer: 2 (Formula: $(3-1)! = 2! = 2$)Test Case 2: Input: $N = 5$Answer: 24 (Formula: $(5-1)! = 4! = 24$)

16. Roots of Quadratic equationDescription: Find the roots (solutions) for a general quadratic equation $ax^2 + bx + c = 0$. This requires using the Quadratic Formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. The nature of the roots depends on the discriminant ($\Delta = b^2 - 4ac$).Test Case 1: Input: $a=1, b=-5, c=6$ ($x^2 - 5x + 6 = 0$)Answer: $x_1=3, x_2=2$ ($\Delta = 1$, Real and Distinct roots)Test Case 2: Input: $a=1, b=4, c=4$ ($x^2 + 4x + 4 = 0$)Answer: $x_1=-2, x_2=-2$ ($\Delta = 0$, Real and Equal roots)

17. Maximum Product of Three NumbersDescription: Given an array of integers, find the maximum product that can be obtained by multiplying any three numbers in the array. This often involves sorting the array and checking two scenarios: the product of the three largest numbers, OR the product of the two smallest (most negative) numbers and the single largest number.Test Case 1: Input: nums = [1, 2, 3, 4]Answer: 24 (Product of 2, 3, 4)Test Case 2: Input: nums = [-10, -5, 1, 2, 3]Answer: 150 (Product of $-10 \times -5 \times 3$)

18. Happy NumberDescription: A Happy Number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it enters a repeating cycle that does not include 1. The task is to check if a given number is happy.Test Case 1: Input: $N = 19$Answer: True (Process: $1^2+9^2 = 82 \to 8^2+2^2 = 68 \to 6^2+8^2 = 100 \to 1^2+0^2+0^2 = 1$)Test Case 2: Input: $N = 4$Answer: False (The sequence enters the $4 \to 16 \to 37 \to 58 \to 89 \to 145 \to 42 \to 20 \to 4$ cycle)
'''

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