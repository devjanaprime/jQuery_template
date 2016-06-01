var containers = [];

var getInput = function(){
  console.log( 'in getInput' );
  var name = document.getElementById('containerNameIn').value;
  var capacity = document.getElementById('capacityIn').value;
  var fill = document.getElementById('fillIn').value;

  var newContainer ={
    'name': name,
    'capacity': capacity,
    'fill': fill
  };
  containers.push( newContainer );

  console.log( containers );
}
