# print("Hello, World!")

# name = input("What is your name? ")
# favorite_color = input("What is your favorite color? ")
# print(name + " likes " + favorite_color)

# weight = input("Weight(jin): ")
# weight_kg =  print(int(weight)/ 2)

# print(2**2*3+10)

# price = 1000000
# is_good_credit = True

# if is_good_credit:
#     print("they need to put down 10%")
#     print(price * 0.10)
# else:
#     print("they needs to put down 20%")
#     print(price * 0.20)
# print(f"final price is {price}")

# name =input("What is your name? ")
# if len(name) < 3:
#     print("Name must be at least 3 characters")
# elif len(name) > 50:
#     print("Name must be less than 50 characters")
# else:
#     print("Name looks good!")

# weight = int(input("Weight: "))
# unit = input("(L)bs or (K)g: ")
# if unit == "L" or unit == "l":
#     print(f"Weight in kg: {weight * 0.45}")
# elif unit == "K" or unit == "k":
#     print(f"Weight in lbs: {weight / 0.45}")
# else:
#     print("Invalid unit")

# secret_number = 5
# guess_count = 0

# while guess_count < 3:
#     input_number = int(input("Guess again: "))
#     guess_count += 1
#     if input_number == secret_number:
#         print("You won!")
#         break
# if guess_count >= 3:
#     print("Sorry you failed!")
# else:
#     print("You won!")

# is_start = False
# is_stop = False
# while True:
#     input_str = input('car game > ')
#     if input_str == 'help':
#         print('''
# start - to start the car
# stop - to stop the car
# quit - to exit''')
#     elif input_str == 'start':
#         if is_start:
#             print('Car already started...')
#         else:
#             is_start = True
#             print('Car started...')
#     elif input_str == 'stop':
#         if is_stop:
#             print('Car already stopped...')
#         else:
#             is_stop = True
#             print('Car stopped...')
#     elif input_str == 'quit':
#         print('Game over')
#         break
#     else:
#         print('I don\'t understand that...')

# numbers = [5, 2, 5, 2, 2]
# for x in numbers:
#     fina_str = ''
#     for y in range(x):
#         fina_str += 'x'
#     print(fina_str)

# numbers_list = [4,3,2,6,9]
# max_number = numbers_list[0]
# for x in numbers_list:
#     if x > max_number:
#         max_number = x
#     else:
#         continue
# print(f"max number is {max_number}")

# number_list = [2,3,4,2,2,1,5,6,3,5]
# number_new = []
# for num in number_list:
#     if num not in number_new:
#     # if number_new.count(num) == 0:
#         number_new.append(num)
#     else:
#         continue
# print(number_new)

# Number_Object = {
#     '1': 'one',
#     '2': 'two',
#     '3': 'three',
#     '4': 'four',
#     '5': 'five',
#     '6': 'six'
# }
# phone_number = input('input your number: ')
# phone_format = ''
# for i in phone_number:
#     phone_format += Number_Object.get(i)
# print(phone_format)

# class Person:
#     def talk(self):
#         print('talk')
#     def __init__(self, name):
#         self.name = name
import random
class Dice:
    def roll(self):
        first = random.randinit(1,6)
        second = random.randinit(1,6)
        return first,second


dice = Dice()
print(dice.roll());

