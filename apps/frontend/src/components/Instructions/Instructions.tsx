import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Select a mentor",
    description: "Once you select a mentor, you can schedule a session.",
  },
  {
    icon: "/steps/2.svg",
    title: "Follow the advice",
    description: "After the session, you are given training program",
  },
  {
    icon: "/steps/3.svg",
    title: "Earn rewards",
    description: "Earn B3TR for everyday by sticking to the training.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex
        p={{ base: 4 }}
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
