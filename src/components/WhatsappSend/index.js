import React, { useState } from 'react';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import FieldTextArea from '@atlaskit/field-text-area/FieldTextArea';
import TextArea from '@atlaskit/textarea';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

export default function() {
  const [message, setMessage] = useState(
    'Olá Fulano de Tal, segue o link com sua proposta: https://www.google.com/'
  );

  const sendWhatsappMessage = (phone, message) => {
    debugger;
    window.open(
      `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        phone
      )}&text=${encodeURIComponent(message)}`
    );
  };

  const removeNonNumerical = str => str.replace(/[\W_]/gi, '');

  return (
    <ContentWrapper>
      <Form
        onSubmit={data => {
          debugger;
          sendWhatsappMessage(removeNonNumerical(data.phone), message);
        }}
      >
        {({ formProps }) => (
          <form {...formProps}>
            <Field
              name="phone"
              defaultValue=""
              label="Telefone - Padrão internacional"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off" {...fieldProps} />
                  {!error && (
                    <HelperMessage>Ex: 55 21 96681 3390</HelperMessage>
                  )}
                </>
              )}
            </Field>
            <p>Texto da mensagem</p>
            <TextArea
              style={{ width: '100%' }}
              isRequired
              value={message}
              name="message"
              resize="auto"
              onChange={event => setMessage(event.target.value)}
            />
            <FormFooter>
              <ButtonGroup>
                <Button type="submit" appearance="primary">
                  Enviar
                </Button>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </ContentWrapper>
  );
}
