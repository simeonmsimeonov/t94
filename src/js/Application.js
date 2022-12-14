import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas(monkeyArr) {
    monkeyArr = this.emojis.map((e) => {
      return monkeyArr.push(`${e} ${this.banana}`);
    });
  }
}
