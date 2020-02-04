import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const hoverList = [
  ['홈', <HomeIcon />, []],
  [
    '상품관리',
    <PersonIcon />,
    [
      { id: 0, name: '상품관리', link: '/product/registration' },
      { id: 1, name: '상품등록', link: '/product/registration' },
      { id: 2, name: '연동상품관리', link: '/product/registration' },
      { id: 3, name: '연동상품 카테고리관리', link: '/product/registration' },
    ],
  ],
  [
    '고객응대관리',
    <ShoppingCartIcon />,
    [
      { id: 0, name: '셀러 정보 관리', link: '/product/registration' },
      { id: 1, name: '페널티 셀러 관리', link: '/product/registration' },
      { id: 2, name: '도매처 관리', link: '/product/registration' },
    ],
  ],
];

export default hoverList;
