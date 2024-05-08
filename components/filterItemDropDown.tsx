import { Select, SelectItem, select } from "@nextui-org/react";

export default function FilterItemDropDown({
  values,
  value,
  attribute,
  onChange,
  column
}: {
  value: any;
  values: string[];
  attribute: string;
  onChange: (selectedValue: string, selectedColumn: string) => void;
  column: string;
}) {
  return (
    <div className="w-[160px] justify-center align-middle">
      <Select
        label={attribute}
        className=""
        variant="bordered"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value, column,)}
      >
        {values.map((element) => (
          <SelectItem key={element} value={element}>
            {element}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
