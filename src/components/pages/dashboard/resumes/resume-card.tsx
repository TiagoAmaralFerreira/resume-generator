import { Button } from "@/components/ui/button";
import Link from "next/link";

type ResumeCardButtonProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};
export const ResumeCardButton = ({
  title,
  description,
  icon,
}: ResumeCardButtonProps) => {
  return (
    <Button>
      {icon}

      <div>{title}</div>
      <div>{description}</div>
    </Button>
  );
};

export const ResumeCard = () => {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full"></Link>
  );
};
