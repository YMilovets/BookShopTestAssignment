import { UserRole } from "@/shared/config";

export type InitialStateSessionType = {
  login?: string;
  role: UserRole;
};
