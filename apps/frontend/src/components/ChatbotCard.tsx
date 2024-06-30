import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function ChatbotCard(){
    return <>
        <main className="flex-1 flex justify-center items-center ">
        <div className="w-full max-w-2xl rounded-2xl shadow-lg">
          <div className=" overflow-y-auto p-6 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                <BotIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl p-4 max-w-[75%]">
                <p className="text-sm">Hello! I'm Acme, your friendly AI assistant. How can I help you today?</p>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-primary rounded-2xl p-4 max-w-[75%]">
                <p className="text-sm text-primary-foreground">
                  Hi Acme! I'd like to learn more about your capabilities. What kind of tasks can you help me with?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                <BotIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl p-4 max-w-[75%]">
                <p className="text-sm">
                  I'm happy to assist you with a wide range of tasks! I can help with research, analysis, writing,
                  coding, and much more. Just let me know what you need and I'll do my best to help.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-primary rounded-2xl p-4 max-w-[75%]">
                <p className="text-sm text-primary-foreground">
                  That's great, I'd love to get started on a project. Can you give me an example of something you've
                  helped with before?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                <BotIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl p-4 max-w-[75%]">
                <p className="text-sm">
                  Absolutely! One recent project I helped with was conducting market research and competitive analysis
                  for a new SaaS product. I was able to gather insights on industry trends, identify key competitors,
                  and provide recommendations on product positioning and pricing. The client was very satisfied with the
                  results.
                </p>
              </div>
              
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                <BotIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl p-4 max-w-[75%]">
                <p className="text-sm">
                  Absolutely! One recent project I helped with was conducting market research and competitive analysis
                  for a new SaaS product. I was able to gather insights on industry trends, identify key competitors,
                  and provide recommendations on product positioning and pricing. The client was very satisfied with the
                  results.
                </p>
              </div>
              
            </div>
          </div>
          <div className="fixed bottom-10 left-0 right-0 border-t bg-white px-4 pb-10 pt-5">
            <form className="flex items-center gap-2">
              <Input type="text" placeholder="Type your message..." className="flex-1" />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      </main>
      </>
}


function BotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    )
  }