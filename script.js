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