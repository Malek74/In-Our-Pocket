import { Select, SelectItem, select } from "@nextui-org/react";

export default function FilterItemDropDown({
  values,
  value,
  attribute,
  onChange,
  column,
  variant,
}: {
  value: any;
  values: string[];
  attribute: string;
  onChange: (selectedValue: string, selectedColumn: string) => void;
  column: string;
  variant: string;
}) {
  switch (variant) {
    case "regular":
      return (
        <FilterItemDropDownRegular
          values={values}
          value={value}
          attribute={attribute}
          onChange={onChange}
          column={column}
        />
      );
    case "large":
      return (
        <FilterItemDropDownLarge
          values={values}
          value={value}
          attribute={attribute}
          onChange={onChange}
          column={column}
        />
      );
    default:
      return (
        <FilterItemDropDownRegular
          values={values}
          value={value}
          attribute={attribute}
          onChange={onChange}
          column={column}
        />
      );
  }
}

function FilterItemDropDownRegular({
  values,
  value,
  attribute,
  onChange,
  column,
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
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(event.target.value, column)
        }
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

function FilterItemDropDownLarge({
  values,
  value,
  attribute,
  onChange,
  column,
}: {
  value: any;
  values: string[];
  attribute: string;
  onChange: (selectedValue: string, selectedColumn: string) => void;
  column: string;
}) {
  return (
    <div className="w-[200px] justify-center align-middle">
      <Select
        label={attribute}
        className=""
        variant="bordered"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(event.target.value, column)
        }
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
