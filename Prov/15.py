import math		# I import the math module so i can get an accurate pi.
print "This program calculates the area of a circle"
x=input("Enter the radius: ")
x=math.pi*x**2
x=x*100			# Multiply by 100 (1.25354 becomes 125.354)  | This part rounds
x=math.floor(x)		# Floor it (125.354 becomes 125)	     <-the number to 2
x=x/100			# Divide by 100 (125 becomes 1.25)	     | decimals.
print "The area is:", 
print x,		# The comma after every print will prevent a line break
print ("area units")    # and make the output look much better
