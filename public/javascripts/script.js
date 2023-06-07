$.getJSON("/product/fetchProductType",fillTypeData);

function fillTypeData(json)
{
  const data=json.result;
  data.map((item)=>{
    $('#producttypeid').append(
      $('<option>').text(item.producttypename).val(item.producttypeid)
    )
  })
}

$('#producttypeid').change(function(){
  $.getJSON("/product/fetchProductCategory",{typeid:$("#producttypeid").val()},fillCategoryData)
})

function fillCategoryData(json)
{
  const data=json.result;
  $("#productcategoryid").empty()
  $("#productcategoryid").append($("<option>").text("-Select Category-"));
  data.map((item)=>{
    $("#productcategoryid").append($("<option>").text(item.productcategoryname).val(item.productcategoryid))
  })
}
