# Ping Pong Game

#### _Ping Pong number generator, 20 January 2017_

#### By _**Erica Wright**_

## Description

_This is a webpage that takes any given whole number entered and displays a list of all numbers from 1 up to that number, and replaces certain numbers within that list: any number divisible by three is turned into "ping", any number divisible by five is turned into "pong", and any number divisible by fifteen is turned into "ping-pong"._

## Setup/Installation Requirements

* Clone the Git repository from this url: https://github.com/ericaw21/ping-pong
* Open index.html in a web browser (Chrome recommended) to load webpage
* Enter a whole number into the text field
* Click the submit button
* Watch the numbers and phrases appear!

## Specs for Behavior-Driven Development

####The program should take any whole number and count up to that number, then display all numbers between 1 and that entered number, with the substitutions that follow:

* Any number divisible by 3 will be replaced by "ping"
* Any number divisible by 5 will be replaced by "pong"
* Any number divisible by 15 will be replaced by "ping-pong"

1. When the text field is blank and the form submitted, the webpage should pop up a message saying "Please enter a number".

  #### _Input Example: blank or notanumber_
  #### _Output Example: Alert message 'Please enter a number!'_

2. When a number is entered, the webpage should count from 1 up to that number and list all the values in an array. While counting the numbers, the substitutions listed above will take the place of certain numbers.

  #### _Input Example: 5_
  #### _Output Example: [1,2,3,4,5]_

3. During the creation of the array in the previous step, as the webpage is counting numbers up to the entered number, it will substitute relevant numbers as indicated by the JavaScript, as follows:

_If the number is divisible by 3 with no remainder, it will add the value "ping" to the array instead of the number. If the number is divisible by 5 with no remainder, it will add the value "pong" to the array instead of the number. If the number is divisible by 15 with no remainder, it will add the value "ping-pong" to the array instead of the number._

  #### _Input Example: 5_
  #### _Output Example: [1,2,ping,4,pong]_

4. Once the array is created with the appropriate values, then it will display each item from within the array as a bulleted list.

  #### _Input Example: 5_
  #### _Output Example:_
  * 1
  * 2
  * ping
  * 4
  * pong

## Known Bugs

None so far.

## Support and contact details

_If you experience any issues with this webpage please contact Erica at ericaw21@gmail.com_

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

*MIT*

Copyright (c) 2017 Erica Wright All Rights Reserved.
