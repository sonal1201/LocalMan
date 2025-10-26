import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { UserPlus2 } from "lucide-react";

const InviteMember = () => {
  return (
    <Hint label="Invite Members">
      <Button className="border border-blue-300 cursor-pointer bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 hover:text-blue-300">
        <UserPlus2 className="size-4 text-blue-400" />
      </Button>
    </Hint>
  );
};

export default InviteMember;
