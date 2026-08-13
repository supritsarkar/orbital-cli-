"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { authClient } from "@/lib/auth-client";
import { useState } from "react"; 

export const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
        
    </div>
  )
};
