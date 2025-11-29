import Input from "./input"

export default function TopBody() {
    return (
        <section className="w-[85%] h-[20%] flex items-center justify-between">
            <p className="text-3xl font-semibold text-gray-800">How's the sky looking today?</p>
            <Input></Input>
        </section>
    )
}
