import type { SVGProps } from "react";

type IconName = "paddle" | "play" | "stop" | "reset" | "timer" | "chevron" | "pause" | "flag";

export default function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    paddle: <><path d="m7 17 12-12M16 4l4 4M7 13l4 4-5 4-3-3z" /></>,
    play: <path d="m9 5 11 7-11 7z" />,
    stop: <rect x="6" y="6" width="12" height="12" rx="1" />,
    reset: <><path d="M3 10a9 9 0 1 1 2 8M3 4v6h6" /></>,
    timer: <><circle cx="12" cy="14" r="8" /><path d="M12 10v4l3 2M9 2h6M12 2v4M18 6l2-2" /></>,
    chevron: <path d="m9 5 7 7-7 7" />,
    pause: <><path d="M8 5v14M16 5v14" /></>,
    flag: <><path d="M5 21V4c5-4 9 4 14 0v10c-5 4-9-4-14 0" /></>,
  };

  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
