for ((i=0;i<19;i++))
do
  size=$((300 + ($i * 50)))
  echo "./Images/Background/Background_${size}.jpeg ${size}w,"
done