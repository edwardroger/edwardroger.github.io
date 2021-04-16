let zalo = 0, credit = 0, live = 0, airpay = 0;
$(document).ready(function () {
    $(".btn-tt").click(function (e) { 
        e.stopPropagation();
        $(".tc").css("display","block");
        $(".tc").animate
        ({ opacity: 0},0.001);
        $("html, body").animate
        (
            {scrollTop: $(this).offset().top},100
        );
        $(".tc").animate
        ({opacity: 1},1000); 
    });
    $(".card").click(
        function (e) { 
            e.stopPropagation();
            let a = document.getElementsByClassName('card');
            for(var i = 0; i < a.length; i++)
            {
                
                if(a[i]!==this) $(a[i]).removeClass('activated');
            }
            $(this).addClass("activated");

        }); 
});
function setrow(rowNum)
{
     let a = '#row'+rowNum;
     let price = document.querySelector(a+' #col3').innerHTML;
     price=Number(price);
     let number = document.querySelector(a+' #col4 input').getAttribute('value');
     number=Number(number);
     document.querySelector(a+" #col5").innerHTML=number*price;
     setThanhToan();
}
function increaseVal(rowNum)
{
    let a = '#row'+rowNum;
    let value = document.querySelector(a+' #col4 input').getAttribute('value');
    value=Number(value);
    document.querySelector(a+' #col4 input').setAttribute("value",value+1);
    setrow(rowNum);
}
function decreaseVal(rowNum)
{
    let a = '#row'+rowNum;
    let value = document.querySelector(a+' #col4 input').getAttribute('value');
    value=Number(value);
    if(value > 0)
    {
        document.querySelector(a+' #col4 input').setAttribute("value",value-1);
        setrow(rowNum);
    }
}
function readyWeb()
{
    let a = document.getElementsByTagName('tr');
    for(var i = 1; i < a.length; i++)
    {
        setrow(i);
    }
    setThanhToan();
}
function setThanhToan()
{
    let a = document.getElementsByTagName('tr');
    let initial = 'Tổng số tiền cần thanh toán:';
    let tongTT = 0;
    for(var i = 1; i < a.length; i++)
    {
        let b = '#row'+i;
        let value = document.querySelector(b+' #col5').innerHTML;
        value=Number(value);
        tongTT+=value;
    }
    document.getElementById('thanh-toan').innerHTML=initial+(' '+tongTT+' đ');

}

readyWeb();

