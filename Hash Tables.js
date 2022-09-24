// Implementing Hash Tables
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const spaceIndex = this._hash(key);
    const hashTable = [key, value];
    if (!this.data[spaceIndex]) {
      this.data[spaceIndex] = [];
      this.data[spaceIndex].push(hashTable);
    } else {
      this.data[spaceIndex].push(hashTable);
    }
  }

  get(key) {
    const spaceIndex = this._hash(key);
    const bucket = this.data[spaceIndex];
    if (bucket) {
      bucket.forEach((table) => {
        if (table[0] === key) {
          return table[1];
        }
      });
    }
    return undefined;
  }

  //   O(n)
  keys() {
    const keys = [];
    this.data.forEach((memorySpace) => {
      if (memorySpace) {
        keys.push(memorySpace[0][0]);
      }
    });
    return keys;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(20);
myHashTable.set("grapes", 100);
myHashTable.get("apples", 50);
myHashTable.keys();
