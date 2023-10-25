import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-filed";
import { UiSelectField } from "@/shared/ui/ui-select-filed";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth/ui/sign-out-button";
import { useSessionQuery } from "@/entities/session/queries";

export function HomePage() {
  const {data} = useSessionQuery()
  return (
    <main className={`flex min-h-screen flex-col  justify-between `}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton></SignOutButton>
          </div>
        }
      />
      <UiButton variant="primary">primary</UiButton>
      <UiButton variant="secondary">primary</UiButton>
      <UiButton variant="outlined">primary</UiButton>
      <UiButton disabled variant="primary">
        primary
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: "Enter email..." }}
      />
      <UiTextField
        error="Text field"
        inputProps={{ placeholder: "Enter email..." }}
      />
      <UiTextField inputProps={{ placeholder: "Enter email..." }} />
      <UiSelectField
        selectProps={{ placeholder: "Enter email..." }}
        options={[{ value: "1", label: "options" }]}
      />
      <UiLink href={"/"}>Text Link</UiLink>
      <UiSpinner className="text-teal-600 w-20 h-20" />
      {/* <UiPageSpinner /> */}
    </main>
  );
}
