class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.color: 'grey';
    this.canFly = false;
    this.treasureChest = [];
    this.forage = function () {
      return 'I am too old, let me play cards instead'
    }
    this.gamble = function (treasure) {
      this.treasureChest.push(treasure);
    }
  }
};
