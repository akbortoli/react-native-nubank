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
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Collect</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Deposit</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Pay</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Block Card</TabText>
        </TabItem>
      </TabWrapper>
    </Container>
  );
}
