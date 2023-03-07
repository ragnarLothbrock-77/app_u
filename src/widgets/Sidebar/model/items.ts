import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import ListIcon from 'shared/assets/icons/list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean,
}

export const sidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    text: 'Main',
  },
  {
    path: RoutePath.about,
    Icon: ListIcon,
    text: 'About',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    authOnly: true,
  },
];
