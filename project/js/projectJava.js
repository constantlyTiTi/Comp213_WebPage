

function handleNavClick(obj){
    if (obj.id=="navAllProperty")
    {
        document.getElementById("contentFrame").src="./switchboard.html";
        document.getElementById("contentFrame").height="800px";
    }
    else if (obj.id=="navHomepage")
    {
        document.getElementById("contentFrame").src="./homepage.html";
        document.getElementById("contentFrame").height="600px";
    }
    else if(obj.id=="navContact")
    {
        document.getElementById("contentFrame").src="./contact-form.html";
        document.getElementById("contentFrame").height="947px";
    }
    else if (obj.id=="navTopMainMap")
    {
        document.getElementById("contentFrame").src="./site-map-and-credits.html";
        document.getElementById("contentFrame").height="600px";
    }
}

function goToProperty(obj){
    switch (obj.id){
        case "FindAllPropertySpanRightI":
        case "leftImgI": {
            location.href="./property1.html";
            break;
        }
        case "FindAllPropertySpanRightII":
        case "leftImgII": {
            location.href="./property3.html";
            break;
        }
        case "FindAllPropertySpanRightIII":
        case "leftImgIII": {
            location.href="./property3.html";
            break;
        }
        case "FindAllPropertySpanRightIV":
        case "leftImgIV": {
            location.href="./property4.html";
            break;
        }
        case "FindAllPropertySpanRightV":
        case "leftImgV": {
            location.href="./property5.html";
            break;
        }
    }
}

function changePage(obj)
{
    var i=obj.id;
    changeLeftIdShowElementRight(i);

}
function getBrowserWidth(obj)
{
    var i=window.innerWidth;
    // document.getElementById("navMainSpan").style.width=i+"px";
}
function MagImg(obj)
{
    var leftId=obj.id;
    if (leftId=="leftImgI")
    {
        changeMagImg("FindAllPropertySpanRightI");
    }
    else if (leftId=="leftImgII")
    {
        changeMagImg("FindAllPropertySpanRightII");
    }
    else if (leftId=="leftImgIII")
    {
        changeMagImg("FindAllPropertySpanRightIII"); 
    }
    else if (leftId=="leftImgIV")
    {
        changeMagImg("FindAllPropertySpanRightIV"); 
    }
    else if (leftId=="leftImgV")
    {
        changeMagImg("FindAllPropertySpanRightV"); 
    }
}
function changeMagImg(rightId)
{
    var rightIdElement=document.getElementById(rightId);
    var rightArray=document.getElementsByClassName("FindallPropertySpanRight")
    for (var i=0;i<rightArray.length;i++)
    {
        rightArray[i].style.display="none";
    }
    rightIdElement.style.display="block";
}
//#region 
function showTopNavAfter(iBefore)
{
    var iAfter=window.pageYOffset;
    if (iBefore<iAfter)
    {
        document.getElementById("navMainSpan").style.top="-100px";
    }
    else
    {
        document.getElementById("navMainSpan").style.top="0px";
    }
}
//#endregion
//#region method mouseEvent
function dropDownMouseover()
{
    var i=document.getElementsByClassName("drowDownClass");
    for (k=0;k<i.length;k++)
    {
    i[k].classList.add("addDropDownClass");
    }
}
function dropDownMouseOut()
{
    var i=document.getElementsByClassName("drowDownClass");
    for (k=0;k<i.length;k++)
    {
    i[k].classList.remove("addDropDownClass");
    }
}
//#endregion
//#region method change pages
function changeLeftIdShowElementRight(i)
{
   var belowArray=document.getElementsByClassName("propertyGeneralClass");
   for (var k=0;k<belowArray.length;k++)
   {
       belowArray[k].style.display="none";
   } 
   if (i=="leftBannerI")
   { 
    document.getElementById("PropertI").style.display="block";
   }
   else if(i=="leftBannerII")
   {
    document.getElementById("PropertII").style.display="block";
   }
   else if (i=="leftBannerIII")
   {
    document.getElementById("PropertIII").style.display="block";
   }
   else if (i=="leftBannerIV")
   {
    document.getElementById("PropertIV").style.display="block";
   }
   else if (i=="leftBannerV")
   {
    document.getElementById("PropertV").style.display="block";
   }
   else if (i=="leftBannerVI")
   {
    document.getElementById("PropertVI").style.display="block";
   }
}
//#endregion
//#region changeLeftBannerBackgroundColour
function changeLeftBannerColour(obj)
{
    var a=obj.classList
}
//#endregion