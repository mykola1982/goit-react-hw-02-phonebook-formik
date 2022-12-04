import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
import { IconButton } from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/vector2.svg';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>
        {name}:&nbsp;{number}
      </p>

      <IconButton onClick={onDeleteContact}>
        <DeleteIcon width="20" height="20" fill="#fff" />
      </IconButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
