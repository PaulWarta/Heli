#!/bin/bash

for ((i=0;i<10;i++))
do
  size=$((700 + ($i * 50)))
  convert Background.jpeg -scale $size "Background_${size}.jpeg" &
  echo "Converted to size ${size}"
done
