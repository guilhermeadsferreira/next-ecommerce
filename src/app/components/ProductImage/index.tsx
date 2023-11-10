import Image from "next/image";
import { ProductImageProps } from "./types";

const ProductImage: React.FC<ProductImageProps> = ({ product, fill }) => {
  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.title}
      className="object-cover"
      placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    />
  ) : (
    <Image
      src={product.image}
      width={400}
      height={700}
      alt={product.title}
      className="object-cover"
      placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    />
  );
};

export default ProductImage;
