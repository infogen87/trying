



function guessGame(){

}



secret_num = 43
guess_limit = 5
guess_count = 0
users_inputs = []
has_user_guessed = False
print("you have 5 chances to guess the secret number!")
while guess_count < guess_limit:
    number = int(input("guess the sercet number: "))
    guess_count += 1
    has_user_guessed = True
    chances = guess_limit - guess_count
    users_inputs.append(number)
    
    if number == secret_num:
        print("congrats you got the number!")
        break
    if has_user_guessed and chances != 0:
    	print(f"try again you have {chances} chance(s) left")    
else:
    print("sorry you failed!")
    
    print(f'here are what you guessed {users_inputs} but the secret number was "{secret_num}"')