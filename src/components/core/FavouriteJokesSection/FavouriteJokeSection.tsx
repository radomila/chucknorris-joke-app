import { Heart } from "lucide-react";
import { useFavouriteJokes } from "../../../hooks/useFavouriteJokes";

export function FavouriteJokeSection() {
    const { favouriteJokes } = useFavouriteJokes();
    return(
        <div className="flex flex-col justify-start items-start gap-4 my-8 rounded-xl border-1 border-slate-700 p-4 text-sm w-80 bg-slate-800">
            <div className="flex items-center gap-2 text-lg font-bold "><Heart className="text-teal-500"/> Favourites</div>
            {favouriteJokes && favouriteJokes.length > 0 ? (
                <ul className="flex flex-col gap-2 w-full">
            {favouriteJokes.map((joke) => (
              <li key={joke.id}>
                <div className="rounded-xl border-1 border-slate-700 px-2 py-4">{joke.value}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favourite jokes yet.</p>
        )} 
        </div>
    )
}