

import { Card,  CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import {Button} from "@/components/ui/button"
import { useCallback } from "react";
import {  getDeviceId } from "../util";
import { useWallet } from "@vechain/dapp-kit-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitReceipt } from "../networking";
import { useSubmission } from "../hooks";
import {Droplet, Dumbbell, Aperture, Soup} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"



export default function ScheduleCard(){
    const [water, setWater] = useState(false);
    const [excercise, setExcercise] = useState(false);
    const [meals, setMeals] = useState(false);
    const [pic, setPic] = useState(false);

    const { account } = useWallet();
    const { toast } = useToast()

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {  setResponse } = useSubmission();
  
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
      
      if (!(water && excercise && meals && pic)) {
        alert("Please complete all the tasks");
        return;
      }
     
      const captcha = await handleCaptchaVerify();

      if (!captcha) {
        alert("Captcha failed, please try again");
        return;
      }

      const deviceID = await getDeviceId();

      try {
        await submitReceipt({
          address: account ?? '0x65AB54e2a8DDEf32A04265Ff4D78dBbD50E591BC',
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
    [account, excercise, handleCaptchaVerify, meals, pic, setResponse, toast, water]
  );

    return <>
    <div className="grid w-full p-4 gap-2">
      
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-2xl font-extrabold">
          Regime
        </p>
        <p className="">
          Log Today's Training Details
        </p>
        <p className="text-4xl font-extrabold py-4">
          Day 21
        </p>
      </div>
    </div>
     <div className="grid w-full grid-cols-2 gap-2">
      <Card >
      <CardHeader>
      <Droplet className="text-blue-500"/>
      <br />
        <CardTitle>Water Intake</CardTitle>
        <CardDescription>2 gallons</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex items-center space-x-2">
      <Label htmlFor="water">Completed</Label>
      <Switch id="water" checked={water} onCheckedChange={setWater}/>
    </div>
      
      </CardContent>
    </Card>

    <Card >
      <CardHeader>
      <Dumbbell className="text-red-500"/>
      <br />
      
        <CardTitle>Excercise </CardTitle>
        <CardDescription>40 min Cardio</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex items-center space-x-2">
      <Label htmlFor="excercise">Completed</Label>
      <Switch id="excercise" checked={excercise} onCheckedChange={setExcercise}/>
        </div>
        
      
      </CardContent>
    </Card>
    <Card >
      <CardHeader>
      <Soup className="text-yellow-700"/>
      <br />
        <CardTitle>Meals </CardTitle>
        <CardDescription>1800 cal
        </CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex items-center space-x-2">
      <Label htmlFor="meal">Completed</Label>
      <Switch id="meal" checked={meals} onCheckedChange={setMeals}/>
        </div>
      
      </CardContent>
    </Card>
    <Card >
      <CardHeader>
      <Aperture className="text-purple-500"/>
      <br />
        <CardTitle>Progress Pic</CardTitle>
        <CardDescription>Upload your daily progress picture</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex items-center space-x-2">
      <Label htmlFor="pic">Completed</Label>
      <Switch id="pic" checked={pic} onCheckedChange={setPic}/>
        </div>
      
      </CardContent>
    </Card>
    </div>
    
    </div>
    <div className="w-full px-6 py-4 bg-primary-foreground/10 backdrop-blur-sm">
    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" onClick={onSubmit}>
      Get B3TR
    </Button>
    </div>
  </>
}