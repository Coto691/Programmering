print ("This program demonstrates repeated substraction")
x=input("Enter the first integer: ")
x_org=x
y=input("Enter the second integer: ")
answer=0
while x>=1:
	if x<y:			# This detects if there is a remainder.
		print x_org,
		print ("divided by"),
		print y,
		print ("equals: "),
		print answer,
		print ("with a remainder of ")
		print x
		break
	else:
		answer+=1	# Line 17 and 18 is where the actual
		x=x-y		# division happens.
else:				
	print x_org,		# If there is no remainder and the integer
	print ("divided by"),	# cannot be divded an answer is printed.
	print y,
	print ("equals: "),
	print answer
