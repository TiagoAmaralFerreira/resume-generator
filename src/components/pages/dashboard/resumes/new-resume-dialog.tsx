"use client";
import { Dialog, BaseDialogProps } from "@/components/ui/dialog";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  title: string;
};
export const NewResumeDialog = (props: BaseDialogProps) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para Começar, escolha um título para seu currículo"
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              control={control}
              name="name"
              render={({ field }) => <input {...field} />}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => <input {...field} />}
            />
          </div>
        </form>
      }
    />
  );
};
