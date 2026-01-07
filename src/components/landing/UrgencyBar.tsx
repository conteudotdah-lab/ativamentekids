import { useState, useEffect } from "react";

const UrgencyBar = () => {
  const [time, setTime] = useState({ hours: 1, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-primary py-2 px-4">
      <div className="container flex items-center justify-center gap-2 text-primary-foreground">
        <span className="text-sm font-semibold tracking-wide">DESCONTO SÓ HOJE</span>
        <span className="text-sm font-bold text-yellow-300">
          {new Date().toLocaleDateString("pt-BR")}
        </span>
      </div>
    </div>
  );
};

export default UrgencyBar;
