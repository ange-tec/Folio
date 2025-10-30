import CarouselProjects from "@/components/domain/home/carousel";

export default function HomelistSecond () {
    return (
        <section className="w-auto">
            <div className="d-flex flex-row align-items-center">
                <div className="">
                    <span> Projects </span>
                    Latest Projects
                </div>
                <button className="bg-blue-600"> View all </button>
            </div>
            <div className="">
                <CarouselProjects />
            </div>
        </section>
    )
}
