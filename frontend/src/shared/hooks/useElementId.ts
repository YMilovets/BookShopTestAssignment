import { useId } from "react";

export default function useElementId(generalId: string = "element") {
  const id = useId();
  const elementId = `${generalId}-menu-${id.replace(/\D/g, "")}`;

  return elementId;
}
