import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <Row style={{display: "flex"}}>
            {device.brands.map(brand =>
                <Card
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    style={{width: 100, textAlign: "center", cursor: "pointer"}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
})

export default BrandBar;