const myDo = (callback) => {
    setTimeout(() => {
        //callback('This is my error', undefined)
        callback(undefined, "Success!")
    }, 3000)
}


myDo((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})