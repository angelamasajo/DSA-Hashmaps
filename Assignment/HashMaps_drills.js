const HashMap = require('./Hashmap')

main =() => {
  const lotr = new HashMap()
  lotr.MAX_LOAD_RATIO = 0.5
  lotr.SIZE_RATIO = 3

  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandolf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')

  console.log('Maiar =', lotr.get('Maiar')) // Sauron
  console.log('Hobbit =', lotr.get('Hobbit')) // Frodo
  // I am getting Sauron and Frodo because we have 2 keys storing 
  // 2 different values and its only showing the latter value 
  // due to not having anything to resolve collisions


  console.log(lotr._capacity)
  return lotr
  
}

console.log(main())

