export type InitialStateSessionType = {
  login?: string;
  role: UserRole;
};

export type UserRole = "admin" | "user" | "noAuth";
