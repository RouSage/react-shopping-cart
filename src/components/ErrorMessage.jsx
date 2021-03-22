import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = () => {
  return (
    <Message negative>
      <Message.Header>There was an error loading books</Message.Header>
      <Message.Content>
        Something has gone wrong, but it&apos;s likely to work again soon.
        Please check back in a while.
      </Message.Content>
    </Message>
  );
};

export default ErrorMessage;
