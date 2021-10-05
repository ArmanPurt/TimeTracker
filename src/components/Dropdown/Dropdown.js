import React, { useCallback, useEffect, useState, memo } from 'react';
import {
  DropdownWrapper,
  DropdownList,
  DropdownListItem,
  DropdownComponent,
} from '../styledComponents/common/Dropdown/Dropdown';
import PropTypes from 'prop-types';

const defaultItem = {
  id: 0,
  text: 'Select item from the list',
};

export const Dropdown = memo((props) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(props.items);
  }, [props]);

  const handleListDisplay = useCallback(() => {
    setShowOptionList(!showOptionList);
  }, [showOptionList]);

  const handleOptionClick = useCallback(
    (id) => {
      const selected = items.filter((item) => item.id === id)[0];
      setSelectedItem(selected);
      props.callback(selected);
      setShowOptionList(false);
    },
    [items]
  );

  return (
    <DropdownWrapper>
      <DropdownComponent isActive={showOptionList} onClick={handleListDisplay}>
        {selectedItem.text}
      </DropdownComponent>
      {showOptionList && (
        <DropdownList>
          <DropdownListItem
            key={defaultItem.id}
            onClick={() => handleOptionClick(item.id)}
            inactive
          >
            {defaultItem.text}
          </DropdownListItem>
          {items.map((item) => {
            return (
              <DropdownListItem
                key={item.id}
                onClick={() => handleOptionClick(item.id)}
              >
                {item.name}
              </DropdownListItem>
            );
          })}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
});

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  callback: PropTypes.func,
};
