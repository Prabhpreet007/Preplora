// import { Outlet } from "react-router-dom"


// const AuthenticationLayout = () => {
//     return (
//         <div className='w-screen h-screen overflow-hidden flex items-center justify-center relative'>
//             <img src="/src/assets/img/bg.png" className="absolute w-full h-full object-cover opacity-20" alt="" />

//             <Outlet />


//         </div>)
// }

// export default AuthenticationLayout






import { Outlet } from "react-router-dom";
import bgImg from "@/assets/img/bg.png"; // ✅ import kar liya

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      <img
        src={bgImg} // ✅ imported asset ka use
        className="absolute w-full h-full object-cover opacity-20"
        alt="Background"
      />

      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
