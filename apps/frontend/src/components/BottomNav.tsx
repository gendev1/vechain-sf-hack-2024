
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

interface BottomNavProps {
    onClick: (value: string) => void
  }

export default function BottomNav({onClick}:BottomNavProps) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
        <nav className="flex justify-around items-center h-16">
          <p
            onClick={()=>onClick('regime')}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition"
             
          >
            <ClipboardListIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Regime</span>
          </p>
          <p
            onClick={()=>onClick('chat')}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition"

          >
            <MessageCircleIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Chat</span>
          </p>
          <p
            onClick={()=>onClick('mentor')}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition"
             
          >
            <UserIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Mentor</span>
          </p>
          <p
            onClick={()=>onClick('profile')}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition"
             
          >
            <CircleUserIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </p>
        </nav>
      </div>
    )
  }
  
  function CircleUserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </svg>
    )
  }
  
  
  function ClipboardListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    )
  }
  
  
  function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }
  
  
  function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }