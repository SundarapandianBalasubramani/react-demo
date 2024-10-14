import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
    footer: {
        backgroundColor: tokens.colorBrandBackground,
        color: tokens.colorBrandBackgroundInverted,
    }
})
export const Footer: React.FC = () => {
    const styles = useStyles();
    return (
        <footer className={`footer ${styles.footer}`}>
            <h2>Footer</h2>
        </footer>
    );
}