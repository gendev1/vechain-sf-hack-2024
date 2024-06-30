import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import {Button} from "./ui/button"
import { ClassAttributes, HTMLAttributes } from "react"
import { JSX } from "react/jsx-runtime"
import { ResponsiveRadar } from '@nivo/radar'
import {Card,  CardContent } from "./ui/card"

export default function ProfileCard(){


    
    return  <>
    <div className="flex flex-col items-center justify-center gap-6 px-6 pb-8 pt-12 w-full">
    <Avatar className="w-24 h-24 border-4 border-primary">
      <AvatarImage src="/placeholder-user.jpg" />
      <AvatarFallback>JP</AvatarFallback>
    </Avatar>
    <div className="grid gap-1 text-center">
      <h2 className="text-2xl font-bold text-black">Jared Palmer</h2>
      <p className="text-sm text-muted-foreground">
        <span className="font-medium text-black">Location:</span>  {"  "}
        San Francisco, CA
      </p>
      <p className="text-sm text-black">
        <span className="font-medium text-black">Sport:</span>  {"  "}
        Basketball
      </p>
      <p className="text-sm text-black">
        <span className="font-medium text-black">Mentor:</span>  {"  "}
        LeBron James
      </p>
    </div>
    </div>
    <div className="w-full px-6 pb-4 bg-primary-foreground/10 backdrop-blur-sm">
    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" onClick={onSubmit}>
      Claim B3TR Tokens
    </Button>
  </div>
    <div className="w-full max-w-[500px] ">
        <Card className="m-4">
            <CardContent>
      <LineChart className="aspect-square" />
      </CardContent>
      </Card>
    </div>
  
  
  </>
}


function LineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
    const data = [
        { metric: 'nutrition', john: 12, avg: 32, },
        { metric: 'endurance', john: 25, avg: 15 },
        { metric: 'stamina', john: 5, avg: 22 },
        { metric: 'skill', john: 19, avg: 17 }
    ]
    
    return (
      <div {...props}>
         <ResponsiveRadar
        data={data}
        keys={['john', 'avg']}
        indexBy="metric"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      </div>
    )
  }
  
  