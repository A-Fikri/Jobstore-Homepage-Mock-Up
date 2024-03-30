import React, { useState, useEffect } from "react";
import "./index.css";

export default function Timer() {
  // Set the date we're counting down to (October 26, 2024 10:00:00)
  const countDownDate = new Date("Oct 26, 2024 10:00:00").getTime();

  // Initialize state for remaining time
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  // Calculate remaining time
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  // Update the remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="career-fair-banner">
      <div className="timer-component">
        <div className="time-unit">
          <p className="number">{remainingTime.days}</p>
          <p className="label">Days</p>
        </div>
        <p className="colon" id="days-colon">
          :
        </p>
        <div className="time-unit">
          <p className="number">{remainingTime.hours}</p>
          <p className="label">Hours</p>
        </div>
        <p className="colon">:</p>
        <div className="time-unit">
          <p className="number">{remainingTime.minutes}</p>
          <p className="label">Minutes</p>
        </div>
        <p className="colon">:</p>
        <div className="time-unit">
          <p className="number">{remainingTime.seconds}</p>
          <p className="label">Seconds</p>
        </div>
        <hr className="vertical-stroke" />
        <img
          src="https://assets.jobstore.my/mycareerfair/images/branding/mycareerfair_logo_heart_white.png"
          className="career-fair-logo2"
          alt="Career Fair Logo"
        />
        <hr className="vertical-stroke" />
        <div className="date-venue">
          <p className="date">26 & 27 OCTOBER 2024</p>
          <p className="venue">KUALA LUMPUR CONVENTION CENTRE</p>
        </div>
      </div>
      <div className="job-vacancy-banner">
        <img
          src="https://assets.jobstore.my/images/layouts/header_my_banner.png"
          className="government-job-image"
          alt="Government Job Banner"
        />
        <p className="job-vacancy-text-1">GOVERNMENT JOB VACANCY</p>
        <p className="job-vacancy-text-2">KERJA KOSONG KERAJAAN</p>
      </div>
      <div className="jobs-singapore-banner">
        <img
          src="https://assets.jobstore.my/images/layouts/header_sg_banner.png"
          className="jobs-in-singapore-banner"
          alt="Jobs in Singapore Banner"
        />
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import "./index.css";

// export default function Timer() {
//   // Set the date we're counting down to (October 26, 2024 10:00:00)
//   const countDownDate = new Date("Oct 26, 2024 10:00:00").getTime();

//   // Initialize state for remaining time
//   const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

//   // Calculate remaining time
//   function calculateTimeRemaining() {
//     const now = new Date().getTime();
//     const distance = countDownDate - now;

//     if (distance > 0) {
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//       return { days, hours, minutes, seconds };
//     } else {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }
//   }

//   // Update the remaining time every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime(calculateTimeRemaining());
//     }, 1000);

//     // Clear interval on component unmount
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="timer-component">
//       <div className="career-fair-banner">
//         <p>
//           {remainingTime.days} Days {remainingTime.hours} Hours{" "}
//           {remainingTime.minutes} Minutes {remainingTime.seconds} Seconds
//         </p>
//         <img
//           src="https://assets.jobstore.my/mycareerfair/images/branding/mycareerfair_logo_heart_white.png"
//           className="career-fair-logo"
//           alt="Career Fair Logo"
//         />
//         <div className="date-venue">
//           <p className="date">26 & 27 OCTOBER 2024</p>
//           <p className="venue">KUALA LUMPUR CONVENTION CENTRE</p>
//         </div>
//       </div>
//       <div className="job-vacancy-banner">
//         <img
//           src="https://assets.jobstore.my/images/layouts/header_my_banner.png"
//           className="government-job-image"
//           alt="Government Job Banner"
//         />
//         <p className="job-vacancy-text-1">GOVERNMENT JOB VACANCY</p>
//         <p className="job-vacancy-text-2">KERJA KOSONG KERAJAAN</p>
//       </div>
//       <div className="jobs-singapore-banner">
//         <img
//           src="https://assets.jobstore.my/images/layouts/header_sg_banner.png"
//           className="jobs-in-singapore-banner"
//           alt="Jobs in Singapore Banner"
//         />
//       </div>
//     </div>
//   );
// }

// import "./index.css";

// export default function Timer() {
//   // Set the date we're counting down to (October 26, 2024 10:00:00)
//   var countDownDate = new Date("Oct 26, 2024 10:00:00").getTime();

//   // Update the count down every 1 second
//   var x = setInterval(function () {
//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     document.getElementById("timer").innerHTML =
//       days + ":" + hours + ":" + minutes + ":" + seconds + "";

//     // If the count down is finished, write some text
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("timer").innerHTML = "EXPIRED";
//     }
//   }, 1000);

//   return (
//     <>
//       <div className="timer-component">
//         <div className="career-fair-banner">
//           <p id="timer"></p>
//           <img
//             src="https://assets.jobstore.my/mycareerfair/images/branding/mycareerfair_logo_heart_white.png"
//             className="career-fair-logo"
//           ></img>
//           <div className="date-venue">
//             <p className="date">26 & 27 OCTOBER 2024</p>
//             <p className="venue">KUALA LUMPUR CONVENTION CENTRE</p>
//           </div>
//         </div>
//         <div className="job-vacancy-banner">
//           <img
//             src="https://assets.jobstore.my/images/layouts/header_my_banner.png"
//             className="government-job-image"
//           ></img>
//           <p className="job-vacancy-text-1">GOVERNMENT JOB VACANCY</p>
//           <p className="job-vacancy-text-2">KERJA KOSONG KERAJAAN</p>
//         </div>
//         <div className="jobs-singapore-banner">
//           <img
//             src="https://assets.jobstore.my/images/layouts/header_sg_banner.png"
//             className="jobs-in-singapore-banner"
//           ></img>
//         </div>
//       </div>
//     </>
//   );
// }
