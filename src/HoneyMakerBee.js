class HoneyMakerBee extends Bee{
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.makeHoney = function () {
      return this.honeyPot += 1;
    }
    this.giveHoney = function () {
      return this.honeyPot -= 1;
    }
  }
};
