import React from 'react';
import { Container, TabWrapper, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <Container>
      <TabWrapper>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Share with Friends</TabText>
        </TabItem>
      </TabWrapper>
    </Container>
  );
}
