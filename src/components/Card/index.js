import React from 'react';
import {
  Container,
  CardWrapper,
  CardHeader,
  CardBody,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Card() {
  return (
    // <Container>
    <CardWrapper>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardBody>
        <Title>Account Balance</Title>
        <Description>NZD $16,974.26</Description>
      </CardBody>
      <CardFooter>
        <Annotation>
          Deposit of NZD $20.00 recived from Daiane Ramos today at 3:00pm
        </Annotation>
      </CardFooter>
    </CardWrapper>
    // </Container>
  );
}
