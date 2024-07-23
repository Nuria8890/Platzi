const personalizedMessage = () => 'we are on fire'
function Rocket (name, ownMessage) {
  this.name = name
  /*this.launchMessage = function (){
    console.log(ownMessage)
  }*/
  this.launchMessage = () => ownMessage
  this.launchMessage2 = ownMessage
}

const falcon9Rocket = new Rocket('Falcon9', 'Googdbye everybody')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)
console.log(falconHeavyRocket.name)
console.log(falconHeavyRocket.launchMessage2())

const RocketWithArrowFunction = (name, ownMessage) => ({
  name: name,
  launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successful launch !'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon9-1', personalizedMessageForArrowFunction)

console.log(falcon9Rocket1.name)
console.log(falcon9Rocket1.launchMessage())