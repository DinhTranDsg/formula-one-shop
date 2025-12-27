"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  data: string;
  size?: number;
}

export default function QRCodeDisplay({
  data,
  size = 300,
}: QRCodeDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    QRCode.toString(data, {
      type: "svg",
      width: size,
      margin: 1,
      errorCorrectionLevel: "H",
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    }).then((svg) => {
      if (containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    });
  }, [data, size]);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-fit border-2 border-border rounded-lg p-2 bg-white"
    />
  );
}
