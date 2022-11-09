import React, { useRef, useState, useEffect } from "react";
import song from "../assets/song.mp3";
// import "../assets/css/audio.css";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);

  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <>
      <audio
        ref={audioRef}
        src={song}
        loop={false}
        onLoadedData={(event) => setDuration(event.target.duration)}
        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
      />
      <div className="h-screen flex justify-center items-center flex-col gap-4">
        <h3 className=" font-semibold text-3xl ">Audio Player</h3>
        <div className=" flex items-center text-3xl ">
          {isPlaying ? (
            <BsFillPauseCircleFill
              className=" text-3xl cursor-pointer "
              onClick={playPause}
            />
          ) : (
            <BsFillPlayCircleFill
              className=" text-3xl cursor-pointer "
              onClick={playPause}
            />
          )}
          <div className="hidden sm:flex flex-row items-center">
            <input
              value={appTime}
              type="range"
              step="any"
              min="0"
              max={duration}
              className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
              onInput={(e) => setSeekTime(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
