import { useForm } from "react-hook-form"
import { Checkbox, MyFieldValues } from "./Checkbox"

function App() {
  const { control } = useForm<MyFieldValues>()

  return (
    <div>
      <Checkbox label="test" control={control} name="gender" value="man" />
      <Checkbox label="test" control={control} name="age" value={1} />
    </div>
  )
}

export default App
