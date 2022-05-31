#!/bin/bash

npx doiuse --browser ">1%" main.css > coverage.txt
java Coverage.java < coverage.txt > coverage_2.txt

cat coverage_2.txt | while read line
do
  npx caniuse $line -2 -p
done