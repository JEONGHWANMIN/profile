import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ThemeType } from './type';

const { persistAtom } = recoilPersist();

export const themeState = atom<ThemeType>({
  key: 'themeState',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
});
