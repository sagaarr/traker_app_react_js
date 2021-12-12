import React from "react";

const FileInput = ({ input, meta, ...rest }) => {
  return (
    <>
      <input
        name={input.name}
        type={input.type}
        onChange={(e) => input.onChange(e.target.files[0])}
        {...rest}
      />
    </>
  );
};

export default FileInput;
