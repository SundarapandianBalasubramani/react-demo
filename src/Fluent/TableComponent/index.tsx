import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { ITableComponent } from "./types";
import { DeleteRegular, EditRegular } from "@fluentui/react-icons";
import { Events } from "../../Components/Modal/Actions";

export const TableComponent = <T,>({
  columns,
  isLoading,
  data,
  keyField,
  onGridEvent,
}: ITableComponent<T>) => {
  return (
    <Table arial-label="Default table" style={{ minWidth: "510px" }}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey}>
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {!isLoading && data
          ? data.map((item) => (
              <TableRow key={item[keyField as keyof T] as string}>
                {columns.map((column) =>
                  column.columnKey !== "actions" ? (
                    <TableCell key={column.columnKey}>
                      {item[column.columnKey as keyof T] as string}
                    </TableCell>
                  ) : undefined
                )}

                <TableCell>
                  <Button
                    icon={<EditRegular />}
                    onClick={() => onGridEvent(Events.Edit, item)}
                  />
                  &nbsp;&nbsp;
                  <Button
                    icon={<DeleteRegular />}
                    onClick={() => onGridEvent(Events.Delete, item)}
                  />
                </TableCell>
              </TableRow>
            ))
          : undefined}
      </TableBody>
    </Table>
  );
};
