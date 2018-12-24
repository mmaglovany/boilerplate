import styled from 'styled-components';

// Components
import StyledButton from 'components/Button/StyledButton';

//----------------------------------------------------------------------------------------------------------------------

const ClearButton = styled(StyledButton)`
  border-color: tomato;
  color: tomato;
  margin: 0 0 0 20px;
  &:active {
    background: tomato;
    color: #fff;
  }
`;

export default ClearButton;
