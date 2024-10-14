import * as React from "react";
import {
  AppItem,
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import { Tooltip, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LeftNav = (_props: Partial<NavDrawerProps>) => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(true);

  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </Tooltip>
    );
  };

  
  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue=""
        open={isOpen}
        type={"inline"}
        multiple={true}
      >
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>

        <NavDrawerBody>
          <AppItem as="a" href={"/"}>
            Home
          </AppItem>

          <NavCategory value="1">
            <NavCategoryItem>Hooks</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href={"/counter"} value="2">
                State - Counter
              </NavSubItem>

              <NavSubItem href={"/reducer"} value="3">
                State - Reducer
              </NavSubItem>
              <NavSubItem href={"/digital-clock"} value="4">
                Effect - Digital Clock
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavCategory value="5">
            <NavCategoryItem>HOC</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href={"/hocuser"} value="6">
                Users
              </NavSubItem>
              <NavSubItem href={"/hocemployees"} value="7">
                Employess{" "}
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavCategory value="8">
            <NavCategoryItem>Key Patterns</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href={"/render-props"} value="9">
                Render Props
              </NavSubItem>
              <NavSubItem href={"error-boundary"} value="10">
                Error Boundary{" "}
              </NavSubItem>
              <NavSubItem href={"/custom-hook"} value="11">
                Custom Hook
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavCategory value="12">
            <NavCategoryItem>RTK</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href={"/users"} value="13">
                Users
              </NavSubItem>
              <NavSubItem href={"/employees"} value="14">
                Employees{" "}
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        {!isOpen && renderHamburgerWithToolTip()}
      </div>
    </div>
  );
};
