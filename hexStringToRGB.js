function hexStringToRGB(hexString) {
  let red = hexString.slice(1,3)
  let green = hexString.slice(3.5)
  let blue = hexString.slice(5,7)
  let hexadecimal = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, "a":10, "b":11, "c":12, "d":13, "e":14, "f":15}
  let red_hex = hexadecimal[red.toLowerCase().slice(0,1)]*16+hexadecimal[red.toLowerCase().slice(1,2)]
  let green_hex = hexadecimal[green.toLowerCase().slice(0,1)]*16+hexadecimal[green.toLowerCase().slice(1,2)]
  let blue_hex = hexadecimal[blue.toLowerCase().slice(0,1)]*16+hexadecimal[blue.toLowerCase().slice(1,2)]
  let rgb = {r: red_hex, g: green_hex, b: blue_hex}
  return rgb
}
