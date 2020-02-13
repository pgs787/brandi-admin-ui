import React from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';

const InformationTextarea = ({
  name,
  isRequired,
  text,
  width,
  placeholder,
}) => {
  return (
    <SectionField label={name} isRequired={isRequired} moreInfoText={text}>
      <Textarea width={width} placeholder={placeholder} />
    </SectionField>
  );
};

export default InformationTextarea;

const Textarea = styled.textarea`
  height: 100px;
  width: ${({ width }) => width + 'px'};
  font-size: 14px;
  font-weight: normal;
  color: #333333;
  border: 1px solid #e5e5e5;
  box-shadow: none;
  border-radius: 4px;
  transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
  resize: none;
  padding: 6px 12px;
  &:focus {
    border-color: #999999;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
