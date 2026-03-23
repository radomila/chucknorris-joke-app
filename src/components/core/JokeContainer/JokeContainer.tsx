import { Quote } from "lucide-react";
import type { Joke } from "../../../types/joke";

interface JokeContainerProps {
    data: Joke | null;
}

export function JokeContainer({data}: JokeContainerProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-8 rounded-xl border-1 border-slate-700 p-10 text-lg font-bold w-130 bg-slate-800">
            <Quote className="w-10 h-10 text-teal-500/40"/>
            {data ? data.value : "No joke yet. Click the button to get a joke!"}
        </div>
    )
}