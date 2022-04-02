# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jose Folgar**

Time spent: **10** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Images are faded until clicked by user

## Video Walkthrough (GIF)

https://cdn.glitch.global/f4262200-85a7-4b02-9059-20c7507ba5d2/MemoryGame1.gif?v=1648874760366

https://cdn.glitch.global/f4262200-85a7-4b02-9059-20c7507ba5d2/MemoryGame2.gif?v=1648874768317

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Icon-icons.com (animal icons) :

Dog Free Icon - Icon-Icons.com

Horse Free Icon - Icon-Icons.com

Pig Free Icon - Icon-Icons.com

Cat Free Icon - Icon-Icons.com

Cow Free Icon - Icon-Icons.com

Youtube.com (animal sounds):

Pig Oink Sound Effect - YouTube

Meow - Sound Effect - YouTube 

HORSE - Sound Effect - YouTube

MOO - Sound Effect - YouTube

Dog Bark Sound Effect HD [No Copyright] - YouTube

https://ytmp3.cc/en7222fcqp/ - Free YouTube to mp3 converter

HTML img tag (w3schools.com)

CSS Colors (w3schools.com)

CSS Styling Images (w3schools.com)

CSS display property (w3schools.com)

How to Play Audio in HTML using JavaScript – Updated (programminghead.com)

WavePad Sound Editor – Used to shorten the animal audios that were too long

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I encountered many issues when I decided to implement new sounds in my project. I downloaded a few animal noises from the internet and was able to add them to my assets folder and subsequently to my HTML file without much trouble. The first issue I came across happened when I tried implementing the sounds in JavaScript. I created a new function named “playMyAudio'' to play the new sounds, but I then needed to figure out how to replace startTone and stopTone with this new function. I initially tried to delete the entirety of the sound code given in the required steps, but I later realized that I called several of those given functions at other points in my code. Simply replacing those function calls with my new function did not work. At this point, my ‘playClueSequence’ function had stopped working as well, and I could not figure out what was wrong. Since I had been working on the project for a couple hours that day already, I decided to put it away and think it over. I returned to the project the next day and elected to start from scratch. I re-implemented all the given sound code and made it work as it had before I created a new sound function. Through doing this, I discovered that I had added a set of parentheses where they didn’t belong which broke ‘playClueSequence.’ Once I revised my code, I worked my way through the script and considered each step logically; I thought about how exactly the tones are initialized and why it works. As I pondered this, I realized that it was a combination of calling the tone functions at the right place and assigning them each to the correct button. I followed this logic to carefully insert my ‘playAudio’ function in the correct spots with the correct format. Finally, the sounds played as they should. I also had an issue where the sound wouldn’t play if another sound was still playing. I fixed this by cutting down the length of the sound to be about a second long and editing my cluePauseTime constant to wait longer until starting the next clue. After fixing all of this, my code finally functioned as intended. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Completing this project has given me a better sense of how websites are created and styled as well as how different buttons are implemented. There weren’t many HTML events used to create the memory game; we used onmousedown and onclick, but there are several other event features I discovered online while doing research for my project. I am excited to try out other event features and explore how I could make websites even more interactive. I am also inspired to learn about how different companies create more advanced and elaborate websites. For example, Apple’s Airpod Pro website has a mechanic that as you scroll down the page, pictures and videos look like they are coming out of the screen. Also, the website will stop moving down the page and simply make text appear at some points. I am excited to learn how to build websites like that one and build on its creativity.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
When I initially added the animal images to my project, I tried to change the button names from ‘button 1-5’ to the name of the animal each button corresponded to. However, I soon realized that my JavaScript code relied on each of the buttons being named ‘button 1-5’ so that it could determine which button was being pressed. This became a bit confusing when I added the animal sounds later. I needed to make sure each button was paired with the right sound, but I couldn’t really tell what went where. If I had more time to work on this project, I would like to figure out how I could change my JavaScript functions so that they would work with the animal names. I would also like to design a different type of memory game – specifically, a Bop-It toy. I think it would be fun to designate each button to a different piece on a Bop-It toy, and then have the announcer call out each clue randomly rather than just flash it on the screen.



## Interview Recording URL Link

https://www.loom.com/share/a37f381873a9490c92f8ef10291f7dbb


## License

    Copyright Jose Folgar

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.