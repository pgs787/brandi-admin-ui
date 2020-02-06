import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const InfoInput = props => {
  const { img, placeholder, name, type, onChange, errors = [] } = props;

  const [error, setError] = useState('');

  useEffect(() => {
    const message = errors
      .filter(error => error.key === name)
      .concat({ message: '' })[0].message;

    setError(message);
  }, [name, errors]);

  // errors.filter(error => error.name === name)

  return (
    <DivInputIcon>
      <IInputIcon img={img} check={!!error} />
      <InputAccount
        placeholder={placeholder}
        name={name}
        type={type}
        autoComplete="off"
        onChange={onChange}
        check={!!error}
      />
      {error && <PErrorMsg>{error}</PErrorMsg>}
    </DivInputIcon>
  );
};

export default InfoInput;

const DivInputIcon = styled.div`
  position: relative;
`;

const IInputIcon = styled.i`
  color: #ccc;
  position: absolute;
  margin: 11px 2px 4px 10px;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
  font-family: FontAwesome;
  font-style: normal;
  &:before {
  content: '${({ img }) => img}';
  }
  ${({ check }) =>
    check &&
    css`
      color: #b94a48;
    `}
`;

const InputAccount = styled.input`
  font-size: 14px;
  font-weight: normal;
  color: #333333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
  width: 100%;
  height: 34px;
  padding: 6px 12px 5px 33px;
  -webkit-appearance: none;
  margin: 0;
  &:focus {
    border-color: #999999;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    ${({ check }) =>
      check &&
      css`
        border-color: #a94442;
      `}
  }
  ${({ check }) =>
    check &&
    css`
      border-color: #a94442;
    `}
`;

const PErrorMsg = styled.p`
  color: #a94442;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 13px;
`;
