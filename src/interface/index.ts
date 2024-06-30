type ICountdown = {
    expiresAt: string | number | Date;
    rest?: unknown;
};
type ITimer = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export type { ICountdown, ITimer };

