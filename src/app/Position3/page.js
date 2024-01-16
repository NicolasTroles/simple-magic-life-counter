"use client";

import Image from "next/image";

export default function Position3({ players, updatePlayer, totalPlayers }) {
  if (!players) return <div></div>;

  const getPlayerContent = (player) => {
    return (
      <div
        key={player.name}
        className="text-2xl relative flex gap-2 flex-1 flex-col items-center justify-center w-full cursor-pointer py-5 px-4 bg-red-50"
      >
        <Image
          src={`/${player.name}.png`}
          alt={player.name}
          fill
          className={`object-cover ${
            player.totalLife <= 0 ? "opacity-50" : ""
          }`}
        />
        <p className="text-4xl text-white z-20 px-6 py-4 bg-black/60">
          {player.totalLife}
        </p>
        <div className="flex gap-5 w-full justify-center">
          <button
            className="w-12 h-12 bg-white text-black z-30 text-3xl opacity-70"
            onClick={() => updatePlayer(player.name, player.totalLife - 1)}
          >
            -
          </button>
          <button
            className="w-12 h-12 bg-white text-black z-30 text-3xl opacity-70"
            onClick={() => updatePlayer(player.name, player.totalLife + 1)}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-h-screen min-h-screen flex flex-col justify-between">
      {players.map((player, index) => {
        if (index < totalPlayers / 2) {
          return (
            <div className="rotate-180 flex-1 flex" key={player.name}>
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
