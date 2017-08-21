module.exports = function(birthYear) {
    var age = new Date().getFullYear() - birthYear;

    if (age > 0) {
        return age + 7 + " in dog years";
    } else {
        return "Less than a year old";
    }
};