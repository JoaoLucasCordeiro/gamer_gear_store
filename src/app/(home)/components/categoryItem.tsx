import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client"
import { KeyboardIcon, MonitorIcon, HeadphonesIcon, SquareIcon, SpeakerIcon, MouseIcon } from "lucide-react"

interface CategoryItemPros {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemPros) => {

    const categoryIcon = {
        keyboards: <KeyboardIcon size={16}/>,
        monitors: <MonitorIcon size={16}/>,
        headphones: <HeadphonesIcon size={16}/>,
        mousepads: <SquareIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>,
        mouses: <MouseIcon size={16}/>
    }

    return (
        <div>
            <Badge variant="outline" className="py-3 flex items-center justify-center gap-2 rounded-lg cursor-pointer">
                {categoryIcon[category.slug as keyof typeof CategoryItem]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </div>
    );
}



export default CategoryItem;