import { ButtonSection } from "../components/core/ButtonSection/ButtonSection";
import { FavouriteJokeSection } from "../components/core/FavouriteJokesSection/FavouriteJokeSection";
import { JokeContainer } from "../components/core/JokeContainer/JokeContainer";
import { useData } from "../hooks/useData";

export function HomePage() {
  const {data, getData} = useData();

  return(
    <div className="flex flex-wrap justify-center items-start gap-4">
      <div className="flex flex-col justify-center items-center gap-4 w-xl">
       <JokeContainer data={data} />
       <ButtonSection data={data} getData={() => getData()}/>
      </div>
      <FavouriteJokeSection />
    </div>
  )
}