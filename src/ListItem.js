import { Component } from "react";
import check from './emoji.png';

export class ListItem extends Component {
state = {
    userInput: "",
    listItem: []
}
    onChangeEvent(e) {
        this.setState({userInput: e})
    }


addItem(input) {
    if (input === '') {
        alert ("Please enter an item");
    }
    else {
    let listArray = this.state.listItem;
    listArray.push(input);
    this.setState({listItem: listArray, userInput: ''})
    }
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem() {
    let listArray = this.state.listItem
    listArray = [];
    this.setState({listItem: listArray})
    console.log(listArray)
}

onFormSubmit(e) {
e.preventDefault();
}

render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
<input type="text"
placeholder="What do I love to do?"
onChange={(e) => {this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/>
        </div>

    <div className="container">
<button onClick={() => this.addItem(this.state.userInput)} className="add btn">Add your dream</button>
    </div>

<ul>
    {this.state.listItem.map((item, index) => (
    <li className="words" onClick={this.crossedWord} key={index}>
        <img src={check} alt="star" width="40px" />
        {item}</li>
    ))}
</ul>


<div className="container">
    <button onClick={() => this.deleteItem()} className="delete btn">Delete</button>
</div>
</form>
        </div>
    )
}

}


