import React,{Component} from "react";
import ThemeContext from "../contexts/ThemeContext";

class Navbar extends Component {
    static contextType = ThemeContext

  render() {
      console.log(this.context)
    return (
      <nav>
        <h1>context app</h1>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
