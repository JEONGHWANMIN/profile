import MyPortfoilo from '../../assets/MyProfileProject.png';

export const ProjectList = [
  {
    id: 1,
    title: 'MyProfile',
    subtitle: '22.07.13 ~ 22.08.XX (1인개발)',
    content: `개인 포트폴리오를 만들어 보고 싶어서 시작하게 된 프로젝트 입니다.
    만들면서 디자인을 직접 했고, 프로젝트 구조 등을 어떻게
    가져가야 좀 더 깔끔하게 가져갈 수 있을가 ? 를 고민하면서
    만들었고 , 또한 코드의 확장성, 재사용성 등 불필요한 중복을 줄이기 위해서 고민하면서 만든 프로젝트 입니다.
    이 프로젝트를 진행하면서 CSS 컨벤션 등을 다시 한번
    생각해 보는 계기가 되었고 , 각종 애니메이션 효과를 좀 더
    찿아보면서 공부하게 되는 계기가 되었던 프로젝트 입니다. `,
    imgSrc: MyPortfoilo,
    front: ['React', 'TypeScript', 'Recoil', 'styled-components'],
    backend: [],
    deploy: ['Vercel'],
    clickAddress: 'https://github.com/JEONGHWANMIN/profile',
  },
];
