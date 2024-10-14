import {
  makeStyles,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  teamsDarkTheme,
  teamsLightTheme,
  Tooltip,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import { SettingsFilled } from "@fluentui/react-icons";
import { useContext } from "react";
import { AppContext } from "../Theme";


const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Settings = () => {
  const styles = useStyles();
  const { applyTheme, theme } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Tooltip
            content="With calendar icon and no contents"
            relationship="label"
          >
            <MenuButton icon={<SettingsFilled />} />
          </Tooltip>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem disabled={theme === webLightTheme} onClick={()=> { applyTheme(webLightTheme)}}>Web Light Theme</MenuItem>
            <MenuItem disabled={theme === webDarkTheme} onClick={()=> { applyTheme(webDarkTheme)}}>Web Dark Theme</MenuItem>
            <MenuItem disabled={theme === teamsLightTheme}onClick={()=> { applyTheme(teamsLightTheme)}}>Teams Light Theme</MenuItem>
            <MenuItem disabled={theme === teamsDarkTheme} onClick={()=> { applyTheme(teamsDarkTheme)}}>Teams Dark Theme</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};
