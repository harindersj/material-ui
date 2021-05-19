import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import NavBar from "../../components/NavBar/NavBar";
import { LoginImage } from "../../SVGFiles/LoginImage";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Box
        width={300}
        height={"80vh"}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Paper>
          <Box
            height={150}
            margin={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Typography>Enter Your Phone no.</Typography>
            <TextField variant="outlined" size="small" />
            <Button variant="outlined" color="primary">
              <ArrowForward />
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
