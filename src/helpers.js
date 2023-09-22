function choice(items) {
    let randomIndex = Math.floor(Math.random()*items.length)

    return items[randomIndex]
}

function remove(items, item) {
    
    const index = items.indexOf(item)

    if(index !== -1){
        items.splice(index,1)
        return items
    }

    return undefined;
}

export {choice, remove}

