import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom"

const NavBar = observer(() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth
                    ?<Nav className="ml-auto">
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Войти
                        </Button>
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