"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Test = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim
        massa, tincidunt imperdiet dapibus quis, vulputate et velit. Donec
        imperdiet neque fringilla nisi cursus, eleifend efficitur ipsum gravida.
        Pellentesque et auctor nibh. Cras posuere in lorem vitae efficitur. Ut
        tincidunt purus eros, sit amet ultrices mi ullamcorper volutpat. Integer
        id nibh mi. Nunc at facilisis nunc. Aliquam eu dolor a enim malesuada
        ultrices. Donec pellentesque facilisis magna sed eleifend. Pellentesque
        sapien dui, malesuada ac lacus convallis, blandit lacinia ante. Aliquam
        a fermentum eros, non tincidunt quam. Sed id nunc non leo placerat
        porttitor.
      </p>
    </div>
  );
};

export default Test;
