import React from "react";
import { formatPrice } from "../../lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

const PriceTag = ({ price, className }: PriceTagProps) => {
  return (
    <span className={`badge px-0 ${className}`}>{formatPrice(price)}</span>
  );
};

export default PriceTag;
