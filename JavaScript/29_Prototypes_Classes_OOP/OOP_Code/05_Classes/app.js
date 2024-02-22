class Color {
  constructor(r, g, b, name) {
    // This function will run automatically whenever you instantiate a new instance of the class.
    // So we don't call it manually,
    this.r = r;
    // inside of that constructor and inside of the entire class,
    // if we're in a method like I have here, constructor or down here, the keyword this will refer to the individual object.
    this.g = g;
    this.b = b;
    // So this.R, this.G, this.B, I'm assigning properties to each color, not to the prototype, but to the color.
    this.name = name;
    // So this, anytime we're inside of a class, this refers to the instance of the class,
    // So not the prototype or anything.
    // not the function, not the window,
  }
  // Then these methods I've added, they are added to the prototype automatically.
  // So I don't have to do any of this color.prototype.blah, blah, blah.
  // can keep everything together inside this class.
  // I don't have to have the separate constructor function,
  // then later add my methods.
  // I can put it all in one happy family and define my class,
  // 	define my pattern for every color
  // Every color has an R, G and B and a name
  // And every color has these four methods,

  // but they're located on the prototype.

  // They look up to that one prototype template object.
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
