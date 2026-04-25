import { ReactNode } from "react";

import { UserRole } from "@/entities/users";

export interface AccessProps {
  children: ReactNode;
  role?: UserRole;
}
