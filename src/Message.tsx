function Message(){
    const name = 'ABIDI Youssef';
    if(name.length > 0){
    return (
            <h1>Hello {name}</h1>
    )
    } else {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Message;