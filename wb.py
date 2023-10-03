# Complete the function scramble(str1, str2) that returns true 
# if a portion of str1 characters can be rearranged to match str2,
# otherwise returns false.

# Notes:

# Only lower case letters will be used (a-z)
# No punctuation or digits will be included.

# scramble('rkqodlw', 'world') ==> True
# scramble('cedewaraaossoqqyt', 'codewars') ==> True
# scramble('katas', 'steak') ==> False


def scramble(str1, str2):
    for letter in str2:
        if letter not in str1 or str2.count(letter) > str1.count(letter):
            return False
    return True

'''
Time Complexity

overall: O(n^2)
def scramble(str1, str2):
    for letter in str2: -> O(n)
        if letter not in str1 or str2.count(letter) > str1.count(letter): -> O(3n) -> O(n)
            return False -> O(1)
    return True -> O(1)
'''