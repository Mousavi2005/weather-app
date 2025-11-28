import Header from "@/components/header/header";
import TopBody from "@/components/top-body/top-body";
import Body from "@/components/body/body";

export default function Home() {

    return (
        <main className="w-screen h-screen bg-[hsl(243,96%,9%)] text-white">
            <Header></Header>
            <TopBody></TopBody>
            <Body></Body>
        </main>
    );
}
