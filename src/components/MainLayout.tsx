import React from 'react';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";
import { Container } from '@chakra-ui/react';

const MainLayout = () => {
    return (
      <Container maxW="1400px">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Container>
    );
};

export default MainLayout;