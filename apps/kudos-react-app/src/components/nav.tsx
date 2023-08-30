import styled from "@emotion/styled";
import { KudosRoute } from "@kudos/kudos-types";
import { Link } from "react-router-dom";
import { kudosRoutes } from "../route-helpers/route-renderer";

const NavContainer = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  background-color: #10e53e;
  align-content: stretch;
`;

const NavListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #c3275b;
  align-content: stretch;
  color: #fff;
`;

const NavLink = styled(Link)`
  color: white;

  :hover {
    color: #154bee;
  }
`;

export const Nav = () => (
  <NavContainer>
    <NavListItem>
      <NavLink to="/">Home</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/login">Login</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/me">Me</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/people">People</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/our-culture">Our Culture</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </NavListItem>
  </NavContainer>
);

/**
 * @method renderRoute
 * @description will recursively render a routes
 * @prop path
 * @prop name
 * @prop children
 * @returns JSX
 */
const renderRoute = ({ path, name, children }: KudosRoute) => (
  <>
    <NavListItem key={path}>
      <NavLink to={path}>{name}</NavLink>
    </NavListItem>
    {...!!children ? children.map(renderRoute) : []}
  </>
);

export const DynamicNav = () => (
  <NavContainer>{kudosRoutes.map(renderRoute)}</NavContainer>
);
