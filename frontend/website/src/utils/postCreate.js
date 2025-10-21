export async function postCreate({setIsSubmitting, formData, url, method}) {
    try {
        setIsSubmitting(true);
        const response = await fetch(url, {
            method: method,
            credentials: 'include',
            body: formData,
        });

        if (!response.ok) {
            return {data: await response.json(), errors: true};
        }

        return {data: await response.json(), errors: false};
    } catch (error) {
        return null;
    } finally {
        setIsSubmitting(false);
    }
}