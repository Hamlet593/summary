//Solving Object

let menu = {
    width: 500,
    height: 400,
    title: "Հովոյի մոտ"
  };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);