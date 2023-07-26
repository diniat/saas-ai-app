"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4c026a2b-8d82-41f5-837d-e1322343ba4a");
  }, []);

  return null;
};
