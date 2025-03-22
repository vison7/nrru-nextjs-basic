"use client";
import React from "react";
// import Link from "next/link";
import Image from "next/image";

interface ContentItems {
  title?: string;
  detail?: string;
  thumb?: string;
}

interface ContentProp {
  title?: string;
  subtitle?: string;
  data?: ContentItems[];
}

const ContentList = ({ title, subtitle, data }: ContentProp) => {
  return (
    <div>
      <h5>{title}</h5>
      <small>{subtitle}</small>

      {data?.map((product, index) => (
        <div key={index}>
          <h5>{product?.title}</h5>
          <p>
            <Image
              src={product?.thumb}
              alt="Picture of the author"
              width={100}
              height={100}
            ></Image>
            {product?.detail}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ContentList;
