class Factory {

    make() {
        throw new Error("Method must implemented child class!");
    }
}

module.exports = Factory;