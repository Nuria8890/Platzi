// Create PowerfullGirl objets
function PowerpuffGirl (name, color, superPower) {
  this.name = name
  this.color = color
  this.superPower = superPower
  this.isLeader = false

  this.displayInfo = function () {
    console.log(`Powerpuff Girl Information
      Name: ${this.name}
      Color: ${this.color}
      Superpower: ${this.superPower}
      ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
      `)
  }

  this.becomeLeader = function () {
    this.isLeader = true
    console.log(`${this.name} has become the leader of the Powerpuff Girls
      `)
  }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice breath')
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength')
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight')

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()


buttercup.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()


