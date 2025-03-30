class MyLibrary {
  constructor() {
    this.version = '1.0.0';
  }

  greet() {
    if (typeof window !== 'undefined') {
      return 'Hello Browser!';
    }
    return 'Hello Node.js!';
  }
}

module.exports = MyLibrary;