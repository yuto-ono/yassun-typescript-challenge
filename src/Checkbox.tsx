import { Control, Controller, FieldValues } from "react-hook-form"

export type MyFieldValues = {
  gender: "man" | "woman" | "other"
  age: number
}

type Props<F extends FieldValues, T extends keyof F> = {
  label: string
  control: Control<F>
  name: T
  value: F[T]
}
export const Checkbox = <T extends keyof MyFieldValues>({
  label,
  control,
  name,
  value,
}: Props<MyFieldValues, T>) => {
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
