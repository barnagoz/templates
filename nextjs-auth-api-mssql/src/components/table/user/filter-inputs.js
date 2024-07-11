import { Input } from "@/components/ui/input";
export default function FilterInputs ({table}){
    return (
        <div className="flex items-center pb-2 w-full gap-2">
            <Input
                placeholder="Keresés név alapján..."
                value={(table.getColumn("name")?.getFilterValue()) ?? ""}
                onChange={(event) =>
                    table.getColumn("name")?.setFilterValue(event.target.value)
                }
            />
            <Input
                placeholder="Keresés email alapján..."
                value={(table.getColumn("email")?.getFilterValue()) ?? ""}
                onChange={(event) =>
                    table.getColumn("email")?.setFilterValue(event.target.value)
                }
            />
        </div>
    );
}