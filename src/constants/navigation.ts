export interface NavigationItem {
  label: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'Clubs',
    path: '/clubs',
  },
  {
    label: 'National Teams',
    path: '/national-teams',
  },
  {
    label: 'Retro Kits',
    path: '/retro-kits',
  },
];