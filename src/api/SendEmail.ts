export const sendEmailjs = async (form: HTMLFormElement) => {
    const serviceID = "service_xhmxkjl";
    const templateID = "template_7yi1umj";
    const userID = "iT8BqbWUbZqyQKCa9";

    const formData = new FormData(form);
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID);

    try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            body: formData
        });
        if (!res.ok) {
            throw new Error('Fallo al enviar el correo (linea 17)')
        }
        console.log("Mensaje enviado")
    } catch (error) {
        console.error('Error', error)
        throw error
    }
};