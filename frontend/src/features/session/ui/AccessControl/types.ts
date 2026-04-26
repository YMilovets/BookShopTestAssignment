import { ReactNode } from "react";

import { UserRole } from "@/shared/config";

export interface AccessProps {
  children: ReactNode;
  role?: UserRole;
}
