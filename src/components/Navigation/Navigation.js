import { Link, MainNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <MainNav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorite">Favorite</Link>
    </MainNav>
  );
};
