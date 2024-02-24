export const mobile = `@media screen and (max-width: 480px)`;

export const tablet = `@media screen and (max-width: 768px)`;

export const desktop = `@media screen and (min-width: 992px)`;

export const tabletAndDesktop = `@media screen and (min-width: 481px) and (max-width: 991px), screen and (min-width: 992px)`;

export const transition = `transition: all 0.3s ease-in-out;`;

export const noScrollBar = `  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  scroll-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer */
  }
`;

export const pages = ['home', 'projects', 'experiences', 'contact'];

export const fadeTime = '1.3s';

export const slashRed = '#c03f13';

export const hoverDict = {
  light: '#756a5e',
  dark: '#cdc6be',
};

export const windowDict = {
  light: 'rgb(255, 255, 255)',
  dark: 'rgb(58, 58, 58)',
};

export const backgroundDict = {
  light: 'rgba(255, 255, 255, 0.8)',
  dark: 'rgba(58, 58, 58, 0.8)',
};

export const matrixDict = {
  lightColor: '#ececec',
  lightBackground: 'rgba(255, 255, 255, 0.1)',
  darkColor: '#565656',
  darkBackground: 'rgba(58, 58, 58, 0.1)',
};

export const emailDict = {
  serviceID: 'service_q4q65v4',
  templateID: 'template_x8hkpxj',
  publicKey: 'H7KHfTD6ovniyTUXZ',
};

export const linkedin = 'https://www.linkedin.com/in/emkwei/';

export const github = 'https://github.com/emkwei';

export const letters =
  '1234567890ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz' +
  '!@#$%^&*()-_=+[]{}|;:,.<>?/`~' +
  '÷×√∫∑≈≠≡≤≥πεδ∞φΩαβγ' +
  'ÁáÀàÂâÄäÃãÅåÉéÈèÊêËëÍíÌìÎîÏïÓóÒòÔôÖöÕõÚúÙùÛûÜüÑñÇç' +
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
  '程序算法数据计算机网络编码语言数据库系统软件硬件互联网安全协议操作存储' +
  '一二三四五六七八九十';

export const currentName = 'Emily Wei';
