import { SingInForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeader } from "@/shared/ui/ui-header";

export function SingInPage() {
  return (
    <UiFormPageLayout
      title="Sign In"
      header={<UiHeader />}
      form={<SingInForm />}
    />
  );
}
