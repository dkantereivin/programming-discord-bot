# Welcome to the CoPD repository. If you're here it means that you're a developer
### Here's a basic run down of the project, what we are doing, and what this means for you
_____
#### The project:
CoPD is a competition that we are hosting, this repo has the website to help manage the competition. This website will, 
among other things be used for creating and managing teams and eventually submitting entries to the competition<br/>
_[TODO: Add more information]_
_____
#### What should I do?
Here are the current tasks that need to be done *(Checked is in progress tasks)*:
- [ ] Create a user invitation page [Backend required]
- [ ] Create a homepage
- [ ] Create discord integration [Backend required]
- [x] Create navigation
- [x] Create a team creation page
- [x] Create a team management page
- [x] Create oauth [Backend required]
#### What shouldn't I do?
Canter has requested that the server-side development is not started yet; if you want to do server side please obtain permission from canter or additionally implement an alternative in your code. If you are doing server side you must do it in a separate module which is then required from the index.js file. This is an example of how it will be required:
```js
require("./features/your/feature/index.js")(express_app);
```
_____
#### Notable branches:
- [Master](https://github.com/dkantereivin/programming-discord-bot): Default branch 
- [feature/userpage](https://github.com/dkantereivin/programming-discord-bot/tree/feature/userpage): The creation of the userpage
- [feature/navigation](https://github.com/dkantereivin/programming-discord-bot/tree/feature/userpage): The creation of the navigation bar
_____
__Deadline:__ _[TODO: Add deadline]_<br/>
__Languages:__ javascript