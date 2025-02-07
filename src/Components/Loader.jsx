
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="h-12 w-24 space-x-5 gap-5  relative">
        <div className="absolute inset-0 h-full w-full gap-2 animate-loader"></div>
      </div>
      <style>{`
        @keyframes l44 {
          0%, 5%    {background-position: 0% 50%, 25% 50%, 50% 50%, 75% 50%}
          12.5% {background-position: 0% 0, 25% 50%, 50% 50%, 75% 50%}
          25%   {background-position: 0% 0, 25% 0, 50% 50%, 75% 50%}
          37.5% {background-position: 0% 100%, 25% 0, 50% 0, 75% 50%}
          50%   {background-position: 0% 100%, 25% 100%, 50% 0, 75% 0}
          62.5% {background-position: 0% 50%, 25% 100%, 50% 100%, 75% 0}
          75%   {background-position: 0% 50%, 25% 50%, 50% 100%, 75% 100%}
          87.5% {background-position: 0% 50%, 25% 50%, 50% 50%, 75% 100%}
          95%, 100% {background-position: 0% 50%, 25% 50%, 50% 50%, 75% 50%}
        }
        .animate-loader {
          height: 100%;
          width: 100%;
          --_g: no-repeat radial-gradient(farthest-side, #09c0f7 90%, transparent);
          background: var(--_g), var(--_g), var(--_g), var(--_g);
          background-size: 20% 50%;
          background-repeat: no-repeat;
          animation: l44 1s infinite linear alternate;
        }
      `}</style>
    </div>
  );
}

export default Loader
