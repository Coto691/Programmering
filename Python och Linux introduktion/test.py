a=[1,2,3,4,5]
x=0
while x<3:
	a[x]+=1
	print a[x]
	x+=1
else:
	while x<5:
		a[x]-=1
		print a[x]
		x+=1
	else:
		a[3]-=1
		a[4]-=1
		a.insert(5, 4)		
		print a
		print "Done"
