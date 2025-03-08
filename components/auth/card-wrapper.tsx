import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import { ArrowLeft } from "lucide-react";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <CardFooter>{/* <Social /> */}</CardFooter>}
      <CardFooter>
        <div className="flex justify-items-center">
          <ArrowLeft size={16} className="ml-20 mt-2" />
          <BackButton href={backButtonHref} label={backButtonLabel} />
        </div>
      </CardFooter>
    </Card>
  );
};
