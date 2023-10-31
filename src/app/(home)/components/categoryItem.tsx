import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { Category } from "@prisma/client"

interface CategoryItemPros {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemPros) => {

    return (
        <div>
            <Badge variant="outline" className="py-3 flex items-center justify-center gap-2 rounded-lg cursor-pointer">
                {CATEGORY_ICON[category.slug as keyof typeof CategoryItem]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </div>
    );
}



export default CategoryItem;