var LRU = function (capacity) {
    this.capacity = typeof capacity === 'number' ? capacity : Infinity;
    this.cache = new Map();
};
LRU.prototype.get = function (key) {
    const value = this.cache.get(key);
    if (!value) return null;
    // Delete and set again to maintain the order
    this.cache.delete(key);
    this.cache.set(key, value);
    return this.cache.get(key);
};
LRU.prototype.set = function (key, value) {
    // If cache capacity is full and the key is new, remove the lru item
    if (this.cache.size === this.capacity && !this.cache.get(key)) {
        const firstKey = this.cache.keys().next().value;

        this.cache.delete(firstKey);
        this.cache.set(key, value);
    }
    this.cache.delete(key);
    this.cache.set(key, value);
};

LRU.prototype.print = function() {
    for (let [key, value] of this.cache) {
        console.log(`${key} => ${value}`);
    }
}

const cache = new LRU(2);
cache.set("name", "Arun Singh");
cache.set("age", 25);
cache.set("course", "Backend");

console.log(cache.get("name"));
console.log(cache.get("age"));
console.log(cache.get("course"));
console.log("**************Print***************");
console.log(cache.print());

/* 
Claases Object
Map
LRU Cache
cache
event loop
clustering
worker threads
 */