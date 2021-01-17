// for registration and login
export const useAuthSubmit = (url, values) => {
    const [error, setError] = useState();

    const submit = () => {
        axios.post(url, values).then(({ data }) => {
            if (data.success) {
                // redirect upon successful registration/login
                location.replace("/");
            } else {
                setError(true);
            }
        });
    };

    return [submit, error];
};

// for fetching data on mount
export const useAxios = (url) => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(url);
            setValue(data);
        })();
    }, []);

    return value;
};
