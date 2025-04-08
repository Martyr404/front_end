import React from "react";

interface RingProgressProps {
  angle: number; // 单位：角度 (0 ~ 360)
  radius?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
}

export const RingProgress: React.FC<RingProgressProps> = ({
  angle,
  radius = 40,
  strokeWidth = 6,
  color = "red",
  trackColor = "#e5e7eb", // Tailwind gray-200
}) => {
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;

  // 将角度转换成比例（0-1），并计算 dash offset
  const progressRatio = Math.min(angle, 360) / 360;
  const offset = circumference * (1 - progressRatio);

  return (
    <svg
      width={(radius + strokeWidth) * 2}
      height={(radius + strokeWidth) * 2}
    >
      <g transform={`rotate(-90 ${(radius + strokeWidth)} ${(radius + strokeWidth)})`}>
        {/* 背景圆环 */}
        <circle
          stroke={trackColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
        />
        {/* 前景圆环 */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
        />
      </g>
    </svg>
  );
};
