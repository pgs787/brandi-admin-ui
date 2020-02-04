import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const data = {
  hoverList: [
    { id: '0', name: '홈', icon: <HomeIcon />, list: [] },
    {
      id: '1',
      name: '상품관리',
      icon: <PersonIcon />,
      list: [
        { id: '0', name: '상품관리', link: '/product/registration' },
        { id: '1', name: '상품등록', link: '/product/registration' },
        { id: '2', name: '연동상품관리', link: '/product/registration' },
        {
          id: '3',
          name: '연동상품 카테고리관리',
          link: '/product/registration',
        },
      ],
    },
    {
      id: '2',
      name: '고객응대관리',
      icon: <ShoppingCartIcon />,
      list: [
        { id: '0', name: '셀러 정보 관리', link: '/product/registration' },
        { id: '1', name: '페널티 셀러 관리', link: '/product/registration' },
        { id: '2', name: '도매처 관리', link: '/product/registration' },
      ],
    },
  ],
  sideList: [
    {
      id: '1',
      name: '홈',
      icon: HomeIcon,
      link: '/product/registration',
      list: [],
    },
    {
      id: '2',
      name: '상품관리',
      icon: PersonIcon,
      list: [
        { id: '3', name: '상품관리', link: '/product/registration' },
        { id: '4', name: '상품등록', link: '/product/registration' },
        { id: '5', name: '연동상품관리', link: '/product/registration' },
        {
          id: '6',
          name: '연동상품 카테고리관리',
          link: '/product/registration',
        },
      ],
    },
    {
      id: '7',
      name: '고객응대관리',
      icon: ShoppingCartIcon,
      list: [
        { id: '8', name: '셀러 정보 관리', link: '/product/registration' },
        { id: '9', name: '페널티 셀러 관리', link: '/product/registration' },
        { id: '10', name: '도매처 관리', link: '/product/registration' },
      ],
    },
  ],
};

export default data;
