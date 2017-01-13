$(document).ready(function(){
    var obj = JSON.parse(localStorage.getItem('dataJSON'));
    $(".prjtName").append(obj.projectName);
    $(".prjtCode").append(obj.projectCode);
    $(".currency").append(obj.currency);
    $(".customer").append(obj.customer);
    $(".type").append(obj.type);
    $(".manager").append(obj.manager);
    $(".prjtStatus").append(obj.status);
    $(".startDate").append(obj.startDate);
    $(".endDate").append(obj.endDate);
});
