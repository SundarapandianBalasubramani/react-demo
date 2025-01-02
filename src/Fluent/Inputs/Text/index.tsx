import { Field, Input, InputOnChangeData } from "@fluentui/react-components";

const Text: React.FC<{
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  value?: string;
  label: string;
  name: string;
}> = ({ onChange, value, label, name }) => {
  return (
    <Field label={label}>
      <Input onChange={onChange} name={name} value={value} />
    </Field>
  );
};

export default Text;
