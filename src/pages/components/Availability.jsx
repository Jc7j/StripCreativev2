
export default function Availability() {
  return (
    <div className="flex items-center">
      <svg
        width="8"
        height="8"
        viewBox="0 0 20 20"
        className="animate-ping"
      >
        <circle cx="10" cy="10" r="10" fill="red" />
      </svg>
      <span className="ml-2 font-medium md:text-xl text-body">
        2 spots available left - Starts at $5k/mo
      </span>
    </div>
  );
};

