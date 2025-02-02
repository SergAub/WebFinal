import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-BlueBG text-Text p-8 shadow-up flex items-center justify-between">
            <div className="relative w-24 h-24">
                <Image
                    src="/LogoFinalWEB.png"
                    alt="Logo"
                    layout="fill"
                    className="object-cover"
                />
            </div>
            <h1 className="flex-grow text-left mx-4 text-3xl font-bold">
                История НАТК
            </h1>
            <button className="button ml-auto">
                Выход
            </button>
        </header>
    );
}