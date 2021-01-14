import React from 'react';
import Header from '../../../components/Layout/Header';
import SecondaryHeading from '../../../components/UI/Heading/Secondary';
import Container from '../../../components/Layout/Container';
import Text from '../../../components/UI/Text';
import Filter from '../../../components/Filter';
import BetSummary from '../../../components/Bet/BetSummary';
import { COLORS } from '../../../styles/colors';

const RecentGames = ({ open }) => {
  return (
    <>
      <Header open={open} />
      <Container>
        <SecondaryHeading>Recent Games</SecondaryHeading>
        <Text>Filters</Text>
        <Filter />
        <BetSummary color={COLORS.lotofacil} name="Lotofácil" />
        <BetSummary color={COLORS.mega_sena} name="Mega-Sena" />
        <BetSummary color={COLORS.lotomania} name="Lotomania" />
      </Container>
    </>
  );
};
export default RecentGames;
