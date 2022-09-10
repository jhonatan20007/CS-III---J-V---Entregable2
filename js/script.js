
var i =0;
$(function () {
  $("#btn1").click(function (e) {

  
  
  });
  let tipo = ["1", "2","3"];
  let valores = ["35000", "75000","18000"];
  for (let i = 0; i < 3; i++) {
    llenarTable(tipo,valores);
  }

});

function llenarTable(tipo,valores) {
  var row = $("<tr />");
  $("#table tbody").append(row);
  row.append($("<td>" + "" + "</td>"));
  row.append($("<td>" + tipo[i] + "</td>"));
  row.append($("<td>" + valores[i] + "</td>"));
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
  i++;
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
