import React from 'react';
import { Container, Code } from './styles';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://nubank.com.br/"
          bgColor="#8B10AE"
          fgColor="#FFF"
          size={80}
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon />
        </NavItem>
      </Nav>
    </Container>
  );
}
