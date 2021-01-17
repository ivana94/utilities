// for handling user input - simply sets input in state
export const userInput = () => {
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return [values, handleChange];
};

// for handling user input - sets input in state and basic form validation
export const useInputWithFormValidation = (initialValue) => {
    // for storing user input in state
    const [value, setValue] = useState(initialValue);

    // for form validation
    const [blur, setBlur] = useState(false);
    return {
        value,
        setValue,
        clear: () => setValue(""),
        blur,
        bind: {
            value,
            onChange: (e) => setValue(e.target.value),
            onBlur: (_) => setBlur(true),
            className: !value && blur ? "input-error" : "",
        },
    };
};
