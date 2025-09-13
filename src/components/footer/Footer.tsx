import { Button, Typography } from "../common";

function Footer() {
  return (
    <div className="flex flex-row left-0 bg-background-secondary opacity-90 w-full justify-between items-center px-2 h-12 border-b-2 border-border-light inset-shadow-sm inset-shadow-accent/40">
      <div className="flex flex-col">
          <Button variant="ghost" className="h-2">
            link1
          </Button>
      </div>
      <div>

      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Footer