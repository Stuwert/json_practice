var dataIWant;

function filterOnSearch(m){
  var newString = m.data['title'];
  var newVal = this.val();
  newString = newString.toLowerCase();
  newVal = newVal.toLowerCase();
  console.log(newString);
  if (newString.includes(newVal)){
    return true;
  }else{
    return false;
  }
}

function printToH2(m){
  var newData = m.data;
  var newDiv = $("<div></div>").appendTo('body');
  $("<a href='http://www.reddit.com" + newData['url']+"'>"+"<h2>" + newData["title"] + "</h2>" + "</a>").appendTo(newDiv);
  $()
  if (newData["header_img"] !== null){
    newDiv.append("<img src='" + newData["header_img"] + "' />");
  }
}

function init(){
  dataIWant.forEach(printToH2);
  $("#filter").click(filter);
}

$('#search').click(function(){
  var searchValue = $('#searchInput').val();
  $('div').remove();
  var getter = $.ajax({
    url:"https://www.reddit.com/subreddits/search.json?q=" + searchValue,
    method: "GET",
    dataType: "json"
  });

  getter.done(function(response){
    console.log("we have the cookie!");
    var response = getter.responseJSON;
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
  var newArray = dataIWant.filter(filterOnSearch, filterValue)
  for (var i=0; i<newArray.length; i++){
    console.log(newArray[i]);
  }
  newArray.forEach(printToH2);
}
