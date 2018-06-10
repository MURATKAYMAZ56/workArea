import React, { Component } from "react";

class Paragraph1 extends Component {
    render() {
        return (
            <div>
                <p style={{ color: "green" }}>JSX is writing HTML code in react :)</p>
            </div>

        )
    }

}
class Paragraph3 extends Component {
    render() {
        return (
            <div>
                this is p3 just an exp
            </div>

        )
    }

}

export { Paragraph3 }

export default Paragraph1;