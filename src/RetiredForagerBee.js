class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.color: 'grey';
    this.canFly = false;
    this.treasureChest = [];
  }
  forage() {
    'I am too old, let me play cards instead'
  }
  gamble() {
    this.treasureChest.push(treasure);
  }
};
