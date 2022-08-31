`use strict`

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {likes: 0};
        this.i = 1
    }

    render() {
        if (this.state.likes === 0) {
           this.i = 1
        }

        if (this.state.likes === 10) {
            this.i = -1 
        }

        return e(
            'button',
            { onClick: ()=> this.setState({likes : this.state.likes + this.i}), className : "btn btn-primary"},
            `Likes (${this.state.likes})`
        )
    }
}

const domContainer = document.querySelector("#mycomp");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));