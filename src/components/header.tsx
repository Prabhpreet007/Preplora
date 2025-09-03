import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/clerk-react'

import { Container } from './container';
import { LogoContainer } from './logo-container';
import { NavigationRoutes } from './navigation-routes';
import { NavLink } from 'react-router';
import { ProfileContainer } from './profile-container';
import { ToggleContainer } from './toggle-container';

const Header = () => {

  const {userId}= useAuth();

  return <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
    <Container>
      <div className='flex items-center gap-8 w-full'>
        <LogoContainer/>
        <nav className="hidden md:flex items-center gap-6">
        <NavigationRoutes/>
        {userId && (
          <NavLink
                        to={"/generate"}
                        className={({ isActive }) =>
                            cn(
                                "text-base text-neutral-600",
                                isActive && "text-neutral-900 font-semibold"
                            )
                        }
                    >
                        Take An Interview
                    </NavLink>
        )}
        </nav>

        {/* profile section */}

        <div className='ml-auto flex items-center gap-6'>

          {/* profile section */}
          <ProfileContainer/>

          <ToggleContainer/>


        </div>
        
      </div>
    </Container>
  </header>
  
}

export default Header