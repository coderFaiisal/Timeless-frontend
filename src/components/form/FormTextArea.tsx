import { Input } from "@material-tailwind/react";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({ name, label, value, placeholder }: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            label={label}
            crossOrigin={undefined}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
