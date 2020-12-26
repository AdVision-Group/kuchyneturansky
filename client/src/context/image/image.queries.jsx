
export const postImages = (imagesToUpload) => {
    console.log(imagesToUpload)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem(process.env.ADMIN_TOKEN)}`);

    const formdata = new FormData();
    imagesToUpload.forEach(img => {
        formdata.append("imagesToUpload", img.file);
    })

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${process.env.ENDPOINT}/images/`, requestOptions)
}

export const delImage = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem(process.env.ADMIN_TOKEN)}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.ENDPOINT}/images/${id}`, requestOptions)
}