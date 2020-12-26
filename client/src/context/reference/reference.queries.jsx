
export const fetchReferenciesByCategory = (category) => {
    return fetch(`${process.env.ENDPOINT}/referencies/${category}`)
}

export const postReference = (name, description, category, images) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem(process.env.ADMIN_TOKEN)}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "description": description,
        "category": category,
        "images": images
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.ENDPOINT}/referencies`, requestOptions)
}


export const patchReference = (id, name, description, category, images) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem(process.env.ADMIN_TOKEN)}`);
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
        "name": name,
        "description": description,
        "category": category,
        "images": images
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.ENDPOINT}/referencies/${id}`, requestOptions)
}

export const delReference = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem(process.env.ADMIN_TOKEN)}`);



    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.ENDPOINT}/referencies/${id}`, requestOptions)
}