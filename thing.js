var dataIWant;

function filterOnSearch(m){
  var newString = m.data['title'];
  var newVal = this.val();
  console.log(newVal);
  if(newVal != ""){
    newString = newString.toLowerCase();
    newVal = newVal.toLowerCase();
    if (!newString.includes(newVal)){
      return true;
    }else {
      return false;
    }
  }return true;
}

function printToH2(m){
  var newData = m.data;
  var newDiv = $("<div></div>").appendTo('body');
  $("<a href='" + newData['url']+"'>"+"<h2>" + newData["title"] + "</h2>" + "</a>").appendTo(newDiv);
  $()
  if ("preview" in newData){
    newDiv.append("<img src='" + newData["preview"]["images"][0]["source"]["url"] + "' width='150' height='150' />");
  }else{
    newDiv.append("<img src='" + "http://placehold.it/150x150" + "' />");
  }
}

function init(){
  dataIWant.forEach(printToH2);
  $("#filter").click(filter);
  $('#search-button').click(locate);
}

$('#search').click(function(){
  var searchValue = $('#searchInput').val();
  $('div').remove();
  var getter = $.ajax({
    url:"https://www.reddit.com/search.json?q=" + searchValue,
    method: "GET",
    dataType: "json"
  });

  getter.done(function(response){
    console.log("we have the cookie!");
    dataIWant = response["data"]["children"];
    init();
    filter();
  });

  getter.fail(function(){
    console.log("those people are mean. :-( )");
  });

})

function filter(){
  var filterValue = $('#filterInput');
  $('div').remove();
  var newArray = dataIWant.filter(filterOnSearch, filterValue);
  newArray.forEach(printToH2);
}


function locate(){
  var valueToSearch = $('#locate').val();
  $('div').css("background-color", "#ECECDA");
  $('div').find('h2:contains(' + valueToSearch + ')').parent().parent().css("background-color", "#DA5C53");

}
