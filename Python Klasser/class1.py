class M1911():
	def __init__(m1911):
		m1911.magazine=7
	
	def reload(m1911):
		print "Reloaded!"
		m1911.magazine=7
	
	def shoot(m1911):
		m1911.damage=2
		if m1911.magazine<1 :
			print "Out of ammo!"
		else:
			print "Bang!"
			m1911.magazine=m1911.magazine-1
			if m1911.magazine<1 :
				print "Out of ammo!"
			return m1911.damage
	
	def info(m1911):
		if m1911.magazine<1 :
			print "No ammo!"
		else:
			print "Current ammo: "
			print m1911.magazine

weapon=M1911()
weapon.shoot()
weapon.shoot()
weapon.info()
weapon.shoot()
weapon.shoot()
weapon.shoot()
weapon.info()
weapon.shoot()
weapon.shoot()
weapon.reload()
weapon.info()


