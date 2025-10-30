import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const data = [
    {
        title: "Llkdo",
        description: "A website project to help entreprises to offer some gifts employees",
        image: "",
     },
    {
        intro: "Featured project",
        title: "Projet 2",
        description: "Voici mon premier projet"
    }]

export  default function CarouselProjects() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {data.map((projet, index) => (
                    <CarouselItem key={index}>
                            <Card>
                                <CardContent className="aspect-square items-center justify-center">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-red-200"> 1 </div>
                                        <div className="bg-amber-600">
                                            {projet.image}
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
