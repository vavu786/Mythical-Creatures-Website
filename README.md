# Mythical Creatures Website
Website about many popular mythical creatures.
## In order to run the website on Sublime Text, you need to run a local web server.
* This is because Sublime Text opens one single file (index.html), so it can't call the javascript.
## Running a local web server through Sublime Text on Windows:
* Download [Node.js](https://nodejs.org/en/download/) for Windows
    * Keep track of the location that Node.js is downloaded (Most likely ```C:\Program Files\nodejs\node.exe```).
* Download the latest code on GitHub (the .zip file) and unzip it.
* Open Sublime Text, and click "Open Folder" and select the folder you just downloaded from GitHub.
* Now, on the top bar of Sublime Text, click "Tools" -> "Build System" -> "New Build System", and it should open a new file. 
* Copy and paste the following code  into this file, but replace '___' with the location Node.js was downloaded (keep the double quotes in the code):
```
{
  "cmd": ["___", "$file"],
  "selector": "source.js"
}
```
* Save this file and name it "JavaScript" (case matters!).
* Now, go to the file named webserver.js.
* When you are on that file, click "Tools" -> "Build".
* At the bottom, it should say "Starting webserver..."
* Now, type the following url in your web browser: http://localhost:8080/
* The website should be running!
* If you already have a process running on port 8080, change the number in webserver.js to a different number, and change the url accordingly. 
## Running a local web server through Sublime Text on Mac:
* Download [Node.js](https://nodejs.org/en/download/) for Mac
  * Keep track of the location that Node.js is downloaded (Most likely ```/usr/local/bin/node```).
* Download the latest code on GitHub (the .zip file) and unzip it.
* Open Sublime Text, and click "Open Folder" and select the folder you just downloaded from GitHub.
* Now, on the top bar of Sublime Text, click "Tools" -> "Build System" -> "New Build System", and it should open a new file.
* Copy and paste the following code  into this file, but replace '___' with the location Node.js was downloaded (keep the double quotes in the code):
```
{
  "cmd": ["___", "$file"],
  "selector": "source.js"
}
```
* Save this file and name it "JavaScript" (case matters!).
* Now, go to the file named webserver.js.
* When you are on that file, click "Tools" -> "Build".
* At the bottom, it should say "Starting webserver..."
* Now, type the following url in your web browser: http://localhost:8080/
* The website should be running!
* If you already have a process running on port 8080, change the port number in webserver.js to a different number, and change the url accordingly (If you don't know what this means, it doesn't apply)
## Running a local web server through Sublime Text on Linux (Ubuntu):
* Run ```sudo apt install nodejs``` in the terminal
* After this, type ```which node```, and take note of the path where it is installed.
* Download the latest code on GitHub (the .zip file) and unzip it.
* Open Sublime Text, and click "Open Folder" and select the folder you just downloaded from GitHub.
* Now, on the top bar of Sublime Text, click "Tools" -> "Build System" -> "New Build System", and it should open a new file.
* Copy and paste the following code  into this file, but replace '___' with the location Node.js was downloaded (keep the double quotes in the code):
```
{
  "cmd": ["___", "$file"],
  "selector": "source.js"
}
```
* Save this file and name it "JavaScript" (case matters!).
* Now, go to the file named webserver.js.
* When you are on that file, click "Tools" -> "Build".
* At the bottom, it should say "Starting webserver..."
* Now, type the following url in your web browser: http://localhost:8080/
* The website should be running!
* If you already have a process running on port 8080, change the port number in webserver.js to a different number, and change the url accordingly (If you don't know what this means, it doesn't apply)
