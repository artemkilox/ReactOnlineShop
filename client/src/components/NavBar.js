import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {

    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth
                    ?<Nav className="ml-auto">
                        <Button >Админ панель</Button>
                        <Button >Выйти</Button>
                    </Nav>
                    : <Nav className="ml-auto">
                        <Button onClick={() => user.setIsAuth(true)} >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;