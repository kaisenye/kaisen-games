import React from 'react';

const NavBar = () => {
      
    return (
        <nav class="navigation navigation--inline">
            <ul>
              <li>
                <a href="#">
                  <span class="nav-title">主页/其他游戏</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="nav-title">关于作者</span>
                </a>
              </li>
            </ul>
        </nav>
    );
};

export default NavBar;
