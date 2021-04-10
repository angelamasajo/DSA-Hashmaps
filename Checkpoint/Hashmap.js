class HashMap {
  constructor(initialCapacity=8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key)
    if (this._hashTable[index] === undefined) {
      throw new Error ('Key error')
    }
    return this._hashTable[index].value
  }

  // locates the correct slot for an item and adding item to hash map
  // function call set() and helper function _findSlot()
  // O(1) - best and avg case
  // O(n) - worst case, if collision takes place
  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity
    
    // set() - initially checks whether load ratio is greater than given max
    // if so, uses hash map to _resize() function
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO)
    }
    // find the slot where this key should be in
    // and adds object to array contaning the key/value pair, increasing length
    const index = this._findSlot(key)

    if(!this._hashTable[index]) {
      this.length++
    }
    this._hashTable[index] = {
      key,
      value,
      DELETED: false
    }
  }

  delete(key) {
    const index = this._findSlot(key)
    const slot = this._hashTable[index]
    if (slot === undefined) {
      throw new Error ('Key rror')
    }
    slot.DELETED = true
    this.length--
    this._deleted++
  }

  // used to find correct slot for given keyx
  // O(1) - best and average case performance
  // O(n) - worst case as you have to linearly search through each slot
  _findSlot(key) {
    // uses _hashString() to calculate has hof key, and uses modulus
    // to find slot fo key within current capacity
    const hash = HashMap._hashString(key)
    const start = hash % this._capacity

    // loops through array and stops when it finds slot with matching key or empty slot
    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity
      const slot = this._hashTable[index]
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index
      }
    }
  }

  // O(n) - best and avg case bc you have to call set() for each item
  // O(n^2) - worst case
  _resize() {
    const oldSlots = this._hashTable
    this._capacity = size 
    // reset length - it will get rebuilt as you add items back
    this.length = 0
    this._hashTable = []

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value)
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
        //Bitwise left shift with 5 0s - this would be similar to
        //hash*31, 31 being the decent prime number
        //but bit shifting is a faster way to do this
        //tradeoff is understandability
        hash = (hash << 5) + hash + string.charCodeAt(i);
        //converting hash to a 32 bit integer
        hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negative number. 
    return hash >>> 0;
  }

}