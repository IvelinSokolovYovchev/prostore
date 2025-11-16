import { FC } from "react";
import { cn } from "@/lib/utils";

interface IProductPriceProps {
  value: number;
  className?: string;
  currency?: string;
}

export const ProductPrice: FC<IProductPriceProps> = ({ value, className }) => {
  const stringValue = value.toString();
  const [integerPart, decimalPart] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-sm align-super">$</span>
      {integerPart}
      <span className="text-sm align-super">{decimalPart}</span>
    </p>
  );
};
