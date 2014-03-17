import Tkinter
from Tkinter import *
root=Tk()

def sum(a,b):
	print(a+b)

wdgt_label=Label(root)
wdgt_label.config(text='Read text')
wdgt_label.pack(side=TOP, expand=NO, fill=BOTH)
wdgt_button=Button(root)
wdgt_button.config(bg='black', fg='red', text='Press button', command=sum(1,2))
wdgt_button.pack(side=TOP)
root.mainloop()


