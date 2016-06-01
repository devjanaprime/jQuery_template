var containers = [];

$(document).ready(function(){

  $('#addContainerButton').click(function(){
    var name = $('#containerNameIn').val();
    var capacity = $('#capacityIn').val();
    var fill = $('#fillIn').val();
    var currentCapacity = capacity * fill;
    var fixedCurrentCapacity = currentCapacity.toFixed(2);
    console.log( name + "'s current capacity: " + fixedCurrentCapacity );
    var newContainer ={
      'name': name,
      'capacity': capacity,
      'fill': fill
    };
    containers.push( newContainer );
    console.log( containers );
  });
});
