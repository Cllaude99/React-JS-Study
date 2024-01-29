import { Link, useMatch, useNavigate } from 'react-router-dom';
import { ReactComponent as NetflixLogo } from '../../../assets/NetflixClone/Logo/Logo.svg';
import { ReactComponent as SearchLogo } from '../../../assets/NetflixClone/Search.svg';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';

interface IForm {
  keyword: string;
}

const Header = () => {
  const navigate = useNavigate();
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
  const onValid = (data: IForm) => {
    console.log(data);
    navigate(`/search?keyword=${data.keyword}`);
    setValue('keyword', '');
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  return (
    <S.Nav scrollOver={scrollOver}>
      <S.Col>
        <S.Logo onClick={() => navigate('/')}>
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
        <S.Form onSubmit={handleSubmit(onValid)}>
          <S.Input
            {...register('keyword', { required: true, minLength: 2 })}
            placeholder="search for movie or tv show"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: searchOpen ? 1 : 0 }}
            transition={{ type: 'linear' }}
          />
        </S.Form>
      </S.Col>
    </S.Nav>
  );
};

export default Header;
