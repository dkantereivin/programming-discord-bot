#### Welcome to the navigation bar.
This is a react app created with create-react-app that demonstrates the 
navigation bar. Use `npm start` to view the app
____
To add new links to the navbar pass the links prop to the navbar component 
as an array of links. The links should be a dictionary of the following format:
```ecmascript 6
{
    title: "Your link title",
    link: "/Your/Link/URL",
    exact: true, // If you want the link to be exact or not 
    //(check react router docs if you don't know what this does)
},
```
An example would be like so:
```ecmascript 6
<NavBar links={[
{
    title: "Submissions",
    link: "/submit",
    exact: false,
},
{
    title: "My Team",
    link: "/team/manage",
    exact: true,
},
]}/>
```
____
[Back to master](https://github.com/dkantereivin/programming-discord-bot)