import React from 'react'
import Prompt from 'rn-prompt';

const AddTripPrompt = ({ isVisible, onCancelCallBack, onSubmitCallBack, title, placeHolder, defaultValue }) => (
  <Prompt
    title={title}
    placeholder={placeHolder}
    defaultValue={defaultValue}
    visible={isVisible}
    onCancel={() => onCancelCallBack()}
    onSubmit={value => onSubmitCallBack(value)}
  />

);

export default AddTripPrompt;