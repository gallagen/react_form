import React from 'react';
import TextField from "./TextField";

const FirstNameField = ({...rest}) => (
  <TextField name="firstName"
              label="FirstName:"
              {...rest} />
);

export default FirstNameField;
