import React from "react";

export default function Input({placeholder, type, name}) {
    return (
        <input
            className="input"
            type={type}
            name={name}
            placeholder={placeholder}
        />
    );
}
