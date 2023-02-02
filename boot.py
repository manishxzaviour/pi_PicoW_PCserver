import os
import time
storage.disable_usb_drive() 

import usb_hid
from adafruit_hid.keycode import Keycode
from adafruit_hid.keyboard import Keyboard

f=open("usbstat.txt",'r')
d=f.read()
if(d=='1'):
    storage.enable_usb_drive() 
    time.sleep(3)
    keyboard.press(Keycode.DOWN_ARROW)
    time.sleep(.2)
    keyboard.release(Keycode.DOWN_ARROW)
    time.sleep(.2)
    keyboard.press(Keycode.DOWN_ARROW)
    time.sleep(.2)
    keyboard.release(Keycode.DOWN_ARROW)
    time.sleep(.2)
    keyboard.press(Keycode.RETURN)
    time.sleep(.2)
    keyboard.release(Keycode.RETURN)
else:
    pass    
       