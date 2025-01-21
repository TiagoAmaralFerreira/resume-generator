import { AddResumeButton } from "../add-resumes";
import { ResumeCard } from "../resume-card";

export const ResumesList = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-4 lg:gap-5">
      <AddResumeButton />
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  );
};
