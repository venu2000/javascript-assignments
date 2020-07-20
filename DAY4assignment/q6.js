let age =  prompt()

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

 checkAge(22)