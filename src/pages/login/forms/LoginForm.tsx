import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  login: string;
  password: string
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("login")); // watch input value by passing the name of it
  console.log(watch("password")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("login", { required: true })} />
      {errors.login && <span>This field is required</span>}

      <input {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
