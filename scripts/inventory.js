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
    // what do we want to show?
    // container name, id(index in containers), capacity, fill, fixedCurrentCapacity
    var outputString = "Container " + newContainer.name + "(" + containers.indexOf( newContainer ) + ") - Fill: " + newContainer.fill  +" , Capacity: " + newContainer.capacity + ", How Much Stuff: " + fixedCurrentCapacity;
    appendContainerToDom( outputString );
  });
});

var appendContainerToDom = function( inputText ){
  var newParagraph = document.createElement('p');
  newParagraph.textContent = inputText;
  document.getElementById('outputDiv').appendChild( newParagraph );
}
