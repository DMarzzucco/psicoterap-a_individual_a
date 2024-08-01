export const sendEmailjs = async (form: HTMLFormElement) => {
    const serviceID = "service_xhmxkjl";
    const templateID = "template_7yi1umj";
    const userID = "iT8BqbWUbZqyQKCa9";

    const formData = new FormData(form);
    formData.append('servide_id', serviceID)
    formData.append('templete_id', templateID)
    formData.append('user_id', userID)

    try{
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send-form",{
            method:"POST",
            body: formData
        })
        if (!res.ok){
            throw new Error ('Fail to send email')
        }
        console.log ("Email was sending")
    }catch(error:any){
        console.error(error.message)
        throw new Error (`${error.message}`)
    }
};