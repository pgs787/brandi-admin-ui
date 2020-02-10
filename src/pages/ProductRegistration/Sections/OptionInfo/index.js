import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BoxDesign from '../../../../components/BoxDesign';
import SectionBody from '../../../../components/SectionBody';
import SectionTitle from '../../../../components/SectionTitle';
import SectionField from '../../../../components/SectionField';
import BasicOptionInfo from './BasicOptionInfo';
import AutonomyOptionType from './AutonomyOptionType';
import AutonomyOptionInfo from './AutonomyOptionInfo';
import NonOption from './NonOption';
const OptionInfo = () => {
  const [showContent, setShowContent] = useState(true);
  const [activeId, setActiveId] = useState(0);
  const options = ['기본옵션', '자율옵션', '옵션없음'];

  const settingChange = id => {
    setActiveId(id);
  };
  const onClick = () => {
    setShowContent(!showContent);
  };
  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="옵션 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          {/* 옵션설정 */}
          <SectionField label="옵션 설정" isRequired>
            <ButtonGroupWrapper>
              {options.map((option, idx) => (
                <OptionButton
                  key={idx}
                  id={idx}
                  onClick={() => settingChange(idx)}
                  activeId={activeId === idx}
                  value={option}
                >
                  {option}
                </OptionButton>
              ))}
            </ButtonGroupWrapper>
          </SectionField>
          {/* 자율 옵션 타입 */}
          {activeId === 1 && <AutonomyOptionType></AutonomyOptionType>}
          {/* 옵션 정보 */}
          {activeId === 0 && <BasicOptionInfo></BasicOptionInfo>}
          {activeId === 1 && <AutonomyOptionInfo></AutonomyOptionInfo>}
          {activeId === 2 && <NonOption></NonOption>}
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
const ButtonGroupWrapper = styled.div``;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
  ${props =>
    props.activeId &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;
export default OptionInfo;
