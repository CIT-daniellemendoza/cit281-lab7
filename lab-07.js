/*
    CIT 281 Lab 07
    Danielle Mendoza
*/

class CustomError extends Error {
    constructor(message) {
        super(message);
            this.customError = "CustomError"
        }
}

function throwGenericError() {
    throw new Error("Generic Error")

}

function throwCustomError() {
    throw new CustomError("Custom error")
}

//try..catch..finally block forcing generic error

console.log("Force generic error")

try {
    console.log("Generic error try block")
    throwGenericError()
}

catch (err) {
    console.log("Generic error catch block")
    console.log("Error:", err.message)

}

finally {
    console.log("Generic error finally block")
}


//try..catch..finally block forcing custom error

console.log("Force custom error")

try {
    console.log("Custom error try block")
    throwCustomError()
}

catch (err) {
    console.log("Custom error catch block")
    console.log(`${err.customError}: ${err.message}`)

}

finally {
    console.log("Custom error finally block")
}
