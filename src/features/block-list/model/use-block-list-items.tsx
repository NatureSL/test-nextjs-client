import { useBlockListQuery } from "@/entities/block-list/queries";
import { useDebaucedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const blockListQuery = useBlockListQuery({ q:useDebaucedValue(q, 400) });
 
  const items = blockListQuery.data?.items ?? [];

  return { items, isPending: blockListQuery.isPending, q, setQ };
}
