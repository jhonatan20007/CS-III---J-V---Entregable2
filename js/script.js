

$(function () {
  $("#btn1").click(function (e) {
 

  });
  for (let i = 0; i < 5; i++) {
    llenarTable();
  }

  cargar_provincias();
});

function llenarTable() {
  var row = $("<tr />");
  $("#table tbody").append(row);
  row.append($("<td>" + "" + "</td>"));
  row.append($("<td>" + "hola" + "</td>"));
  row.append($("<td>" + "hola" + "</td>"));
  row.append(
    $(
      "<td>" +
        '<select name="option" id="option">' +
        "<option></option>" +
        "<option>1</option>" +
        "<option>2</option>" +
        "<option>3</option>" +
        "</select>" +
        "</td>"
    )
  );
}

// funcion para Cargar Provincias al campo <select>
//    function cargar_provincias() {
//     var array = ["1", "2", "3", "4", "5"];

//     // Ordena el Array Alfabeticamente, es muy facil ;)):
//     array.sort();

//     addOptions("option", array);
//    }

//    // Rutina para agregar opciones a un <select>
//    function addOptions(domElement, array) {
//     var select = document.getElementsByName(domElement)[0];

//     for (value in array) {
//      var option = document.createElement("option");
//      option.text = array[value];
//      select.add(option);
//     }
//    }
