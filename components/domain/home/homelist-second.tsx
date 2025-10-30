import CarouselProjects from "@/components/domain/home/carousel";

export default function HomelistSecond () {
    return (
        <section className="w-auto flex flex-col gap-4">
            <div className="w-auto flex justify-center items-center gap-8">
                <div className="">
                    <span> Projects </span>
                    Latest Projects
                </div>
                <button className="bg-blue-600"> View all </button>
            </div>
            <div className="w-auto flex justify-center items-center gap-6">
                <CarouselProjects />
            </div>
        </section>
    )
}
