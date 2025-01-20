import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <Button
      className={cn(
        "w-full h-[300px] bg-muted/50 rounded border border-muted-foreground/20",
        "flex items-center justify-center relative outline-none overflow-hidden",
        "hover:bg-muted/100  dark:hover:hover:bg-muted/100transition-all"
      )}
    >
      {icon}

      <div className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/80">
        <p className="text-black">{title}</p>
        <span className="text-black">{description}</span>
      </div>
    </Button>
  );
};

export const ResumeCard = () => {
  return (
    // <Link href="/dashboard/resumes/example" className="block w-full">
    <ResumeCardButton
      title="Meu currículo"
      description="Útima atualização há 22 minutos"
    />
    // </Link>
  );
};
