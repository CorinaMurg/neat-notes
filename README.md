
# [Neat Notes](https://neatnotes.netlify.app/) #
📓 Get Organized, Stay Productive! 🚀

Are you juggling tasks, ideas, and reminders, and find conventional note-taking methods 
aren't cutting it? 
<br>Meet **NEAT NOTES**, your new personal desktop notes app designed to boost 
productivity and keep your thoughts in order.

<img width=600px alt="Screenshot of the NeatNotes in Dark Mode. It features an open note with a list of the app's features: seamless markdown support, instant html preview, persistance across sessions, toggleable dark mode, intuitive split screen" src="https://github.com/CorinaMurg/neat-notes/assets/115652409/30d40065-0558-4dad-9259-2a2ec57870ae">


Can you tell I am really excited about this app? It is my go-to for taking notes. 😊
<br>Here's how I built it:

1. **ReactJS**: I built **Neat Notes** as a single-page application using the React framework. I used various features of React including state, effects, and props to manage interactivity and data flow.

2. **Component Structure**: My goal was to have an efficient code structure that promotes reusability and separation of concerns. Therefore I divided the app into three main components: `Sidebar`, `Editor`, and `App`. 

3. **State and Effects**: **Neat Notes** uses the `useState` and `useEffect` hooks to manage local state within its components and perform side effects such as fetching notes from localStorage and updating them.

4. **Markdown Editing**:  In order to enable a rich text-editing experience, **Neat Notes** integrates the `react-mde` package for a markdown editor, and the `showdown` package to convert markdown into HTML. Therefore, with Neat Notes, users can take advantage of the simplicity and versatility of Markdown for note-taking. Bold text, headers, links, and lists are just a few keystrokes away. Moreover, they can instantly preview how the markdown content looks in a polished, formatted view.

5. **Split.js**: The app uses the `react-split` package to provide a resizable split pane layout, offering a `sidebar` for the notes list and an `editor` for viewing and editing notes.

6. **Unique ID generation**: I used the `nanoid` library to generate unique IDs for each note, ensuring data integrity and reliable interactions.

7. **Data Persistence**: Notes are stored in the browser's `local storage` to ensure that they are not lost when the browser or tab is closed. The app interacts with local storage using `JavaScript's Web Storage API`, saving and retrieving notes as needed.

8. **Dark Mode**: I added a toggleable dark mode to enhance accessibility and user preference.

9. **BEM Naming Convention**: With my latest projects, I like to follow the Block Element Modifier (BEM) naming convention for CSS classes because it promotes better readability and maintainability of the CSS code.

**PLEASE NOTE: For compatibility with the React-Mde library, the Neat Notes app
was deployed based on the Version17 branch which employs React 17**
