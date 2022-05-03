import { NextPage } from "next";
import { ReactNode } from "react";
import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

interface Props {
  children: ReactNode
}
const Layout: NextPage<Props> = ({children}) => {
    return (
        <div>
          <MainNavigation />
          <main className={classes.main}>{children}</main>
        </div>
      );
}

export default Layout;