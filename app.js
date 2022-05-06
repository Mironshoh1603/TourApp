const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const tour = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

console.log(tour);
