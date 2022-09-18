
export const handleCreate = (e, input) => {
    let {id}= input
    e.preventDefault()
    const options = {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    };
    console.log(options)
    fetch(`https://bp-pokemons.herokuapp.com/${id}`,options)
    .then(data => {
        if (!data.ok) {
        throw Error(data.status);
        }
        return data.json();
        }).then(update => {
        console.log(update)
        window.location.reload();
        })
        .catch(e => {
        console.log(e);
        });
}
