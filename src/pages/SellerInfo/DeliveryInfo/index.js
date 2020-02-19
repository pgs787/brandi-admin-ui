import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import InformationTextarea from 'components/InformationTextarea';
import { connect } from 'react-redux';
import { setOtherInfo } from 'store/actions';
import { API_URL } from '../../../utils/callUrl';
import axios from 'axios';

const DeliveryInfo = ({ setOtherInfo, match }) => {
  const [showContent, setShowContent] = useState(true);
  const [deliveryInfo, setDeliveryInfo] = useState('');
  const [refundInfo, setRefundInfo] = useState('');

  useEffect(() => {
    if (match.params.id) {
      axios
        .get(`${API_URL}/seller/list-info-get/${match.params.id}`)
        .then(res => {
          const data = res.data.seller_info;
          if (data.shopping_info) {
            setDeliveryInfo(data.shopping_info);
            setOtherInfo(data.shopping_info, 'deliveryInfo');
          }
          if (data.refund_info) {
            setRefundInfo(data.refund_info);
            setOtherInfo(data.refund_info, 'refundInfo');
          }
        });
    } else {
      const token = localStorage.getItem('Login_token');
      axios
        .get(`${API_URL}/seller/info-get`, {
          headers: { Authorization: token },
        })
        .then(res => {
          const data = res.data.seller_info;
          if (data.shopping_info) {
            setDeliveryInfo(data.shopping_info);
            setOtherInfo(data.shopping_info, 'deliveryInfo');
          }
          if (data.refund_info) {
            setRefundInfo(data.refund_info);
            setOtherInfo(data.refund_info, 'refundInfo');
          }
        });
    }
  }, []);

  const onClick = () => {
    setShowContent(!showContent);
  };

  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="배송정보 및 교환/환불 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <InformationTextarea
            value={deliveryInfo}
            onChange={e => {
              setDeliveryInfo(e.target.value);
              setOtherInfo(e.target.value, 'deliveryInfo');
            }}
            isRequired
            name="배송 정보"
            text="문장이 끝나면 엔터로 줄바꿈을 해주세요."
            width="580"
            placeholder="ex)
            도서산간 지역은 배송비가 추가비용이 발생할 수 있습니다.
            "
          />
          <InformationTextarea
            value={refundInfo}
            onChange={e => {
              setRefundInfo(e.target.value);
              setOtherInfo(e.target.value, 'refundInfo');
            }}
            isRequired
            name="교환/환불 정보"
            text="문장이 끝나면 엔터로 줄바꿈을 해주세요."
            width="580"
            placeholder="ex)
            브랜디는 소비자보호법 및 전자상거래법을 기반한 환불보장제를 운영 중에 있습니다.
            "
          />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default connect(null, { setOtherInfo })(DeliveryInfo);

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
