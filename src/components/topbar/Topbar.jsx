import React from 'react';
import './topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    return (
        <div className="topbar">

            <img src="./img/forComponents/Logo.svg" alt="" className="logo"/>

            <div className="navbarWrapper">

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Категориялар
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <div className="searchbar">
                    <input
                        placeholder="Искать"
                        className="searchInput"
                    />
                    <SearchIcon className="search"/>
                </div>

                <div className="navbarEnd">
                    <div className="navbarText">
                        Курс авторларына
                    </div>

                    <div className="languages">KZ</div>
                    <div className="languages">RU</div>
                    <div className="languages">ENG</div>

                </div>
                <button className="navbarLogin">Kiру</button>
            </div>
        </div>
    );
};

export default Topbar;