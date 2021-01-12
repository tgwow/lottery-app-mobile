import React from 'react';
import { View } from 'react-native';
import Header from '../../../components/Layout/Header';
import SecondaryHeading from '../../../components/UI/Heading/Secondary';
import Container from '../../../components/Layout/Container';
import Filter from '../../../components/Filter';
import BetDescription from '../../../components/Bet/BetDescription';
import TertiaryHeading from '../../../components/UI/Heading/Tertiary';
import BetControl from '../../../components/Bet/BetControl';
import Separator from '../../../components/UI/Separator';
import NumbersPad from '../../../components/Bet/NumbersPad';
import { COLORS } from '../../../styles/colors';
import Drawer from '../../../components/Drawer';

const styles = {
  marginBottom: 13,
};
const NewBet = () => {
  const betName = 'lotomania';
  return (
    <>
      <Drawer>
        <Header />
        <Container>
          <SecondaryHeading>New bet for {betName} </SecondaryHeading>
          <TertiaryHeading style={styles}>Choose a game</TertiaryHeading>
          <Filter />
          <BetDescription />
          <BetControl style={{ marginTop: 15 }} />
          <Separator />
          <NumbersPad range={40} color={COLORS.lotofacil} />
        </Container>
      </Drawer>
    </>
  );
};
export default NewBet;
