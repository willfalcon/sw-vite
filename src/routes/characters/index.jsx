import { Link, useLoaderData } from 'react-router-dom';
import GridCharacter from '../../components/characterGrid/GridCharacter';

export default function Characters() {
  const { data } = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl font-bold">Characters</h1>
      <div className="grid gap-4 grid-cols-5">
        {data.userCharacters.map(char => {
          console.log(char);
          return (
            <Link key={char.id} to={`/character/${char.character.slug}`}>
              <GridCharacter {...char} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
