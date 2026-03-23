import { HeartPlus, Timer, TimerOff, Trash, Zap } from "lucide-react";
import { Button } from "../../ui/Button/Button";
import { useEffect, useState } from "react";
import { useFavouriteJokes } from "../../../hooks/useFavouriteJokes";
import type { Joke } from "../../../types/joke";

interface ButtonSectionProps {
    data: Joke | null;
    getData: () => void;
}

export function ButtonSection({data, getData}: ButtonSectionProps) {
    const [intervalId, setIntervalId] = useState<number | null>(null);
    const { favouriteJokes, handleAddToFavourites, handleClearFavourites } = useFavouriteJokes();

    const isInFavourites = data ? favouriteJokes?.some((joke) => joke.id === data.id) : false;
    
    const getJoke = () => {
      getData();
    }
    
    const getJokeEveryThreeSeconds = () => {
      getData();
      const id = setInterval(() => {
          getData();
      }, 3000);
      setIntervalId(id);
    }
    
    const stopJokeInterval = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
    }
    }
    
    useEffect(() => {
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
        };
    }, [intervalId]);

    return(
        <div className="flex justify-center flex-wrap gap-4">
          <Button bgColor="bg-teal-500" text="New joke" icon={<Zap />} onClick={getJoke} />
          <Button bgColor="bg-teal-500" text="New joke every 3 secs" icon={<Timer />} onClick={getJokeEveryThreeSeconds} />
          <Button bgColor="bg-red-500" text="Stop" icon={<TimerOff />} onClick={stopJokeInterval} />
          <Button bgColor="bg-green-500" text="Add to favourites" icon={<HeartPlus />} onClick={() => data && handleAddToFavourites(data)} disabled={!data || isInFavourites}/>
          <Button bgColor="bg-gray-500" text="Clear all" icon={<Trash />} onClick={handleClearFavourites} disabled={!favouriteJokes || favouriteJokes.length === 0}/>
        </div>
    )
}