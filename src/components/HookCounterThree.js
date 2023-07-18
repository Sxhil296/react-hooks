import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({...name,  lastName: e.target.value })}
      />
      <h2>Firstname : {name.firstName}</h2>
      <h2>Lastname : {name.lastName}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default HookCounterThree;
