import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"

export default function Editor({ current, updated, darkMode }) {
    const [selectedTab, setSelectedTab] = React.useState("preview")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  


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
