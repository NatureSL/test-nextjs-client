import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-filed";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SingUpForm() {
  const {handleSubmit,isPending,register,errorMessage} = useSignUpForm()

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isPending} variant="primary">
        Sign Up
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>Sign In</UiLink>
        {errorMessage && <div className="text-rose-500 text">{errorMessage}</div>}
    </form>
  );
}
