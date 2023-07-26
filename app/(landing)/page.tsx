import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      LandingPage (Unprotected)
      <div>
        <Link href="/log-in">
          <Button>LOG IN</Button>
        </Link>
        <Link href="/sign-up">
          <Button>REGISTER</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
