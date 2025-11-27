import Input from "./input"

export default function TopBody() {
    return(
        <section className="w-full h-[20%] flex flex-col items-center justify-around">
            <h1>How's the sky looking today?</h1>
            <Input></Input>
        </section>
    )
}
