const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1])
        //Or
        //reject('Things Went Error!')
    }, 2000)
})

myPromise.then((result) => {
    console.log('Success!: ', result)

}).catch((error) => {
    console.log('Error!: ', error)
})

console.log('I got printed earlier! :(')


//
//
//
//                              fullfiled
//                          /
// Promise --> pending -->
//                          \
//                              rejected
//
//
//