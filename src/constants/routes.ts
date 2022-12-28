import { FC } from "react";
import { CreateUserPage } from "../pages/create-user-page/CreateUserPage";
import { UsersListPage } from "../pages/users-list-page/UsersListPage";
import { MainPage } from "./../pages/main-page/MainPage";

interface RouteItem {
  path: string;
  Element: FC;
}

export const routes: RouteItem[] = [
  { path: "/", Element: MainPage },
  { path: "/create-user", Element: CreateUserPage },
  { path: "/users-list", Element: UsersListPage },
];
