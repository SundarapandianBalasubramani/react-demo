import { makeStyles } from "@fluentui/react-components";
import { Settings } from "./Settings";
import { tokens } from '@fluentui/react-components';
const useStyles = makeStyles({
    header: {
        backgroundColor: tokens.colorBrandBackground,
        color: tokens.colorBrandBackgroundInverted,
    }
})
export const Header: React.FC = () => {
    const styles = useStyles();
    return (
        <header className={`header ${styles.header}`}>
            <div className="banner">
                <h1>React Demo</h1>
            </div>
            <div className="settings">
                <Settings />
            </div>
        </header>
    );
  
};
