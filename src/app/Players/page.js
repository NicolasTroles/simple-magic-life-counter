"use client";

import Image from "next/image";

export default function Position3({
  players,
  updatePlayer,
  totalPlayers,
  allUp,
}) {
  if (!players) return <div></div>;

  const getPlayerContent = (player) => {
    return (
      <div
        key={player.name}
        className="text-2xl basis-1/2 relative flex gap-5 flex-1 flex-row  items-center justify-center w-full cursor-pointer py-5 px-4 bg-red-50"
      >
        <Image
          src={`/${player.name}.png`}
          alt={player.name}
          fill
          className={`object-cover ${
            player.totalLife <= 0 ? "opacity-50" : ""
          }`}
        />

        <div className="flex gap-5 justify-center">
          <button
            className="w-16 h-16 bg-white text-black z-30 text-5xl opacity-70 touch-manipulation flex items-center justify-center active:bg-gray-500 transition-all"
            onClick={() => updatePlayer(player.name, player.totalLife - 1)}
          >
            -
          </button>
          <button
            className="w-16 h-16 bg-white text-black z-30 text-5xl opacity-70 touch-manipulation flex items-center justify-center active:bg-gray-500 transition-all"
            onClick={() => updatePlayer(player.name, player.totalLife + 1)}
          >
            +
          </button>
        </div>
        <p
          className={`text-4xl text-white z-20 px-6 py-4 ${
            player.totalLife < 15 ? "bg-red-500/60" : "bg-black/60 "
          }`}
        >
          {player.totalLife}
        </p>
      </div>
    );
  };

  return (
    <div className="w-full max-h-full min-h-full flex-wrap flex justify-between">
      {players.map((player, index) => {
        if (!allUp && index < totalPlayers / 2) {
          return (
            <div className="rotate-180 flex-1 flex basis-1/2" key={player.name}>
              {" "}
              {getPlayerContent(player)}
            </div>
          );
        }
        return getPlayerContent(player);
      })}
    </div>
  );
}
