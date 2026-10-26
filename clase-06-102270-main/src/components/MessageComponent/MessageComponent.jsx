import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageComponent = ({ text, severity }) => {
  return (
    <Stack sx={{ width: "100%", marginTop: 20 }} spacing={2}>
      <Alert severity={severity}>{text}</Alert>
    </Stack>
  );
};

export default MessageComponent;
