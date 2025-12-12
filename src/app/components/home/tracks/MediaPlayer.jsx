"use client";

import Image from "next/image";
import { Caption, HeadingSecondary } from "../../typography";
import { Slider } from "@/components/ui/slider";
import { TiMediaRewind } from "react-icons/ti";
import { TiMediaFastForward } from "react-icons/ti";
import { LuShuffle } from "react-icons/lu";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const MediaPlayer = ({ isSong, isImage, isTitle }) => {
  const songRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTimestamp, setTimestamp] = useState(0);
  const [isDuration, setDuration] = useState(0);
  const [isVolume, setVolume] = useState(1);
  const togglePlay = () => {
    const song = songRef.current;
    if (!song) return;
    if (isPlaying) song.pause();
    else song.play();
    setIsPlaying(!isPlaying);
  };
  const formatTime = (sec) => {
    if (!sec) return "00:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    const song = songRef.current;
    if (!song) return;
    setTimestamp(0);
    setIsPlaying(false);
    song.currentTime = 0;
    song.onloadedmetadata = () => setDuration(song.duration);
  }, [isSong]);
  return (
    <section className="flex gap-5">
      <Image
        src={`/assets/content-img/${isImage}`}
        alt="thumbnail image"
        width={400}
        height={400}
      />
      <audio
        ref={songRef}
        src={`/assets/media/${isSong}`}
        onTimeUpdate={() => {
          const song = songRef.current;
          if (!song) return;
          setTimestamp((song.currentTime / song.duration) * 100);
        }}
      />
      <div className="grid w-full">
        <HeadingSecondary text={isTitle} />
        <Slider
          value={[isTimestamp]}
          max={100}
          className="w-full cursor-pointer"
          onValueChange={(v) => {
            const song = songRef.current;
            if (!song) return;
            song.currentTime = (v[0] / 100) * song.duration;
            setTimestamp(v[0]);
          }}
        />
        <div className="flex justify-between items-center">
          <div>
            <Caption
              text={`${formatTime(
                songRef.current?.currentTime || 0
              )} / ${formatTime(songRef.current?.duration || 0)}`}
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <TiMediaRewind
              size={30}
              className="block leading-none cursor-pointer hover:text-accent"
              onClick={() => {
                const song = songRef.current;
                if (!song) return;
                song.currentTime = Math.max(song.currentTime - 5, 0);
              }}
            />
            <div
              className="border-4 *:pl-1 rounded-full p-2 w-15 h-15 grid justify-center items-center cursor-pointer hover:border-accent hover:text-accent"
              onClick={togglePlay}>
              {isPlaying ? (
                <FaPause
                  size={30}
                  color="accent"
                />
              ) : (
                <FaPlay size={30} />
              )}
            </div>
            <TiMediaFastForward
              className="block leading-none cursor-pointer hover:text-accent"
              size={30}
              onClick={() => {
                const song = songRef.current;
                if (!song) return;
                song.currentTime = Math.min(
                  song.currentTime + 5,
                  song.duration
                );
              }}
            />
            <LuShuffle
              size={20}
              className="cursor-pointer mt-1 hover:text-accent"
            />
          </div>
          <div className="flex gap-5 justify-center items-center ">
            <HiSpeakerWave size={40} />
            <Slider
              value={[isVolume * 100]}
              max={100}
              step={1}
              className="w-40 cursor-pointer"
              onValueChange={(v) => {
                const volume = v[0] / 100;
                setVolume(volume);
                if (songRef.current) songRef.current.volume = volume;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPlayer;
