import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material/";
import {useDispatch} from "react-redux"
import { getTitle } from "../../store/title/title.slice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(6),
    width: "auto",
  },
}));

const SearchIconBtn = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "25",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "6ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

export default function SearchInput() {
  const dispatch = useDispatch()

  const handleTitle = (e) => {
    dispatch(getTitle(e.target.value))
  }
  return (
    <Search>
      <SearchIconBtn
        onClick={(e) => {
          console.log("I am a click");
        }}
      >
        <SearchIcon />
      </SearchIconBtn>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        
        onChange={handleTitle}
      />
    </Search>
  );
}
