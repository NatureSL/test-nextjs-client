import { SingUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeader } from "@/shared/ui/ui-header";

export function SingUpPage() {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<UiHeader />}
      form={<SingUpForm />}
    />
  );
}
