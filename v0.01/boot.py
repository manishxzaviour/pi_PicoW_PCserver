import storage
import usb_midi
import usb_hid
import board
import usb_cdc


usb_hid.disable()
#usb_hid.enable((usb_hid.Device.KEYBOARD,))
usb_midi.disable()
storage.disable_usb_drive() 
