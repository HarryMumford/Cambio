# Cambio
[Play](https://cambio-app.herokuapp.com/)

## Approach
### Step 1 - saving state / creating backend
First I figured out how to save state with Express and MongoDB. This will be used for scoring later on. 

### Step 2 - client side structure
The client side code will involve a lot of state, with different components / players mutating it. I decided to explore options to ensure I don't come across inconsistent state bugs and find a way of structuring my code that separates logic, presentation and storing state. I came across mobx. This will allow an easier method of cross-communication between components and will nicely take care of how and when to update the GUI.

### Step 3 - connecting multiple users
As a multiplayer game I will need to find a way to see who is connected and separate their actions. I decided to use socket.io as its a very simple setup and ties in nicely with express.js.




