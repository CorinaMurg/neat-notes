
📓 Get Organized, Stay Productive with Neat Notes! 🚀

Are you juggling tasks, ideas, and reminders, and find conventional note-taking methods 
aren't cutting it? Meet Neat Notes, your new personal desktop notes app designed to boost 
productivity and keep your thoughts in order.

I build this React project as part of scrimba.com's course "Learn React."


Here are the key technical aspects of the application:


1. ReactJS: I built Neat Notes as a single-page application using the React framework. I used various features of React including state, effects, and props to manage interactivity and data flow.

2. Component Structure: My goal was to improve code organization and promote reusability and separation of concerns. Therefore I divided the app into three main components: `Sidebar`, `Editor`, and `App`. 

3. State and Effects: Neat Notes uses the useState and useEffect hooks to manage local state within its components and perform side effects such as fetching notes from localStorage and updating them.

4. Markdown Editing:  In order to enable a rich text editing experience, the app integrates the `react-mde` package for a markdown editor, and the `showdown` package to convert markdown into HTML. Therefore, with Neat Notes, users can take advantage of the simplicity and versatility of Markdown for note-taking. Bold text, headers, links, and lists are just a few keystrokes away. Moreover, they can instantly preview how the markdown content looks in a polished, formatted view.

5. Split.js: The app uses the `react-split` package to provide a resizable split pane layout, offering a sidebar for the notes list and an editor for viewing and editing notes.

6. Unique ID generation: I used the `nanoid` library to generate unique IDs for each note, ensuring data integrity and reliable interactions.

7. Data Persistence: Notes are stored in the browser's localStorage to ensure that they are not lost when the browser or tab is closed. The app interacts with localStorage using JavaScript's Web Storage API, saving and retrieving notes as needed.

8. Dark Mode: The app features a toggleable dark mode, which enhances accessibility and user preference.

9. BEM Naming Convention: With my latest projects, I like to follow the Block Element Modifier (BEM) naming convention for CSS classes because it promotes better readability and maintainability of the CSS code.





