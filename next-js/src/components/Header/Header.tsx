import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "../SearchInput/SearchInput";

export default function Header() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <SearchInput />
      </Toolbar>
    </AppBar>
  );
}
