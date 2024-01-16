"use client";

import { useState } from "react";

import Image from "next/image";
import Position3 from "./Position3/page";

export default function Home() {
  const [erik, setErik] = useState(false);
  const [johann, setJohann] = useState(false);
  const [matheus, setMatheus] = useState(false);
  const [nicolas, setNicolas] = useState(false);
  const [willian, setWillian] = useState(false);

  const [players, setPlayers] = useState({});

  const [start, setStart] = useState(false);

  const [newLife, setLife] = useState(0);

  const handleAddPlayers = (player) => {
    const newPlayers = players;

    if (players[player]) {
      newPlayers[player] = null;
    } else {
      const playerContent = {
        name: player,
        totalLife: 40,
      };
      newPlayers[player] = playerContent;
    }
  };

  const updatePlayer = (player, life) => {
    const newPlayers = players;

    newPlayers[player].totalLife = life;

    setPlayers(newPlayers);
    setLife(newLife + 1);
  };

  const totalPlayers = Object.values(players)?.length;

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-start">
      {!start ? (
        <div className=" p-24">
          <h1 className="text-xl mb-20">Selecione os Participantes</h1>
          <div>
            <div className="flex gap-2 items-center mb-4">
              <input
                className="w-10 h-10  cursor-pointer"
                type="checkbox"
                id="erik"
                name="erik"
                value="erik"
                onChange={(e) => {
                  handleAddPlayers("erik");
                  setErik(e.target.checked);
                }}
              />
              <label
                className="text-2xl flex gap-2 items-center  cursor-pointer"
                htmlFor="erik"
              >
                <Image src={"/erik.png"} width={75} height={75} alt={"erik"} />
                Erik Brabo
              </label>
            </div>

            <div className="flex gap-2 items-center mb-4">
              <input
                className="w-10 h-10  cursor-pointer"
                type="checkbox"
                id="johann"
                name="johann"
                value="johann"
                onChange={(e) => {
                  handleAddPlayers("johann");
                  setJohann(e.target.checked);
                }}
              />
              <label
                className="text-2xl flex gap-2 items-center  cursor-pointer"
                htmlFor="johann"
              >
                <Image
                  src={"/johann.png"}
                  width={75}
                  height={75}
                  alt={"johann"}
                />
                Johann Assassino
              </label>
            </div>

            <div className="flex gap-2 items-center mb-4">
              <input
                className="w-10 h-10  cursor-pointer"
                type="checkbox"
                id="matheus"
                name="matheus"
                value="matheus"
                onChange={(e) => {
                  handleAddPlayers("matheus");
                  setMatheus(e.target.checked);
                }}
              />
              <label
                className="text-2xl flex gap-2 items-center  cursor-pointer"
                htmlFor="matheus"
              >
                <Image
                  src={"/matheus.png"}
                  width={75}
                  height={75}
                  alt={"matheus"}
                />
                Matheus Matador
              </label>
            </div>

            <div className="flex gap-2 items-center mb-4">
              <input
                className="w-10 h-10  cursor-pointer"
                type="checkbox"
                id="nicolas"
                name="nicolas"
                value="nicolas"
                onChange={(e) => {
                  handleAddPlayers("nicolas");
                  setNicolas(e.target.checked);
                }}
              />
              <label
                className="text-2xl flex gap-2 items-center  cursor-pointer"
                htmlFor="nicolas"
              >
                <Image
                  src={"/nicolas.png"}
                  width={75}
                  height={75}
                  alt={"nicolas"}
                />
                Nicolas Violento
              </label>
            </div>

            <div className="flex gap-2 items-center mb-4">
              <input
                className="w-10 h-10  cursor-pointer"
                type="checkbox"
                id="willian"
                name="willian"
                value="willian"
                onChange={(e) => {
                  handleAddPlayers("willian");
                  setWillian(e.target.checked);
                }}
              />
              <label
                className="text-2xl flex gap-2 items-center  cursor-pointer"
                htmlFor="willian"
              >
                <Image
                  src={"/willian.png"}
                  width={75}
                  height={75}
                  alt={"willian"}
                />
                Willian Sanguinário
              </label>
            </div>
            <button
              disabled={totalPlayers < 2}
              onClick={() => setStart(true)}
              className="bg-blue-500 w-full mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Começar
            </button>
          </div>
        </div>
      ) : (
        totalPlayers && (
          <Position3
            players={Object.values(players)}
            updatePlayer={updatePlayer}
            totalPlayers={totalPlayers}
          />
        )
      )}
    </main>
  );
}
