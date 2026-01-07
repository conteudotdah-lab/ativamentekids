import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
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
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-red-500 to-primary rounded-2xl p-6 text-center max-w-md mx-auto mb-10">
      <div className="flex items-center justify-center gap-2 text-primary-foreground mb-3">
        <Clock className="w-5 h-5" />
        <span className="font-semibold text-sm">OFERTA ESPECIAL EXPIRA EM:</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="bg-white rounded-lg px-4 py-2 min-w-[60px]">
          <span className="text-2xl font-bold text-foreground">{formatNumber(time.hours)}</span>
          <p className="text-xs text-muted-foreground uppercase">Horas</p>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 min-w-[60px]">
          <span className="text-2xl font-bold text-foreground">{formatNumber(time.minutes)}</span>
          <p className="text-xs text-muted-foreground uppercase">Min</p>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 min-w-[60px]">
          <span className="text-2xl font-bold text-foreground">{formatNumber(time.seconds)}</span>
          <p className="text-xs text-muted-foreground uppercase">Seg</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
