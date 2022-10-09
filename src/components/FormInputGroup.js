import React from "react";

const FormInputGroup = props => {
  const { label, value, type, name, handleChange } = props;

  return (
    <div className="flex flex-col justify-start items-start space-y-1 w-full">
      <label className="text-gray-300 text-sm">{label}</label>
      <input
        className="text-white text-sm bg-theme-light outline-none focus:bg-gray-700 p-2 rounded-md w-full"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInputGroup;
