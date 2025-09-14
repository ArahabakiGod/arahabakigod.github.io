import { Button, Typography } from "../common";

function Links() {
  return (
    <div className="flex flex-col">
      <Typography variant="h4" className="pb-1">
        My social links:
      </Typography>
      <Button variant="ghost" className="h-1" icon="">
        Telegram
      </Button>
      <Button variant="ghost" className="h-2" icon="">
        GitHub
      </Button>
      <Button variant="ghost" className="h-2" icon="">
        LinkedIn
      </Button>
    </div>
  );
}

export default Links