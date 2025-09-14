import { Typography } from "../common";

function Contacts() {
  return (
    <div className="flex flex-col">
      <Typography variant="h4" className="pb-1">
        My contacts:
      </Typography>
      <Typography>Email: spacie.sharp@gmail.com</Typography>
      <Typography>Phone: +375 (44) 531-91-88</Typography>
      <Typography>Telegram: @Spac1e</Typography>
    </div>
  );
}

export default Contacts;
