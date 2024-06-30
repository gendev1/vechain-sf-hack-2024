import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {Button} from "./ui/button"
import { useCallback } from "react"
import { useToast } from "./ui/use-toast"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { getDeviceId } from "@/util"
import { submitReceipt } from "@/networking"


export default function MentorCard(){
  const { toast } = useToast()
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      alert("Recaptcha not loaded");
      return;
    }

    const token = await executeRecaptcha("submit_receipt");
    return token;
  }, [executeRecaptcha]);

  const onSubmit = useCallback(
    async () => {
      const captcha = await handleCaptchaVerify();

      if (!captcha) {
        alert("Captcha failed, please try again");
        return;
      }

      const deviceID = await getDeviceId();

      try {
        await submitReceipt({
          address: '0x65AB54e2a8DDEf32A04265Ff4D78dBbD50E591BC',
          captcha,
          deviceID,
        });

        toast({
          title: "Let's go!",
          description: "Your progress has been submitted successfully and recieved 1 B3TR token.",
          duration: 5000,
          
        });
      } catch (error) {
        alert("Error submitting progress, please try again.");
      }
    },
    [handleCaptchaVerify, toast]
  );

    return  <>
    <div className="flex flex-col items-center justify-center gap-6 px-6 pt-12 pb-8 w-full">
    <Avatar className="w-24 h-24 border-4 border-primary">
      <AvatarImage src="/charlies.jpeg" />
      <AvatarFallback>JP</AvatarFallback>
    </Avatar>
    <div className="grid gap-1 text-center">
      <h2 className="text-2xl font-bold text-black">Charles Oliveira</h2>
      <p className="text-sm  text-black">
        <span className="font-medium text-black">Location:</span>  {"  "}
        San Francisco, CA
      </p>
      <p className="text-sm  text-black">
        <span className="font-medium text-black">Sport:</span>  {"  "}
        MMA
      </p>
      <p className="text-sm  text-black">
        <span className="font-medium text-black">Twitter:</span>  {"  "}
        CharlesDoBronxs
      </p>
    </div>
    
  </div>
  <div className="w-full px-6 pb-4 bg-primary-foreground/10 backdrop-blur-sm">
    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" onClick={onSubmit}>
      Book Cal
    </Button>
  </div>
  <div className="w-full max-w-[500px]">
  <div className="flex flex-col h-screen">
      <div className="flex-1 p-4">
  <Card>
    
          <CardHeader>
            <CardTitle>Nutrition</CardTitle>
            <CardDescription>Track your daily nutrition goals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="text-lg font-semibold">Meals</h3>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center justify-between">
                    <span>Breakfast</span>
                    <span className="font-medium">300 cal</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Lunch</span>
                    <span className="font-medium">500 cal</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Dinner</span>
                    <span className="font-medium">700 cal</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Snacks</span>
                    <span className="font-medium">200 cal</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nutrition Goals</h3>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center justify-between">
                    <span>Calories</span>
                    <span className="font-medium">1800 cal</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Protein</span>
                    <span className="font-medium">120g</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Carbs</span>
                    <span className="font-medium">200g</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Fat</span>
                    <span className="font-medium">60g</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Exercise Regime</CardTitle>
            <CardDescription>Stay on top of your exercise routine.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="text-lg font-semibold">Exercises</h3>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center justify-between">
                    <span>Cardio</span>
                    <span className="font-medium">30 min</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Strength Training</span>
                    <span className="font-medium">45 min</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Yoga</span>
                    <span className="font-medium">20 min</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Stretching</span>
                    <span className="font-medium">15 min</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Exercise Goals</h3>
                <ul className="mt-2 grid gap-2">
                  <li className="flex items-center justify-between">
                    <span>Steps</span>
                    <span className="font-medium">10,000</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Active Minutes</span>
                    <span className="font-medium">120 min</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Calories Burned</span>
                    <span className="font-medium">500 cal</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
        </div>
        <br />
        <br />
        <br />
    </div>
  </>
}



  


  