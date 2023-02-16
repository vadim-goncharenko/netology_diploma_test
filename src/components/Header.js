import React, { Component } from 'react'
import logo from '../img/header-logo.png'

export default class Header extends Component {
  render() {
    return (
      <header class="container">
        <div class="row">
          <div class="col">
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
              <a class="navbar-brand" href="/">
                <img src={logo} />
              </a>
              <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Главная
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Catalog">
                      Каталог
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/About">
                      О магазине
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Contacts">
                      Контакты
                    </a>
                  </li>
                </ul>
                <div>
                  <div class="header-controls-pics">
                    <div
                      data-id="search-expander"
                      class="header-controls-pic header-controls-search"
                    ></div>
                    <div class="header-controls-pic header-controls-cart">
                      <div class="header-controls-cart-full">1</div>
                      <div class="header-controls-cart-menu"></div>
                    </div>
                  </div>
                  <form
                    data-id="search-form"
                    class="header-controls-search-form form-inline invisible"
                  >
                    <input class="form-control" placeholder="Поиск"></input>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

