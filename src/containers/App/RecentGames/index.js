import React, { useEffect } from 'react';
import { ScrollView, Button } from 'react-native';
import { connect, useSelector } from 'react-redux';
import Header from '../../../components/Layout/Header';
import SecondaryHeading from '../../../components/UI/Heading/Secondary';
import Container from '../../../components/Layout/Container';
import Text from '../../../components/UI/Text';
import BetSummary from '../../../components/Bet/BetSummary';
import Spinner from '../../../components/UI/Spinner';
import Filter from '../../../components/Filter';
import { Creators as betsActions } from '../../../redux/ducks/bets';
import { Creators as typesActions } from '../../../redux/ducks/types';
import useAlert from '../../../hooks/useAlert';

const subTitle = {
  marginBottom: 13,
  fontSize: 18,
};
const paragraph = {
  marginTop: 20,
  fontSize: 17,
};

const RecentGames = ({ open, fetchBets, fetchTypes, navigation }) => {
  const { error, bets } = useSelector((state) => state.betsReducer);
  const { selectedType } = useSelector((state) => state.filterReducer);

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log(1);
      fetchBets();
    });
  }, [navigation, fetchBets]);

  useEffect(() => {
    fetchTypes();
  }, [fetchTypes]);

  let content = <Spinner />;
  if (bets.length > 0) {
    content = bets
      .filter((bet) => selectedType.includes(bet.type.name))
      .map((bet) => (
        <BetSummary
          numbers={bet.numbers}
          id={bet.id}
          key={bet.id}
          date={bet.due_date}
          color={bet.type.color}
          name={bet.type.name}
          price={bet.type.price}
        />
      ))
      .reverse();
    if (content.length === 0)
      content = (
        <Text style={paragraph}>
          {selectedType.length === 0
            ? 'Please, select an option to filter.'
            : `There is no bet for ${
                selectedType.join(', ') || 'this option'
              } `}
        </Text>
      );
  } else if (bets.length === 0) {
    content = <Text style={paragraph}>There is no games yet!</Text>;
  } else if (error) content = <Text style={paragraph}>{error}</Text>;
  return (
    <>
      <Header open={open} />
      <Container>
        <SecondaryHeading>Recent Games</SecondaryHeading>
        <Text style={subTitle}>Filters</Text>
        <Filter />
        <ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
          {content}
        </ScrollView>
      </Container>
    </>
  );
};
export default connect(null, {
  ...betsActions,
  ...typesActions,
})(RecentGames);
