import { Box } from "@mui/material";

import { useRoutes } from "@/shared/hooks";

import ButtonLink from "../ButtonLink";
import SessionObserver from "../SessionObserver";

function Navigation() {
  const routes = useRoutes();

  return (
    <SessionObserver>
      <Box>
        {routes.map(({ id, value, path }) => {
          return (
            <ButtonLink path={`/${path}`} key={id}>
              {value}
            </ButtonLink>
          );
        })}
      </Box>
    </SessionObserver>
  );
}

export default Navigation;
