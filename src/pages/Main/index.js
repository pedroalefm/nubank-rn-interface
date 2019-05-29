import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../Header';
import Tabs from '../Tabs';
import Menu from '../Menu';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function Main() {
  const translateY = new Animated.Value(0.01);
  console.log(translateY);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  function onHandlerStateChanged(event) {}

  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title> Saldo disponível</Title>
              <Description>R$ 10.000.000</Description>
            </CardContent>

            <CardFooter>
              <Annotation>Tranferência de R$ 1.000.000 recebida de Bill Gates hoje às 06:00h</Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
}
