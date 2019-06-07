import React from 'react';

let profileData;


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
    this.getData = this.getData.bind(this);
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
    let dataToSend = this.state;
    event.preventDefault();
    try {
     await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body : JSON.stringify({
          dataToSend
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      console.log('error', error)
    }
  } 

  
  async getData() {
    fetch('http://localhost:3000/posts', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          // 'Access-Control-Allow-Origin': '*'
        }
      }).then(dataWrappedByPromise => dataWrappedByPromise.json())
      .then((res) => {

        profileData = res[res.length-1];
        console.log(profileData)
      })
  } 

  
  componentDidMount(){
    this.getData();
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
        <button onClick={this.getData}>Click me</button>
        <input type="submit" value="Submit" />
      </form>

    
      
      
      
    );
  } 
}



