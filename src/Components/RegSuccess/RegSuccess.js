import React from 'react';
import { Col, Image } from 'react-bootstrap';
import img1 from '../../Images/thankyou.jpg'
const RegSuccess = () => {
    return (
        <div>
            <h4>Congratulation! Thank you for your Registration</h4>
            <Image width="50%" src={img1}></Image>
        </div>
    );
};

export default RegSuccess;