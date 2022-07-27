import './App.css';
import React from 'react'
import apple from './apple.png'
import orange from './orange.png'
import pizza from './pizza.png'
import chocolate from './chocolate.png'
import noodles from './noodles.png'
import burger from './burger.png'
import momo from './momo.png'
import fries from './fries.png'


class FoodBox extends React.Component {

  constructor() {
    super()
    this.state = {
      "apple": 0,
      "orange": 0,
      "noodles": 0,
      "pizza": 0,
      "chocolate": 0,
      "burger": 0,
      "momo": 0,
      "fries": 0,

      "appleC": 100,
      "orangeC": 160,
      "noodlesC": 300,
      "pizzaC": 400,
      "chocolateC": 200,
      "burgerC": 500,
      "momoC": 260,
      "friesC": 340,

      foodList : ["apple", "orange", "pizza", "chocolate", "noodles", "burger", "momo", "fries"],
      searchTerm : "",
      "totalCalories" : 0
  }
}

  addQtyAndCal(name, cal, val){
    val = parseInt(val)
    cal = parseInt(cal)
    this.setState({[name]: parseInt(this.state[name])+val})
    cal = cal*val
    this.setState({totalCalories: parseInt(this.state.totalCalories)+cal})
  }

  deleteThis(foodname){
    let foodCal = foodname+"C"
    this.setState({totalCalories: parseInt(this.state.totalCalories)-parseInt(this.state[foodCal])*parseInt(this.state[foodname])})
    this.setState({[foodname] : 0})
  }

  foodObject = {
    "apple": 
          <div className="box">
            <div className="image">
              <img src={apple} height="100" width="100" />
            </div>
          <div className="info">
            <p>Apple<br/>
              100 cal
            </p>
          </div>
          <div className="quantity">
            <input className="input" id='apple' type="number" defaultValue="1"/>
            <button className="button" onClick={() => this.addQtyAndCal("apple", 100, document.querySelector("#apple").value)}>+</button>
          </div>
        </div>,

    "orange": 
            <div className="box">
              <div className="image">
                <img src={orange} height="90" width="100" />
              </div>
              <div className="info">
                <p>Orange<br/>
                  160 cal
                </p>
              </div>
              <div className="quantity">
              <input className="input" type="number" defaultValue="1"  id="orange"/>
              <button className="button" onClick={() => this.addQtyAndCal("orange", 160, document.querySelector("#orange").value)}>+</button>
              </div>
            </div>,
    "pizza":
          <div className="box">
                <div className="image">
                  <img src={pizza} height="100" width="100" />
                </div>
                <div className="info">
                  <p>Pizza<br/>
                    400 cal
                  </p>
                </div>
                <div className="quantity">
                  <input className="input" type="number" defaultValue="1" id="pizza"/>
                  <button className="button" onClick={() => this.addQtyAndCal("pizza", 400, document.querySelector("#pizza").value)}>+</button>
                </div>
              </div>,
    "chocolate":
              <div className="box">
              <div className="image">
                <img src={chocolate} height="100" width="100" />
              </div>
              <div className="info">
                <p>Chocolate<br/>
                  200 cal
                </p>
              </div>
              <div className="quantity">
                <input className="input" type="number" defaultValue="1" id="chocolate"/>
                <button className="button" onClick={() => this.addQtyAndCal("chocolate", 200, document.querySelector("#chocolate").value)}>+</button>
              </div>
            </div>,

    "noodles":
          <div className="box">
                <div className="image">
                  <img src={noodles} height="100" width="100" />
                </div>
                <div className="info">
                  <p>Noodles<br/>
                    300 cal
                  </p>
                </div>
                <div className="quantity">
                  <input className="input" type="number" defaultValue="1"  id="noodles"/>
                  <button className="button" onClick={() => this.addQtyAndCal("noodles", 300, document.querySelector("#noodles").value)}>+</button>
                </div>
              </div>,
    "burger":
    <div className="box">
          <div className="image">
            <img src={burger} height="100" width="100" />
          </div>
          <div className="info">
            <p>Burger<br/>
              500 cal
            </p>
          </div>
          <div className="quantity">
            <input className="input" type="number" defaultValue="1"  id="burger"/>
            <button className="button" onClick={() => this.addQtyAndCal("burger", 500, document.querySelector("#burger").value)}>+</button>
          </div>
        </div>,
    "momo":
    <div className="box">
          <div className="image">
            <img id="shi" src={momo} height="90" width="80" />
          </div>
          <div className="info">
            <p>Dumpling<br/>
              260 cal
            </p>
          </div>
          <div className="quantity">
            <input className="input" type="number" defaultValue="1"  id="momo"/>
            <button className="button" onClick={() => this.addQtyAndCal("momo", 260, document.querySelector("#momo").value)}>+</button>
          </div>
        </div>,
      "fries":
      <div className="box">
            <div className="image">
              <img id="shi" src={fries} height="80" width="80" />
            </div>
            <div className="info">
              <p>Fries<br/>
                340 cal
              </p>
            </div>
            <div className="quantity">
              <input className="input" type="number" defaultValue="1"  id="fries"/>
              <button className="button" onClick={() => this.addQtyAndCal("fries", 340, document.querySelector("#fries").value)}>+</button>
            </div>
          </div>,                   
          
}

  DynamicSearch = (str) => {
    return this.state.foodList.filter(ele => ele.toLowerCase().includes(str.toLowerCase()))
  }

  render() {
    let found = []
    found = this.DynamicSearch(this.state.searchTerm)
  console.log(this.state)
    return <>
  <div id="pro"><h1 id="pr">Pro-Nutrition</h1></div>
  <div className="parent">
    <div>
        <input type="text" className="search" placeholder="Enter food" onChange={(e) => {this.setState({searchTerm: e.target.value}) } } />
    {found.map(ele => (
        this.foodObject[ele]
      ))}
    </div>

    <div id="Today">
    <h1>Today's Food</h1>
    <span>Total = {this.state.totalCalories}</span> <span>Cal</span><br></br><br></br>
      {
      this.state.foodList.map(ele =>{
        let calories = ele + "C"
        if(parseInt(this.state[ele])>0)
        return <div id="res"><div>{this.state[ele]} {ele}</div> <div>=</div> <div>{parseInt(this.state[calories])*parseInt(this.state[ele])} cal</div> <div><button id="res1" onClick={()=>this.deleteThis(ele)}>X</button></div></div>
      }
      )
    }
    </div>  
  </div>
    </>
  }
  }

export default FoodBox;
