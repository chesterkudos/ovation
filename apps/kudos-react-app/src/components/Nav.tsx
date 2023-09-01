import styled from "@emotion/styled";
import { KudosRoute } from "@kudos/kudos-types";
import { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { kudosRoutes } from "../route-helpers/RouteRenderer";

const NavContainer = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  gap: 0;
  padding: 0;
  margin: 0;
  align-content: stretch;
  background-color: #c2a1ff;
`;

const NavListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  padding: 0;
  align-content: stretch;
  text-transform: capitalize;
`;

const NavLink = styled(Link)`
  color: #1f1f1f;
  padding: 1rem;

  :hover {
    color: #154bee;
    background-color: #9db1eca5;
  }
`;

/**
 * @method renderRoute
 * @description will recursively render a routes
 * @prop path
 * @prop name
 * @prop children
 * @returns JSX
 */
const renderRoute = ({ path, name, children }: KudosRoute): ReactNode => (
  <Fragment key={name}>
    {!!path && (
      <NavListItem key={name}>
        <NavLink to={path}>{name}</NavLink>
      </NavListItem>
    )}
    {...!!children ? children.map(renderRoute) : []}
  </Fragment>
);

export const DynamicNav = () => (
  <NavContainer>{kudosRoutes.map(renderRoute)}</NavContainer>
);
