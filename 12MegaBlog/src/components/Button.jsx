import React from "react";

function Button({ 
    children,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    hoverBgColor = "hover:bg-blue-600",
    classnName="",
    ...props
 }) {
	return (
		<button className={`px-4 py-2 rounded ${bgColor} ${textColor} ${hoverBgColor} ${classnName}`} {...props}>
            {children}
		</button>
	);
}

export default Button;
