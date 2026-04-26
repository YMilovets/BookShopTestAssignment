export interface FormControlProps {
  title: string;
  formData?: Map<FormItem, string>;
}

export enum FormItem {
  Name = "name",
  Description = "description",
}
