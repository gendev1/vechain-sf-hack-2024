import { DAppKitProvider } from "@vechain/dapp-kit-react";

import {
  Navbar
} from "./components";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import BottomNav from "./components/BottomNav";
import { useState } from "react";
import ScheduleCard from "./components/ScheduleCard";
import ChatbotCard from "./components/ChatbotCard";
import ProfileCard from "./components/Profile";
import MentorCard from "./components/Mentor";

// RECaptcha V3 site key (https://developers.google.com/recaptcha/docs/v3)
const VITE_RECAPTCHA_V3_SITE_KEY = import.meta.env
  .VITE_RECAPTCHA_V3_SITE_KEY as string;

function App() {
  const [page, setPage] = useState("regime");
  return (

    <GoogleReCaptchaProvider reCaptchaKey={VITE_RECAPTCHA_V3_SITE_KEY}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <DAppKitProvider
          usePersistence
          requireCertificate={false}
          genesis="test"
          nodeUrl="https://testnet.vechain.org/"
          logLevel={"DEBUG"}
        >
          <Navbar />
          {/* <InfoCard /> */}
          {
            page === "regime" ? <ScheduleCard />: <></>
          }
          {
            page === "chat" ? <ChatbotCard />: <></>
          }
          {
            page === "profile" ? <ProfileCard />: <></>
          }
          {
            page === "mentor" ? <MentorCard />: <></>
          }
          
          <Toaster />
          <BottomNav onClick={setPage}/>
        </DAppKitProvider>
        </ThemeProvider>
        
    </GoogleReCaptchaProvider>
  );
}

export default App;
