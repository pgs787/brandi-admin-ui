import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionBody from 'components/SectionBody';
import SectionTitle from 'components/SectionTitle';
import SectionField from 'components/SectionField';
import BasicOptionInfo from './BasicOptionInfo';
import NonOption from './NonOption';

// redux
import { connect } from 'react-redux';
import { optionSet } from 'store/actions';

const OptionInfo = ({ optionSet }) => {
  const [showContent, setShowContent] = useState(true);
  const [activeId, setActiveId] = useState(0);
  const options = ['기본옵션', '옵션없음'];

  const settingChange = id => {
    optionSet(id);
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
          {/* 옵션 정보 */}
          {activeId === 0 && <BasicOptionInfo></BasicOptionInfo>}
          {activeId === 1 && <NonOption></NonOption>}
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
export default connect(null, { optionSet })(OptionInfo);
