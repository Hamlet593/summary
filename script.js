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

  //Coping Object

let user = { name: "Hamo" };

let perm1 = { canView: true };
let perm2 = { etiding: true };

Object.assign(user, perm1, perm2);