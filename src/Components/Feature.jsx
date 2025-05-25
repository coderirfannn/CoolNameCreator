import React from 'react'
import { Sparkles, Zap, Target } from "lucide-react"

export default function Feature() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose StyleGen?</h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our advanced AI understands naming trends, brand psychology, and linguistic patterns to create names
                            that resonate with your audience.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    <div className="border-0 shadow-lg">
                        <div className="flex flex-col items-center space-y-4 p-6">
                            <div className="rounded-full bg-purple-100 p-3">
                                <Zap className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold">Lightning Fast</h3>
                            <p className="text-center text-gray-600">
                                Generate hundreds of unique names in seconds. No waiting, no delays.
                            </p>
                        </div>
                    </div>
                    <div className="border-0 shadow-lg">
                        <div className="flex flex-col items-center space-y-4 p-6">
                            <div className="rounded-full bg-green-100 p-3">
                                <Target className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold">Targeted Results</h3>
                            <p className="text-center text-gray-600">
                                Names tailored to your industry, style, and target audience preferences.
                            </p>
                        </div>
                    </div>
                    <div className="border-0 shadow-lg">
                        <div className="flex flex-col items-center space-y-4 p-6">
                            <div className="rounded-full bg-orange-100 p-3">
                                <Sparkles className="h-6 w-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold">Creative & Unique</h3>
                            <p className="text-center text-gray-600">
                                Stand out with creative combinations and unique linguistic patterns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
