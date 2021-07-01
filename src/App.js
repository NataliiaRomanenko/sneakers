import React from 'react';
import Logo from './img/logo.png';
import Basket from './img/basket.svg';
import User from './img/user.svg';
import Plus from './img/plus.svg';
import SneakerImg from './img/sneakers/1.jpg'


function App() {
  return(
      <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img width={40} height={40} src={Logo} alt="Sneakers"/>
            <div>
              <h3 className='text-uppercase'>Sneakers</h3>
              <p className="opacity-5">The shop of sneakers</p>
            </div>
          </div>
          <ul className='d-flex'>
            <li>
              <img width={18} height={18} src={Basket} alt="basket"/>
              <span> 124 $</span>
            </li>
            <li>
              <img width={18} height={18} src={User} alt="user"/>
            </li>
          </ul>

        </header>
        <div className="content p-40">
          <h1 className="mb-40">All sneakers</h1>
          <div className='d-flex '>
            <div className="card p-20">
              <img width={133} height={112} src={SneakerImg} alt="sneaker"/>
              <h5>Men's sneakers</h5>
              <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                  <span>Price:</span>
                  <b>124 $</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src={Plus} alt="plus"/>
                </button>
              </div>
            </div>
            <div className="card p-20">
              <img width={133} height={112} src={SneakerImg} alt="sneaker"/>
              <h5>Men's sneakers</h5>
              <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                  <span>Price:</span>
                  <b>124 $</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src={Plus} alt="plus"/>
                </button>
              </div>
            </div>
            <div className="card p-20">
              <img width={133} height={112} src={SneakerImg} alt="sneaker"/>
              <h5>Men's sneakers</h5>
              <div className='d-flex justify-between align-center'>
                <div className="d-flex flex-column">
                  <span>Price:</span>
                  <b>124 $</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src={Plus} alt="plus"/>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
  )

}

export default App;
