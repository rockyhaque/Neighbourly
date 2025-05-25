import { useState, useEffect } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { MdMotionPhotosPaused } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaUpload } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import moment from "moment";

export default function TimeTracker() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const savedTime = localStorage.getItem("timerTime");
    if (savedTime) {
      setTime(parseInt(savedTime, 10));
    }

    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        localStorage.setItem("timerTime", (time + 10).toString());
      }, 10);
    }

    return () => {
      clearInterval(interval);
      if (!isRunning) {
        localStorage.removeItem("timerTime");
      }
    };
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    localStorage.removeItem("timerTime");
  };

  const handleEnd = async () => {
    const payment = calculatePayment(time);
    const timeWorked = formatTime(time); // Format the time worked

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to end the timer?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA003F",
      cancelButtonColor: "#4B0082",
      confirmButtonText: "Yes, end it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleReset();
        Swal.fire({
          title: `Good Job ✔️ ${user?.displayName}`,
          text: `You worked for ${timeWorked}.\nYour payment is ${payment} BDT.`,
          icon: "success",
          confirmButtonColor: "#4B0082",
        });
      }
    });
  };

  // Calculate the payment based on time worked
  const calculatePayment = (ms) => {
    const hoursWorked = ms / (1000 * 60 * 60);
    return Math.max(500, Math.ceil(hoursWorked) * 500); // 500 BDT per hour, minimum of 500 BDT
  };

  const formatTime = (ms) => {
    const duration = moment.duration(ms);
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    const milliseconds = Math.floor(duration.milliseconds() / 10);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-6xl font-bold text-center mb-8 font-mono">
          {formatTime(time)}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleStartStop}
            className={`btn font-semibold ${
              isRunning
                ? "bg-rose-400 hover:bg-rose-500"
                : "bg-green-300 hover:bg-green-400"
            }`}
          >
            {isRunning ? <MdMotionPhotosPaused /> : <VscDebugStart />}
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="btn text-gray-800 font-semibold"
          >
            <GrPowerReset />
            Reset
          </button>
          <button
            onClick={handleEnd}
            disabled={time < 5000} // Disable if less than 1 second
            className="btn bg-sky-300 text-sky-800 font-semibold disabled:cursor-not-allowed"
          >
            <FaUpload />
            End
          </button>
        </div>
      </div>
    </div>
  );
}
