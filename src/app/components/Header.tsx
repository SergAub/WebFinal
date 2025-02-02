import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-BlueBG text-Text p-8 shadow-lg flex items-center justify-between w-full max-w-7xl rounded-xl">
            <div className="relative w-12 h-12 md:w-24 md:h-24">
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
            <Link href="/" className="button ml-auto">
                Выход
            </Link>
        </header>
    );
}