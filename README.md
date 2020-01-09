My parents wanted all our relative's pictures for scrapbooking and I couldn't find anything online for full resolution, so I gave it a shot.

1. On google chrome instagram, click on the picture to start on (DO NOT start on the first picture.. a bug I'm still working on)

2. Variable definitions:

timeoutFloor: the minimum time in milliseconds that the next picture's url will be added to urlArray
(I recommend at minimum 1,000 ms, but this also depends on internet speed)

timeoutWidth: the variation above the timeoutFloor minimum time in milliseconds
(There is no "minimum", but to simulate natural clicking, I recommend between 1,500 and 3,000)

numPicsBeforeVpnSwitch: the number of pictures to download before a longer timeout (countdownStartTime) to switch your vpn so the get requests don't max out.
(150 seems to be the maximum, but 125 is pretty safe)

countdownStartTime: number of seconds the code will be "paused" to give time to switch vpn without interupting the picture scraper
(I recommend 30-45 seconds. But this depends on vpn switch speed, and if you're paying attention as to when it begins)

2. Run "scrape4.js" in google chrome console

3. Copy the full formattedString list

4. Paste the list in "scrape.py" image_url_array list and run it (make sure you have made images directory as directed in scrape.py file)

And walaah! full res pictures from instagram

A note for those interested. Reason for the slow iterative process is that the pictures need to be clicked on and load before the full resolution url is retrievable.
It's probably also best to run this while not signed in (if the profile isn't private). But not sure if that's needed.

Happy scrapbooking!
