import React from 'react';
import styled from 'styled-components';

const InfoInput = ({ img, placeholder, name, type, value, onChange }) => {
  return (
    <DivInputIcon>
      <IInputIcon img={img} />
      <InputAccount
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        autoComplete="off"
        onChange={onChange}
      />
    </DivInputIcon>
  );
};

export default InfoInput;

const DivInputIcon = styled.div`
  position: relative;
  margin-bottom: 15px;
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
  &:focus {
    border-color: #999999;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
