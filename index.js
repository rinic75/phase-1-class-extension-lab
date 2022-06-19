// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
    this.numSide = this.array.length;
  }
  get countSides() {
    return this.array.length;
  }
  get perimeter() {
    let sum = 0
    for(let i of this.array) {
      sum += i
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.numSide !== 3){
      return false
    }
    return ((this.array[0] + this.array[1] > this.array[2]) && (this.array[1] + this.array[2] > this.array[0]) && (this.array[0] + this.array[2] > this.array[1]))
  }
}

class Square extends Polygon {
  get isValid () {
    if(this.numSide !== 4) {
      return false
    } else {
    return ((this.array[0]===this.array[1])&&(this.array[0]===this.array[2])&&(this.array[0]===this.array[3]))
    }
  }
  get area() {
    if(this.numSide !== 4) {
      return false
    } else {
    return this.array[0] * this.array[1]
    }
  }
}

