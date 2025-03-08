
'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #228be6;
  }
`;

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">
          <NavLink>Blog Platform</NavLink>
        </Link>
      </Logo>
      <Nav>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        {isAuthenticated ? (
          <>
            <Link href="/dashboard">
              <NavLink>Dashboard</NavLink>
            </Link>
            <NavLink as="button" onClick={logout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <Link href="/login">
              <NavLink>Login</NavLink>
            </Link>
            <Link href="/signup">
              <NavLink>Sign Up</NavLink>
            </Link>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
