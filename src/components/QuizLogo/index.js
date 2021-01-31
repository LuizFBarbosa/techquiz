import styled from 'styled-components';

import React from 'react';

function Logo() {
  return (
      <>
        <img src="/logo.jpg" height="156px" width="350px"/>
      </>
  );
}
const QuizLogo = styled(Logo)`

  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin: 0;
  }
`;

export default QuizLogo;
