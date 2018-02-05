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

function changeCurrentColor(event) {
  var newColor = $(event.target).css("background-color")
  $("#colorPicker").val(hexc(newColor))
}

// Honestly, I had to google a way to do this conversion and got the gist from
//https://stackoverflow.com/questions/15716702/get-background-color-in-000-format-and-not-rgb
// but I understand the reasoning behind this converter function
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
}

$(document).ready(function() {
  hexcolors = ["#F39C12","#CB4335","#F1C40F","#28B463","#2471A3","#7D3C98", "#1B2631"]
  $.each(hexcolors, function(i,v) {
    var dyncanvas = $("<canvas>", {
      id: "color" + i,
      style:"border-radius:100px;margin:5px;background-color:" + v
    }).addClass("colorboxsized").on("click", changeCurrentColor)
    $("#colorcircles").append(dyncanvas)
  })
})
