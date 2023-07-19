export function drawGameField(rawLength = 8) {
  let field = "";
  let index = 0;
  for (let i = 0; i < rawLength; i++) {
    field += "<div class='row'>";
    for (let j = 0; j < rawLength; j++) {
      field += `<div class='square i${index++}'></div>`;
    }
    field += "</div>";
  }
  return field;
}
