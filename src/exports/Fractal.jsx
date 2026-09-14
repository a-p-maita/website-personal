function doMath(width, height) {
  // do magic
  return result;
}

class Fractal extends React.Component {
  render() {
    const { width, height } = this.state;
    const result = doMath(width, height);

    // render something
    // use result
  }
}

// emphasize export
module.exports = Fractal;

class Fractal extends React.Component {
  /* private */ doMath() {
    // You have access to this particular instance and its state
    const { width, height } = this.state;
  }
}

/*This makes it available to be imported in other react files etc.*/
export default Fractal;
