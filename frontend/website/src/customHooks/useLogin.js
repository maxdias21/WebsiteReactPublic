async function loginUser({ username, password, setIsEnabled, setErrorsMsg, setIsLogged }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USE_LOGIN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setErrorsMsg([data.error || 'Não foi possível fazer login']);
            return;
        }

        setIsLogged(true);
    } catch (error) {
        setErrorsMsg(['Não foi possível fazer login']);

    } finally {
        setIsEnabled(false);
    }
}

export default loginUser;
