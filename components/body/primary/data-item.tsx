type DataItemProp = {
    title: string,
    value: number
}

export default function DataItem({title, value}: DataItemProp) {

    return (
        <div className="w-[22%] h-full flex flex-col items-start">
            <span>{title}</span>
            <span>{value}</span>
        </div>
    )
}
