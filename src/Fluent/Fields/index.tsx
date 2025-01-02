import { InputOnChangeData } from "@fluentui/react-components";

import Text from "../Inputs/Text";
export interface IField {
  label: string;
  name: string;
  type: "TEXT" | "NUMBER" | "DATE" | "SELECT";
}

export const Fields: React.FC<{
  ind;
  data: IField[];
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
}> = ({ data, onChange }) => {
  return (
    <>
      {data.map((field) => {
        switch (field.type) {
          case "TEXT":
            return <Text {...field} onChange={onChange} />;
          case "NUMBER":
            return null;
          case "DATE":
            return null;
          case "SELECT":
            return null;
          default:
            return null;
        }
      })}
    </>
  );
};
