Calculator = function() {
    this.value = 0;
}

//This represents a full functionality change to our original calculator model.
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}