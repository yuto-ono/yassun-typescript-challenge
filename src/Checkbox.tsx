import { Control, Controller } from "react-hook-form"

export type MyFieldValues = {
  gender: "man" | "woman" | "other"
  age: number
}

type Props<T extends keyof MyFieldValues> = {
  label: string
  control: Control<MyFieldValues>
  name: T
  value: MyFieldValues[T]
}
export const Checkbox = <T extends keyof MyFieldValues>({
  label,
  control,
  name,
  value,
}: Props<T>) => {
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
