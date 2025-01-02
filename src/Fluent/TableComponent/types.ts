import { Events } from "../../Components/Modal/Actions";

export interface IColumn {
  columnKey: string;
  label: string;
}

export interface ITableComponent<T> {
  columns: IColumn[];
  isLoading?: boolean;
  data?: T[];
  keyField: string;
  onGridEvent: (e: Events, data: T) => void;
}
