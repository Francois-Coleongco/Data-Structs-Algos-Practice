# https://edabit.com/challenge/aW8mz7Tky3gGiuQsX


toCheck = []

def parseChecks(y):

    print(f"y {y}")

    good = []

    for num in y:
        strnum = str(num)
        if strnum.split('.')[1] == '0':
            print(f"this is a good one {num}")
            good.append(round(num))

    return good
    

def is_prime(t):

    primeStatus = True

    for e in range(2,t):
        
        print(e)

        if t % e == 0:
            primeStatus = False

    return primeStatus



def is_powerful(n):
    
    for i in range(2, n):
    
        print(f"n is divisible by {i}")

        # check primes first then check which are divisible
        
        sqroot_i = i ** 0.5

        print(sqroot_i * sqroot_i)

        # check if the sqroot is prime
        toCheck.append(sqroot_i)

    print(f"toCheck {toCheck}")

    toCheck2 = parseChecks(toCheck)

    print(toCheck2)

    toCheck3 = []

    for number in toCheck2:
        if is_prime(number) == True:
            toCheck3.append(number)

    print(toCheck3)

    final = []
    compare = []

    for num in toCheck3:

        if ((n % num) == 0) and ((n % (num*num)) == 0):
            final.append(num)
        if ((n % num) == 0) or ((n % (num*num)) == 0):
            compare.append(num)

    print(final)
    print(compare)

    if (final == compare) == True:
        return True
    else:
        return False

is_powerful(test)