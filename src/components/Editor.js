import React from "react"
import ReactMde from "react-mde"
// convert markdown into html
import Showdown from "showdown"

export default function Editor({ current, updated, darkMode }) {
    const [selectedTab, setSelectedTab] = React.useState("preview")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    React.useEffect(() => {
        setTimeout(() => {
            const buttons = document.querySelectorAll('.mde-header .mde-tabs button');
            if (buttons && buttons[1]) {
                buttons[1].textContent = 'View';
            }
        }, 0);
    }, []); 

    return (
        <section className={`pane editor ${darkMode ? "dark": ""}`}>
            <ReactMde
                value={current.body}
                onChange={updated}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                darkMode={darkMode}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={100}
                heightUnits="vh"
            />
        </section>
    )
}
