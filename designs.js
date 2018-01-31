function makeGrid() {
  const plansa = $("pixel_canvas");
  const height = $("input_height").val();
  const width = $("input_width").val();
  const color = $("colorPicker").val();

 for (c=0; c<height; c++) {
  plansa.append("<tr></tr>");
 }
const rows = $("tr");
 for (d=0; d<width; d++) {
  rows.append("<td></td>");
 }


})
