/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName='Anonymous', lastName='Person',
age, married=false){
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    married: married,
    goingOn: function(){
      return this.age + 1
    },
    ageUp: function(){
      this.age++
    },
    getFullName: function(){
      return `${this.firstName} ${this.lastName}`
    },
    marry: function(person){
      this.married = true
      person.married = true
      this.spouseName = person.getFullName()
      person.spouseName = this.getFullName()
    },
    divorce: function(person){
      this.married = false
      person.married = false
      delete this.spouseName
      delete person.spouseName
    }
  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
