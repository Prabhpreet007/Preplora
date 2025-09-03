
// import { Link } from 'react-router'

// export const LogoContainer = () => {
//   return (
//     <Link to={"/"}>
//     <img src="/src/assets/svg/logo.svg" className='min-w-10 min-h-10 object-contain' alt="" />
//     </Link>
// )
// }



import { Link } from "react-router";
import logo from "@/assets/svg/logo.svg"; // ✅ direct import

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src={logo} // ✅ imported asset ka use
        className="w-32 h-auto object-contain"
        alt="Preplora Logo"
      />
    </Link>
  );
};
