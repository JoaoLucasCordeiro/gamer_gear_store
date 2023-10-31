import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image"
import { Badge } from "./badge";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="flex h-full w-full flex-col gap-4">
            <div className="h-[170px] relative bg-accent rounded-lg  w-full flex items-center justify-center">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
                    alt={product.name}
                />


                {product.discountPercentage > 0 && (
                    <Badge className="absolute left-2 top-2 text-sm flex items-center px-2 py-[2px]">
                        <ArrowDownIcon size={12} />
                        {product.discountPercentage} %
                    </Badge>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{product.name}</p>

                <div className="flex items-center justify-center gap-2">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="truncate font-semibold lg:text-lg">
                                R$ {product.totalPrice.toFixed(2)}
                            </p>

                            <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                                R$ {Number(product.basePrice).toFixed(2)}
                            </p>
                        </>
                    ) : (
                        <p className="truncate text-sm font-semibold">
                            R$ {product.basePrice.toFixed(2)}
                        </p>
                    )}
                </div>
            </div>


        </div>
    );
}

export default ProductItem;