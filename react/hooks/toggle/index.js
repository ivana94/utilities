// for toggling any element
export const useToggle = () => {
    const [editorIsVisible, setEditorIsVisible] = useState(false);
    const toggle = () => setEditorIsVisible(!editorIsVisible);
    return { editorIsVisible, toggle };
};
