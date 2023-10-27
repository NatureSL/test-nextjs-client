import { UiSelectField } from "@/shared/ui/ui-select-filed";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-filed";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isPending, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{
          ...register("type"),
        }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter WebSite...",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isPending}>
        Add Block Item
      </UiButton>
    </form>
  );
}