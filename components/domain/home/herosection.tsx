import Image from "next/image";
export default function Herosection () {
    return (
        <div className="w-auto d-flex grid-cols-1 grid-rows-1 gap-28">
            <div className="d-flex w-auto p-10">
                <div className="bg-gray-200">
                    <div className="">
                        container
                        <Image
                            src="/pf-official/public/download.png"
                            alt="Ange Robert M"
                            width={100}
                            height={100}
                        />
                        <div className="">
                            clignotant
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl">
                    Hi I'm Ange Robert
                    <br/>
                    <span> I press button and interface will come </span>
                </h1>
            </div>
            <div className="w-auto d-flex grid-cols-1 grid-rows-1 gap-10 p-10 bg-black text-white">
                Icones
            </div>
        </div>
    );
}
