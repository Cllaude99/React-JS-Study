import { Link, useMatch } from 'react-router-dom';
import { ReactComponent as NetflixLogo } from '../../../assets/NetflixClone/Logo/Logo.svg';
import { ReactComponent as SearchLogo } from '../../../assets/NetflixClone/Search.svg';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import * as S from './styles';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollOver, setScrollOver] = useState(false);
  const { scrollY } = useScroll();
  const homeMatch = useMatch('/');
  const tvMatch = useMatch('/tv');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 250) setScrollOver(true);
    else setScrollOver(false);
  });
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  return (
    <S.Nav scrollOver={scrollOver}>
      <S.Col>
        <S.Logo>
          <NetflixLogo />
        </S.Logo>
        <S.Items>
          <S.Item>
            <Link to="/">
              Home {homeMatch && <S.Circle layoutId="circle" />}
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/tv">
              TV Shows {tvMatch && <S.Circle layoutId="circle" />}
            </Link>
          </S.Item>
        </S.Items>
      </S.Col>
      <S.Col>
        <S.Search
          onClick={toggleSearch}
          animate={{ x: searchOpen ? -220 : 0 }}
          transition={{ type: 'linear' }}
        >
          <SearchLogo />
        </S.Search>
        <S.Input
          placeholder="search for movie or tv show"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: searchOpen ? 1 : 0 }}
          transition={{ type: 'linear' }}
        />
      </S.Col>
    </S.Nav>
  );
};

export default Header;
