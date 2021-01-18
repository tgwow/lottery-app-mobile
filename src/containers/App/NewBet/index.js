import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import format from 'date-fns/format';
import Header from '../../../components/Layout/Header';
import SecondaryHeading from '../../../components/UI/Heading/Secondary';
import Text from '../../../components/UI/Text';
import Spinner from '../../../components/UI/Spinner';
import Container from '../../../components/Layout/Container';
import BetDescription from '../../../components/Bet/BetDescription';
import BetControl from '../../../components/Bet/BetControl';
import Separator from '../../../components/UI/Separator';
import NumbersPad from '../../../components/Bet/NumbersPad';
import SelectedNumbers from '../../../components/Bet/SelectedNumbers';
import Filter from '../../../components/Filter';
import { COLORS } from '../../../styles/colors';
import { Creators as cartCreators } from '../../../redux/ducks/cart';
import { Creators as filterCreators } from '../../../redux/ducks/filter';

const styles = {
  marginBottom: 13,
  fontSize: 18,
};
const NewBet = React.memo(({ open, addToCart, clearType, navigation }) => {
  const { types } = useSelector((state) => state.typesReducer);
  const { selectedType } = useSelector((state) => state.filterReducer);
  const [betType, setBetType] = useState(null);

  useEffect(() => {
    const cleanup = navigation.addListener('focus', () => {
      clearType({ optionType: 'Lotofácil' });
    });
    return cleanup;
  }, [navigation]);

  useEffect(() => {
    const type = types.filter((type) => type.name === selectedType[0])[0];
    setBetType(type);
    handleClearGame();
  }, [selectedType]);

  const [selectedNums, setSelectedNums] = useState([]);

  const generateRandomNumber = () => {
    return Math.round(Math.random() * betType.range + 1);
  };
  const handleCompleteGame = () => {
    const updatedNumbers = [...selectedNums];

    while (updatedNumbers.length < betType['max_number']) {
      let number = generateRandomNumber();
      while (updatedNumbers.includes(number)) number = generateRandomNumber();
      updatedNumbers.push(number);
    }
    setSelectedNums(updatedNumbers);
  };

  const handleClearGame = () => {
    setSelectedNums([]);
  };

  const handleAddToCart = () => {
    if (selectedNums.length < 1) alert('Select one number at least.');
    const bet = {
      id: Date.now() + betType.id,
      numbers: selectedNums.sort((a, b) => a - b).toString(),
      type_id: betType.id,
      due_date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      price: betType.price,
      name: betType.name,
      color: betType.color,
    };
    addToCart(bet, bet.price);
    handleClearGame();
  };
  const removeValueFromArray = (arr, value) => {
    return arr.filter((item) => item !== value);
  };

  const handleNumberPressed = (e) => {
    const numberIndex = selectedNums.includes(e);
    const updatedNumbers = [...selectedNums];

    if (updatedNumbers.length < betType['max_number']) {
      if (numberIndex) setSelectedNums(removeValueFromArray(updatedNumbers, e));
      else {
        updatedNumbers.push(e);
        setSelectedNums(updatedNumbers);
      }
    } else if (numberIndex) {
      setSelectedNums(removeValueFromArray(updatedNumbers, e));
    } else {
      alert(`You can select ${betType['max_number']} numbers.`);
    }
  };

  let description;
  let content;
  let header;

  if (betType) {
    header = (
      <>
        <SecondaryHeading>New bet for {betType.name} </SecondaryHeading>
        <Text style={styles}>Choose a game</Text>
        <Filter behavior="single" />
      </>
    );
    description =
      selectedNums.length < 1 ? (
        <BetDescription description={betType} />
      ) : (
        <>
          <SelectedNumbers
            selectedNums={selectedNums}
            color={betType.color}
            onPress={handleNumberPressed}
          />
          <BetControl
            style={{ marginTop: 10 }}
            completeGame={handleCompleteGame}
            clearGame={handleClearGame}
            addToCart={handleAddToCart}
          />
        </>
      );
    content = (
      <>
        <Separator />
        <NumbersPad
          range={betType.range}
          color={betType.color}
          onPress={handleNumberPressed}
          selectedNums={selectedNums}
        />
      </>
    );
  } else {
    content = <Spinner />;
  }
  return (
    <>
      <Header open={open} />
      <Container>
        {header}
        {description}
        {content}
      </Container>
    </>
  );
});

export default connect(null, { ...cartCreators, ...filterCreators })(NewBet);
