import os
import time
import ipaddress
import wifi
import socketpool
import board
import microcontroller
from digitalio import DigitalInOut, Direction

from adafruit_httpserver.server import HTTPServer
from adafruit_httpserver.request import HTTPRequest
from adafruit_httpserver.response import HTTPResponse
from adafruit_httpserver.methods import HTTPMethod
from adafruit_httpserver.mime_type import MIMEType

import usb_hid
from adafruit_hid.keycode import Keycode
from adafruit_hid.keyboard import Keyboard


keyboard = Keyboard(usb_hid.devices)

led1 = DigitalInOut(board.LED)
led1.direction = Direction.OUTPUT
led1.value = False

bootP = DigitalInOut(board.GP2)
bootP.direction = Direction.OUTPUT
bootP.value = True

ipv4 =  ipaddress.IPv4Address("192.168.0.180")
netmask =  ipaddress.IPv4Address("255.255.0.0")
gateway =  ipaddress.IPv4Address("192.168.0.1")
wifi.radio.set_ipv4_address(ipv4=ipv4,netmask=netmask,gateway=gateway)

status="-"

wifi.radio.connect("M 2.4G ", "helloWorld11")
pool = socketpool.SocketPool(wifi.radio)
server = HTTPServer(pool)

def webpage(status):
    html1 = """
    <html>
    <head>
        <title>
            D_PC_control
        </title>
        <style>
                body{
                    background-color:#c3f6cc
                }
                #f1{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #ac53a6;
                    box-shadow: 0 4px 5px 0 rgb(100 100 100 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
                    border-radius: 5px;
                }
                #button1{
                    width: 50vmin;
                    height: 50vmin;
                    margin: auto;
                    background-color: white;
                    border-radius: 50%;
                    box-shadow: 0 4px 5px 0 rgba(33, 31, 31, 0.2), 0 6px 20px 0 rgba(33, 31, 31, 0.2);
                    margin: 20px;
                    font-size: 20vmin;
                    font-weight: 100;
                    color: rgba(190,180,220,.8);
                    transition-duration: .5s;
                    border: 25px solid rgba(0,255,200,.5);
                }
                #button1:hover{
                    cursor: pointer;
                    box-shadow: 0 4px 10px 0 rgb(61, 58, 58), 0 6px 30px 0 rgb(61, 58, 58);
                    color: rgba(140,140,220,.9);
                    transform: scale(1.05);
                }
                #button1:active{
                    transform: scale(.9);
                    color: rgba(255,100,100,.9);
                }
                .os{
                    background-color: rgb(43, 34, 34);
                    color: silver;
                    font-size: x-large;
                    padding: 10px 20px;
                    border-radius: 5px;
                }
                .os:active{
                    transform: scale(1.01);
                }
                .genericText{
                    font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
                    font-size: xx-large;
                }
        </style>
    </head>
    <body>
        <div id="f1">
            <table class="genericText">
                <th style="color: rgb(219, 219, 219,.9);">
                    HeadLess PC boot Control
                </th>
            <tr>
                    <td>
                        <button type="submit" id="button1" class="genericText" onclick="submit()">O</button>
                    </td>
            </tr>
            <tr align="center">
                    <td class="os">
                        Boot_OS:
                        <select class="os" id="os">
                            <option value="1">Linux</option>
                            <option value="2">Windows</option>
                        </select>
                    </td>
            </tr>
            <tr align="center">
                <td class="genericText" id="Stat">
                    Status:
    """
    html2="""
            </td>
                    </tr>            
                </table>
            </div>
            <script lang="javascript">
                let butn=document.getElementById("button1");
                let os=document.getElementById("os");
                let flag=0;
                let status=document.getElementById("Stat")
                function submit() {
                    butn.style.transform = "scale(0.9)";
                    butn.style.color="rgba(255,100,100,.9)";
                    butn.style.border="25px solid rgba(200,125,20,.6)"
                    if(!flag){
                        flag=1
                        const xhttp = new XMLHttpRequest();
                        xhttp.onload = function() {
                            status.innerHTML="Status: Request sent for os :<br>"+(os.value==2?"Windows":"Kali")
                        }
                        xhttp.open("GET", '/os'+os.value, true);
                        xhttp.send();            
                    }
                }
            </script>
            </body>
        </html>
    """
    return html1+status+html2

@server.route("/",method=HTTPMethod.GET)
def base(request: HTTPRequest):
    with HTTPResponse(request, content_type=MIMEType.TYPE_HTML) as response:
        response.send(webpage(status))

@server.route("/os1", method=HTTPMethod.GET)
def route_func(request: HTTPRequest):
    with HTTPResponse(request, content_type=MIMEType.TYPE_HTML) as response:
        response.send("done")
        bootP.value=False
        time.sleep(1)
        bootP.value=True
        f=open("usbstat.txt",'w')
        f.write("0")
        f.close()
        microcontroller.reset()
        

@server.route("/os1Stat", method=HTTPMethod.GET)
def route_func(request: HTTPRequest):
    if request.query_params.get("s")=="con":
        status="ON[Linux]"
    else:
        status="OFF[Linux]"
    with HTTPResponse(request, content_type=MIMEType.TYPE_HTML) as response:
        response.send("done")
        print(status)
        
@server.route("/os2", method=HTTPMethod.GET)
def route_func(request: HTTPRequest):
    with HTTPResponse(request, content_type=MIMEType.TYPE_HTML) as response:
        response.send("done")
        bootP.value=False
        time.sleep(1)
        bootP.value=True
        f=open("usbstat.txt",'w')
        f.write("1")
        f.close()
        microcontroller.reset()


@server.route("/os2Stat", method=HTTPMethod.GET)
def route_func(request: HTTPRequest):
    if request.query_params.get("s")=="con":
        status="ON[Windows]"
    else:
        status="OFF[Windows]"
    with HTTPResponse(request, content_type=MIMEType.TYPE_HTML) as response:
        response.send("done")
        print(status)
        
try:
    server.start(str(wifi.radio.ipv4_address))
    print("Listening on http://%s:80" % wifi.radio.ipv4_address)
except OSError:
    time.sleep(5)
    print("restarting..")

while True:
    try:
        server.poll()
    except Exception as e:
        print(e)
        continue