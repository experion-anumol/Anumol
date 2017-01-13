$(document).ready(function () {
    $(".startDate").datepicker({
        dateFormat: 'dd-M-yy',
        readonly: true,
        onSelect: function (selected) {
            $(".endDate").datepicker("option", "minDate", selected)
            var selectedStartDate = $('.startDate').datepicker('getDate');
            var now = new Date();
            if (selectedStartDate > now) {
                if ($(this).data('options') == undefined) {
                    $(this).data('options', $('.drpPrjtStatus option').clone());//Set all the values in currency if no one selected
                }
                var id = "YetToStart";
                var options = $(this).data('options').filter('[value=' + id + ']');
                $('.drpPrjtStatus').html(options);
            }
            else if (selectedStartDate <= now) {
                if ($(this).data('options') == undefined) {
                    $(this).data('options', $('.drpPrjtStatus option').clone());//Set all the values in currency if no one selected
                }
                var id = "Past";
                var options = $(this).data('options').filter('[value=' + id + ']');
                $('.drpPrjtStatus').html(options);
            }
        }
    });

    $(".endDate").datepicker({
        dateFormat: 'dd-M-yy',
        readonly: true,
        onSelect: function (selected) {
            $(".startDate").datepicker("option", "maxDate", selected)
        }
    });

    $(".drpCustomer").change(function () {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('.drpCurrency option').clone());//Set all the values in currency if no one selected
        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('.drpCurrency').html(options);
    });


    $(".drpCurrency").change(function () {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('.drpCustomer option').clone());
        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('.drpCustomer').html(options);
    });

    $('.myForm').submit(function () {
        var projectName = $('.prjtName').val();
        var projectCode = $('.prjtCode').val();
        var currency = $('.drpCurrency option:selected').text();
        var customer = $('.drpCustomer option:selected').text();
        var rtype = $("input[name='type']:checked").val();
        var manager = $('.manager').val();
        var status = $('.drpPrjtStatus option:selected').text();
        var startDate = $('.startDate').val();
        var endDate = $('.endDate').val();

        // if(status=="Closed"){
        //     if(endDate==""){
        //     alert("End date mandatory");
        // }}
        var myObj = {
            "projectName": projectName,
            "projectCode": projectCode,
            "currency": currency, "customer": customer,
            "type": rtype,
            "manager": manager,
            "status": status,
            "startDate": startDate,
            "endDate": endDate
        };
        var myJSON = JSON.stringify(myObj);
        localStorage.setItem('dataJSON', myJSON);

    })
});




