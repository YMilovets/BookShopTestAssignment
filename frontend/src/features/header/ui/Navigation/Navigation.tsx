import { Box } from "@mui/material";

import { useAppSelector } from "@/app/hooks";
import { useRoutes } from "@/shared/hooks";

import ButtonLink from "../ButtonLink";
import SessionObserver from "../SessionObserver";

function Navigation() {
  const role = useAppSelector((state) => state.sessionReducer.role);
  const routes = useRoutes(role);

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
