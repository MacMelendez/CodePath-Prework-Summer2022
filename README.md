# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Miguel Angel Castiblanco Melendez

Time spent: 6 hours spent in total

Link to project: (https://memory-game-miguel-angel-.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Centered the buttons and the text.
- [x] Added a signature text space. 

## Video Walkthrough (GIF)
![](gif2-link-here)![GIF MEMORY GAME 1](https://user-images.githubusercontent.com/102198069/161167853-80c140d7-1895-4f73-89da-f1e2b7f5a18d.gif)

![](gif3-link-here)![GIF MEMORY GAME 2](https://user-images.githubusercontent.com/102198069/161167871-51fdb01d-2be9-4dce-9e93-0efa6ace45e8.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
 
[Math.Random use](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
<br>[Use of Center tags](https://www.computerhope.com/issues/ch001474.htm#:~:text=style%20sheet%20property.-,Using%20the%20tags,%3E%20tags.&text=Inserting%20this%20text%20within%20HTML,Center%20this%20text!)
<br>[Add line breaks](https://blog.hubspot.com/website/html-line-break#:~:text=In%20HTML%2C%20the,division%20of%20lines%20is%20significant.)
<br>[Color names](https://htmlcolorcodes.com/color-names/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)


At first I had problems with the functioning of the text on the screen. I did not know how to make some texts fit where I wanted them to fit. To solve my doubts, I opened an empty project and started playing around with the texts. Then, I realized that everything goes from left to right and it is necessary to specify when you want to change a line. Also, when doing the random values extra step, I was expecting it to return an integer. After a quick search, I discovered that it actually returns a float value so it was necessary to call the floor function to make it an integer. Afterwards, the random function included the 0 in between the possible results, and this was a problem as the buttons started counting from 1. To solve this I just simply added 1 to the result, so that 0 was never an option. It would not go beyond the limits as the maximum value is not included in the possible results, so the addition of 1 also helped to include the last button as a possible result. Despite those minor problems, I did not encounter serious difficulties that I could not solve.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I usually have questions about logic, but this is not the case. For me it is unusual how webs are formatted. One of the questions that came out of this programming experience was if there is a function or shortcut to make a text go directly in the last bottom line. Also, I was curious about printing a variable that changes constantly such as the number of remaining lives on the screen, rather than printing it as an alert. Finally, I had questions about the colors. When creating the extra button, I had a hard time trying to choose a color that does not look similar to the others, so I was wondering if there is a way to increase the range of colors.  I had a great time programming the game. It was really fun and I learned a lot.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

In addition to finishing the extra steps, I think it would be interesting to add different levels of difficulty, so as the user keeps going through the levels, the game is harder each time. The initial levels would include just one or two buttons and a really slow repetition, then as the game continues, the speed and the amount of buttons increases until all the buttons are used and the maximum speed is reached. This could be possible by adding a counter of turns (perhaps the existing progress counter would work) that, along with the progress, unlocks with an if statement the speed and buttons.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/fb87e1d0c7c144c499911af215cf95b0)


## License

    Copyright [Miguel Angel Castiblanco Melendez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
