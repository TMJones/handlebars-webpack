module.exports = function(birthYear) {
    var age = new Date().getFullYear() - birthYear;

    if (age > 0) {
        return age + 7;
    } else {
        return "Less than a year old";
    }
};