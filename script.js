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


// About this
// Ի՞նչ է function-ի ներսում this-ը:

// a. Եթե այդ function-ը կանչվել է որպես օբյեկտի մեթոդ, ապա this-ը կլինի կետից առաջ գրված object-ը: Ի՞նչ կետ, էն որ գրում ենք խոսքի 
// ինչ-որ object ու կետով իրա ինչ որ key ենք կանչում, էդի: Օրինակ, եթե գրել ենք user1.sayYourUserName(), ապա this-ը էս կետից առաջ գրված object-ն է, այսինքն this-ը user1-ն է:

// Javascript-ում this-ը ստեղծվում է 0-ից՝ ամեն անգամ երբ ֆունկցիան կանչվում է (մեթոդի կամ չՄեթոդի տեսքով, միևնույնն է, ըստ տեղադրման վայրի՝ ամեն անգամ this է ստեղծվում):
// Այսինքն function-ը կանչվելիս է this-ը ստեղծվում (կամ որպես object-ի method): Ամեն անգամ function-ի կանչը դա մի նոր this ա:
// Այսինքն՝ է՛դ պահին, է՛դ կանչի համար ստեղծվում է object-ը՝ this-ը: Ի՞նչ object՝ որը գրված է կետից առաջ:
// Այսինքն this-ը դառնում է կետից առաջ գրված object-ը՝ սեղմված this բառի մեջ:

// Իսկ սովորական function-ի ներսում this-ը դա՝ global object window-ն ա, եթե "սովորական ռեժիմով է", undefined՝ եթե "use strict" մոդով է:

// Ունենք ֆունկցիա, որի մեջ կա this, եթե ֆունցկիան օգտագործվել է որպես ինչ-որ object-ի method, այսինքն կանչվել է ինչ-որ obj ԿԵՏ մեթոդ, այսինքն էսպես՝ obj.method(),
// ապա this-ը էս method() անունով ֆունկցիայի ներսում կլինի միշտ կետից առաջ գրված object-ը, այսինքն տվյալ դեպքում this = obj
// Եթե ֆունկցիան կանչվել է ոչ որպես object-ի method, ապա this-ը կլինի՝ "strict mode"-ում՝ undefined, "ոչ strict mode"-ում՝ global object window-ն:

// Իսկ arrow function-ները վերը նշված կանոններից և ոչ մեկին չեն ենթարկվում:
// Ձևակերպենք հետևյալ կերպ. arrow function-ը չունի իր սեփական this-ը: THIS-ը ARROW FUNCTION-ՈՒՄ ԴԱ ԷՆ ENVIRONMENT-Ի THIS-Ն Ա, ՈՐՏԵՂ ՈՐ ԳՐՎԱԾ Է ARROW FUNCTION-Ը: Այլ կերպ ասած,
// arrow function-ը իր համար որպես this վերցնում է outer scope-ում this-ի արժեքը:

//function Constructor1

function StexcirMercedes(model, year){
    this.maknish = model;
    this.tiv = year;
  }
  let imAvton = new StexcirMercedes('Fusion', 2016);
  console.log(imAvton)

//function Constructor2

  function Market(product, aghjik){
    this.isOpen = false;
    this.product = product;
    if(aghjik instanceof Girl){
      this.girl = aghjik
    }
    else{
      this.girl = 'instanse che'
    }
    this.open = function(){
      this.isOpen = true;
    }
    this.close = function(){
      this.isOpen = false;
    }
  }
  
  function Girl(name, age){
    this.name = name;
    this.age = age;
  }
  
  let market1 = new Market('kanachi, sox', new Girl('Manush', 27));
  console.log(market1)

  //Symbol To Primitive

  let obj = {
    name: 'hamo'
  }
  
  obj[Symbol.toPrimitive] = function(hint){
    console.log(hint, 'My obj to primitive')
    return this.age;
  }

// Եթե hint-ը number է կամ եթե hint-ը default է, կանչվում է object-ի valueOf-ը եթե կա վերջ, եթե չէ նոր կկանչվի object-ի toString-ը:
// Եթե hint-ը string է, ապա նախ կանչվում է object-ի toString-ը, եթե չէ նոր կկանչվի object-ի valueOf-ը:

// Array Methods

let arr = [1, 2, 3, 4, 5, 6];

function cB(item){
  console.log(this)
  return item * 5;
}

let x = arr.map(cB, {obj: 'obj'})

console.log(x)

// Այսինքն էս cB ֆունկցիայի մեջ գրված console.log(this) this-ը դա let x = arr.map(cB, {obj: 'obj'}) էն {obj: 'obj'}-ն է:

// ԱՅՍԻՆՔՆ Ի՞ՆՉ OBJECT որպես THIS հանդես գա էս ֆունկցիայի մեջ՝ 

// cB(item){
//   console.log(this)
//   return item * 5;
// }

// Callback-ի երկրորդ արգումենտը որպես this հանդես կգա callback-ի առաջին արգումենտի մեջ:

// filter-ն էլ է վերադարձնում նոր array, որի մեջ կլինեն այն էլեմենտները, որոնք truthy value են, դա կնշանակի, որ filter եղղած array-ում ես ուզում եմ, որ array-ի էդ էլեմենտը լինի:
// Եթե false value եղավ՝ էդ էլեմենտը ֆիլտր կլինի և դուրս կգա:

// find-ը վերադարձնում է առաջին truthy արժեքը: Մի հատ թիվ ասենք, ոչ թե array, ու էլի նախորդի հետ բան չի անում:

// arr.forEach-ը ոչինչ չի վերադարձնում, մենակ ցիկլ է ֆռում:

let arrObj = [
  {name: 'Hamlet', surName: 'Muradyan'},
  {name: 'Ani', surName: 'Davtyan'},
];
arrObj.forEach(item => item.fullName = `${item.name} ${item.surName}`);
console.log(arrObj);

// forEach-ը կգրենք, երբ որ հարկավոր չի ինչ որ array վերադարձնել, այլ ուզում ենք էղածի վրա ցիկլ ֆռանք ու ինչ-որ բան փոխենք հենց մեր սկզբնական array-ի մեջ:

// arr.every > արդյոք ՅՈՒՐԱՔԱՆՉՅՈՒՐԸ բավարարում է ինչ-որ պայմանի:

// arr.sum > արդյոք ԻՆՉ-ՈՐ ՄԵԿԸ բավարարում է ինչ-որ պայմանի:

//Promises

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(console.log);

  //Clases

  class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  // Использование:
  let user = new User("Hovo");
  user.sayHi();