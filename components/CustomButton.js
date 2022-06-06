import React from 'react';
import '../styles/CustomButton.module.scss';
import { CustomButtonContainer } from './CustomButtonstyles'


const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer  {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton