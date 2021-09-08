import React from "react";

export default function PageSelector() {
    const x = 49; //nombre total de lignes de tableau
    const y = 10; //nombre de lignes affichée dans le tab
    const p = Math.ceil(x/y); //nombre total de page
  return (
    <>
      <button>Previous</button>
        {p >= 6 ? <p>bigger</p>: <p>smaller</p>}
      <button>Next</button>
    </>
  );
}
