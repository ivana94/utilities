// for registration and login
export const useAuthSubmit = (url = "/registration", values) => {
    const [error, setError] = useState();

    const submit = () => {
        axios.post(url, values).then(({ data }) => {
            if (data.success) {
                location.replace("/");
            } else {
                setError(true);
            }
        });
    };

    return [submit, error];
};
