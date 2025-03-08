// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * This function calculates and displays the area and perimeter of a rectangle.
 * The area is calculated as length * width, and the perimeter as 2 * (length + width).
 */
function doMathClicked() {
  // Calculate and display the area
  documentgetElementById("area-math").innerHTML = 
    "<p>The area is: " + 5 * 3 + " cm²</p>"

  // Calculate and display the perimeter
  documentgetElementById("perimeter-math").innerHTML = 
    "<p>The perimeter is: " + 2 * (5 + 3) + " cm</p>"
}
