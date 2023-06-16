import { Grid, Link, Paper, styled } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { LanguageSwitcher } from "./LanguageSwitcher";

const FooterItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  ...theme.typography.caption,
  padding: theme.spacing(3)
})).withComponent("footer");

export const Footer = () => {
  return (
    <FooterItem>
      <Grid spacing={2} container>
        <Grid xs={4} item>
          <LanguageSwitcher />
        </Grid>
        <Grid xs={4} item>
          <FormattedMessage
            id="footerVersion"
            values={{
              name: import.meta.env.VITE_SITE_NAME,
              version: APP_VERSION
            }}
            defaultMessage="{name} v{version} by McRadane"
          />
        </Grid>
        <Grid xs={4} item>
          <Link data-testid="footer-github" href="https://github.com/McRadane/totk-upgrade" rel="noopener noreferrer" target="_blank">
            <FormattedMessage id="linkGitHub" defaultMessage="Project's GitHub repository" />
          </Link>
        </Grid>
      </Grid>
    </FooterItem>
  );
};
