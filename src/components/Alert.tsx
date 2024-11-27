import React from "react";

interface AlertProps {
  title: string;
  description: string;
  type?: "success" | "warning" | "error" | "info";
}

const Alert: React.FC<AlertProps> = ({ title, description, type = "info" }) => {
  const typeClasses = {
    success: "bg-green-100 border-green-500 text-green-900",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-900",
    error: "bg-red-100 border-red-500 text-red-900",
    info: "bg-teal-100 border-teal-500 text-teal-900",
  };

  return (
    <div
      className={`border-t-4 rounded-b px-4 py-3 shadow-md ${typeClasses[type]}`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className={`fill-current h-6 w-6 mr-4 ${
              type === "success"
                ? "text-green-500"
                : type === "warning"
                ? "text-yellow-500"
                : type === "error"
                ? "text-red-500"
                : "text-teal-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
