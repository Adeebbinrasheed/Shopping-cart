import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-14">
      <div className="flex gap-3 mb-4">
        <button className="bg-black text-white p-1 px-3">Description</button>
        <button className="bg-black text-white p-1 px-3">Care Guide</button>
        <button className="bg-black text-white p-1 px-3">Size Guide</button>
      </div>
      <div>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          vero reiciendis amet modi iure nihil blanditiis rerum ipsam velit
          inventore quia dolore odio laboriosam fugit molestias voluptas,
          facilis iusto obcaecati.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
