function cleanGrid() {
  $("#pixel_canvas").empty()
}
function makeGrid() {
  const plansa = $("#pixel_canvas");
  const height = parseInt($("#input_height").val());
  const width = parseInt($("#input_width").val());

  // clean the table before drawing
  cleanGrid();

  var isMouseDown = false;
  // draw the table
  for (c=0; c<height; c++) {
    plansa.append("<tr></tr>");
  }
  const rows = $("tr");
  for (d=0; d<width; d++) {
    // tdElem = $("<td>").on("click", colorElem);
    let tdElem = $("<td>")
     tdElem.mousedown(function () { isMouseDown = true });
     tdElem.mouseup(function() { isMouseDown = false });
     tdElem.hover(function(event) {
       if (isMouseDown) {
        $(event.target).css("background-color", $("#colorPicker").val())
     }
    })

    rows.append(tdElem);
  }
}

function colorElem(event) {
    let currentColor = $("#colorPicker").val();
    $(event.target).css("background-color", currentColor)
}
