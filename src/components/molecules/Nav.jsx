import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SVG from 'react-inlinesvg'

import HomeIcon from '@assets/icons/home.svg'

const NavItem = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-decoration: none;
  padding: 0 16px;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }

  &:after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 4px;
    display: block;
    background: #ffffff;
    bottom: 0;
    transition: width 0.2s ease-in-out;
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.25);
  }

  &.active,
  &:hover {
    &:after {
      width: 100%;
    }
  }
`

const StyledNav = styled('nav')`
  display: flex;
  align-items: center;

  ${NavItem}:not(:last-child) {
    margin-right: 18px;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <NavItem to="/">
        <SVG src={HomeIcon} />
        Головна
      </NavItem>
      <NavItem to="/spending">Витрати</NavItem>
      <NavItem to="/earnings">Дохід</NavItem>
    </StyledNav>
  )
}

export default Nav
