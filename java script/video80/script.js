class animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log("khaa raha hoo");
  }
  jumps() {
    console.log("kood raha hu");
  }
}

class rabit extends animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let r = new rabit("bunny");
console.log(r.name);
r.eats();
r.jumps();
