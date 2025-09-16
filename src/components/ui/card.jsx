import React from "react";
export function Card({ className = "", children }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/5 text-white ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }) {
  return <div className={`p-6 border-b border-white/10 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardDescription({ className = "", children }) {
  return <p className={`text-sm text-white/60 ${className}`}>{children}</p>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
export function CardFooter({ className = "", children }) {
  return <div className={`p-6 border-t border-white/10 ${className}`}>{children}</div>;
}