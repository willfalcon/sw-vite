import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function GridCharacter({ character, level, stars, slot = false }) {
  return (
    <div className="w-32 mt-5">
      <p className="truncate text-sm text-center h-5">{slot ? '' : character?.slug}</p>
      <div className="relative">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border">
          {slot ? (
            <div className="w-full h-full bg-slate-300 flex items-center justify-center">Empty</div>
          ) : (
            // <div className="bg-natural-500" />
            <img className="object-cover w-full h-full object-top" src={character?.image.url} alt={character?.name} />
          )}
        </div>
        {!slot && (
          <span className="absolute bg-slate-700 text-white left-1/2 -translate-x-1/2 -bottom-2 rounded-full w-6 h-6 text-center">
            {level}
          </span>
        )}
      </div>
      <div className="flex justify-center mt-2">
        {slot ? (
          <div className="h-[16]"></div>
        ) : (
          Array.apply(null, Array(7)).map((_, i) => {
            if (i <= stars - 1) {
              return <AiFillStar className="fill-amber-500" key={i} />;
            }
            return <AiOutlineStar className="" key={i} />;
          })
        )}
      </div>
    </div>
  );
}
