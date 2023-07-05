import { useLoaderData } from 'react-router-dom';
import Ability from '../../components/Character/Ability';

export default function Character() {
  const { data } = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl font-bold">{data.character.name}</h1>
      <div className="flex gap-1">
        {data.character.factions.map(faction => (
          <span className="bg-slate-300 px-1 rounded text-sm" key={faction.id}>
            {faction.name}
          </span>
        ))}
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Abilities</h2>
          {data.character.abilities.map(ability => {
            return <Ability key={ability.id} {...ability} />;
          })}
        </div>
        <div className="col-span-2 p-10">
          <img src={data.character.image.url} alt={data.character.name} />
        </div>
        <div className="p-10 bg-slate-600 h-52">
          <h1 className="text-xl font-bold text-white">Mods</h1>
        </div>
      </div>
    </div>
  );
}
