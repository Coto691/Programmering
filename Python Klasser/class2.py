import random

class Konto(object):
	def __init__(self):
		self.saldo=60

	def pengar(self):
		print "Current money:"
		print self.saldo
		
	def insert(self, a):
		self.saldo=self.saldo+a

class Lotteri(object):
	
	def _init__(self):
		self.money=0
		self.var = 0
	
	def generator(self):
		self.money=random.random()
		self.money=self.money*100	
		self.money=round(self.money)
		self.var=int(self.money)
		print "You got:"
		print self.var
	
		
l = Lotteri()
k = Konto()
l.generator()
k.insert(l.var)
k.pengar()
