import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const data =
    [
        {
            title: "Llkdo",
            description: "A website project to help entreprises to offer some gifts employees",
            image: "",
         },
        {
            title: "Anticimex.shop",
            description: "Voici mon premier projet",
            image: ""
        },
        {
            title: "Pg Particulier",
            description: "Voici mon premier projet",
            image: ""
        }
    ]

export  default function CarouselProjects() {
    return (
        <Carousel className="w-full max-w-xl">
            <CarouselContent>
                {data.map((projet, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardContent className="aspect-square items-center justify-center">
                                <div className="flex flex-col gap-10">
                                    <div className="bg-red-200">
                                        <h3>{projet.title} </h3>
                                        <p>{projet.description}</p>
                                    </div>
                                    <div className="bg-amber-600">
                                        {projet.image}
                                    </div>
                                    <div className="bg-amber-200">
                                        Les technos
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
