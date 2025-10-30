import Image from "next/image";
export default function HomelistFirst() {
    return (
        <section>
            <div className="grid grid-rows-2 gap-2">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        full stack developper
                        <span> with a love for clean UI and fast apps </span>
                        <div className="">
                            <Image
                                src="/"
                                alt="computer developer"
                                width={80}
                                height={80}
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-2">
                        <div className="bg-amber-800">
                            <div className="bg-amber-200">
                                <span> Based in </span>
                                Berlin
                            </div>
                            <div>
                                <Image
                                    src="/"
                                    alt="Localisations"
                                    width={50}
                                    height={80}
                                />
                            </div>
                        </div>
                        <div className="bg-green-400">
                            <span> Coding since </span>
                            September 2023
                            <div className="">
                                <Image
                                    src={"/"}
                                    alt="Code interface"
                                    width={50}
                                    height={80}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-200">
                            <span> What I do </span>
                            Focused on fast builds, clean code, and smart design
                        </div>
                        <div className="bg-amber-200 col-span-2">
                            <span>  Always learning </span>
                            Exploring
                            Next.js & Rust
                            <div className="">
                                <Image
                                    src="/"
                                    alt="call emoji"
                                    width={50}
                                    height={80}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
