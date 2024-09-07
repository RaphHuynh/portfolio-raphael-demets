const AnimatedWaves = () => {
    return (
      <div className="waves-container fixed inset-0 -z-10 overflow-hidden">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,204,204,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="4" fill="rgba(255,204,204,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="6" fill="rgba(255,204,204,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,204,204,0.1)" />
          </g>
        </svg>
        <style jsx>{`
          .waves-container {
            position: fixed;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
           
          }
          .waves {
             position: fixed;
            bottom: 0;
            width: 100%;
            height: 100px;
            min-height: 50px;
            max-height: 100px;
          }
          .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
          }
          .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
          .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
          .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
          .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
          @keyframes move-forever {
            0% { transform: translate3d(-90px,0,0); }
            100% { transform: translate3d(85px,0,0); }
          }
        `}</style>
      </div>
    );
  };
  
  export default AnimatedWaves;