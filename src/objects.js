const createPerson = (name, age) => {              //DONE
  return {
    name:name,
    age:age
  }
};

const getName = object => {              //DONE
  return object.name;
};

const getProperty = (property, object) => {              //DONE
  if (property == "name" ) {
    return object.name;
  } else if (property == "age") {
  return object.age;
  } else {
    return undefined;
  }
  };

const hasProperty = (property, object) => {              //DONE
  if ( object.hasOwnProperty(property)) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {              //DONE
  if ( person.age > 65 ) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
return people.map(person => person.age)
};

const findByName = (name, people) => {
  return people.find(person => person.name === name )
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  
};

const createTalkingPerson = (name, age) => {
 return {
  name: name,
  age: age,
  introduce: (friend) => {
    return "Hi " + friend + ", my name is " + name + " and I am " + age + "!";
  }
 }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
