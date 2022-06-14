#!/bin/bash

for ((i=0;i<18;i++))
do
  size=$((300 + ($i * 50)))
  convert Background.png -scale $size "Background_${size}.png" &
  echo "Converted to size ${size}"
done
