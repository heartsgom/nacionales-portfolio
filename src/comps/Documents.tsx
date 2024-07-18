import DocViewer, {DocViewerRenderers} from "react-doc-viewer"


export default function Documents(){

    const docs = [
        { uri: ("../assets/Practicum Report Nacionales.pdf") },
        { uri: ("../assets/Nacionales_Resume.pdf") },
    ]


    return (
        <>
            <div className = "Documents">
                <h1>Documents</h1>
                Here are all the related documents in my practium:
                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
            </div>
        </>
    )
}