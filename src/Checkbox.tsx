import { Control, Controller } from "react-hook-form"

export type MyFieldValues = {
  gender: "man" | "woman" | "other"
  age: number
}

type Props = {
  label: string
  control: Control<MyFieldValues>
  name: keyof MyFieldValues
  value: MyFieldValues["gender"] | number
}
export const Checkbox = ({ label, control, name, value }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label>{label}</label>
          <input type="checkbox" {...field} />
        </>
      )}
    />
  )
}
