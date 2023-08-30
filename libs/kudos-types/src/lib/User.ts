export type User = {
  name: string;
  access: "guest" | "base" | "admin" | "superuser";
};
