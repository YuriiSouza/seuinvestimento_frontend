import React from 'react';

const PasswordResetInstructions = ({ email }) => {
  return (
    <h2>
      As instruções para recuperação de senha foram enviadas para o email {email}
    </h2>
  );
};

export default PasswordResetInstructions;
