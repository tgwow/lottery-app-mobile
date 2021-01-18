import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, connect } from 'react-redux';
import FilterOption from './FilterOption';
import { Creators as filterCreators } from '../../redux/ducks/filter';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Filter = ({ addType, removeType, clearType, behavior }) => {
  const { types } = useSelector((state) => state.typesReducer);
  const { selectedType } = useSelector((state) => state.filterReducer);

  const handleOptionsPressed = (optionType) => {
    if (behavior === 'single') {
      if (selectedType.includes(optionType)) return;
      clearType({ optionType });
    } else if (selectedType.includes(optionType)) removeType({ optionType });
    else addType({ optionType });
  };
  let options;
  if (types.length > 0) {
    options = types.map((type) => (
      <FilterOption
        key={type.id}
        name={type.name}
        color={type.color}
        active={selectedType.includes(type.name)}
        onPress={handleOptionsPressed}
      />
    ));
  }
  return <View style={styles.wrapper}>{options}</View>;
};
export default connect(null, { ...filterCreators })(Filter);
