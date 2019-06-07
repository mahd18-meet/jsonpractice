import React from 'react';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 18,
      address: '',
      phone: 7777777,
      isStudent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    console.log(this.state)
    let dataToSend = this.state;
    event.preventDefault();
    try {
     let results = await fetch('http://localhost:3003/posts', {
        method: 'POST',
        // mode: 'no-cors',
        body : JSON.stringify({
          dataToSend
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          // 'Access-Control-Allow-Origin': '*'
        }
      })

      console.log('here are results', results)
    } catch (error) {
      console.log('error', error)
    }
    
  
    
  } 
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          <br></br>
          Age:
          <input type="number" name ="age" value={this.state.value} onChange={this.handleChange} />
          <br></br>
          Address:
          <input type="text" name="address" value={this.state.value} onChange={this.handleChange} />
          <br></br>
          Phone:
          <input type="telephone" name="phone" value={this.state.value} onChange={this.handleChange} />
          <br></br>
          Student?
          <input type="checkbox" name="isStudent" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



