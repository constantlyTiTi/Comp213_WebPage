function leftSiteNavJava(obj)
{
    var idRight=["instructorRS","courseRS","generalRS","commentRS","submitBox","resetBox"]
    document.getElementById("rightSiteSpan").style.backgroundColor="rgba(235, 235, 209,0.9)";
    for (var i=0;i<idRight.length;i++)
    {
    showElement(obj.id,idRight[i])
    }
    //obj.style.backgroundColor="rgba(235, 235, 209,0.9)"; 
    // var elementId=["instructor","course","general","other","review","submit"]
    // for(i=0;i<elementId.length;i++)
    // {
        
    // }
    // if (obj.id=="instructor")
    // {
    //     document.getElementById("instructorRS").style.display="inline-block";
    //     document.getElementById("courseRS").style.display="none";
    //     document.getElementById("generalRS").style.display="none";
    //     document.getElementById("commentRS").style.display="none";
    //     document.getElementById("rightSiteSpan").style.overflowY="none";
    //     document.getElementById("submitBox").style.display="none";
    //     document.getElementById("resetBox").style.display="block";
    // }
    // else if (obj.id=="course")
    // {
    //     document.getElementById("instructorRS").style.display="none";
    //     document.getElementById("courseRS").style.display="inline-block";
    //     document.getElementById("generalRS").style.display="none";
    //     document.getElementById("commentRS").style.display="none"; 
    //     document.getElementById("rightSiteSpan").style.overflowY="none";
    //     document.getElementById("submitBox").style.display="none";
    //     document.getElementById("resetBox").style.display="block";
    //     setElementsAttr(inputDisableChange, "disabled", false);
    //     setElementsAttr(textareDisableChange, "readonly", false);   
    //     setElementsAttr(selectDisableChange, "readonly", false);   
    //     setElementsStyleAttr(rightSiteTagChange, "height", "500px");   
    // }
    // else if (obj.id=="general")
    // {
    //     document.getElementById("instructorRS").style.display="none";
    //     document.getElementById("courseRS").style.display="none";
    //     document.getElementById("generalRS").style.display="inline-block";
    //     document.getElementById("commentRS").style.display="none"; 
    //     document.getElementById("rightSiteSpan").style.overflowY="none";
    //     document.getElementById("submitBox").style.display="none";
    //     document.getElementById("resetBox").style.display="block";
    //     setElementsAttr(inputDisableChange, "disabled", false);
    //     setElementsAttr(textareDisableChange, "readonly", false);   
    //     setElementsAttr(selectDisableChange, "readonly", false);   
    //     setElementsStyleAttr(rightSiteTagChange, "height", "500px");   
    // }
    // else if (obj.id=="other")
    // {
    //     document.getElementById("instructorRS").style.display="none";
    //     document.getElementById("courseRS").style.display="none";
    //     document.getElementById("generalRS").style.display="none";
    //     document.getElementById("commentRS").style.display="inline-block";
    //     document.getElementById("rightSiteSpan").style.overflowY="none";
    //     document.getElementById("submitBox").style.display="none";
    //     document.getElementById("resetBox").style.display="block";
    //     setElementsAttr(inputDisableChange, "readonly", false);
    //     setElementsAttr(textareDisableChange, "readonly", false);   
    //     setElementsAttr(selectDisableChange, "readonly", false);   
    //     setElementsStyleAttr(rightSiteTagChange, "height", "500px");   
    // }
    // else if (obj.id=="review")
    // {
    //     document.getElementById("instructorRS").style.display="block";
    //     document.getElementById("courseRS").style.display="block";
    //     document.getElementById("generalRS").style.display="block";
    //     document.getElementById("commentRS").style.display="block";
    //     document.getElementById("rightSiteSpan").style.overflowY="scroll";
    //     document.getElementById("submitBox").style.display="none";
    //     document.getElementById("resetBox").style.display="block";
    //     setElementsAttr(inputDisableChange, "disabled", true);
    //     setElementsAttr(textareDisableChange, "readonly", true);   
    //     setElementsAttr(selectDisableChange, "readonly", true);   
    //     setElementsStyleAttr(rightSiteTagChange, "height", "auto");   
    // }
    // else if (obj.id=="submit")
    // {
    //     document.getElementById("instructorRS").style.display="none";
    //     document.getElementById("courseRS").style.display="none";
    //     document.getElementById("generalRS").style.display="none";
    //     document.getElementById("commentRS").style.display="none";
    //     document.getElementById("submitBox").style.display="block";
    //     document.getElementById("resetBox").style.display="none";
    //     setElementsAttr(inputDisableChange, "disabled", false);
    //     setElementsAttr(textareDisableChange, "readonly", false);   
    //     setElementsAttr(selectDisableChange, "readonly", false);    
    // }
}
function navAssDropdownMouseOn()
{
    document.getElementById("bannerNavAssNav").style.backgroundColor="rgb(97, 97, 52)";
    document.getElementById("bannerNavAssNav").style.color="antiquewhite";
    document.getElementById("assignmentNavDropdown").style.display="block";
}
function navAssDropdownMouseOut()
{
    document.getElementById("bannerNavAssNav").style.backgroundColor="rgb(146, 146, 76)";
    document.getElementById("bannerNavAssNav").style.color="black";
    document.getElementById("assignmentNavDropdown").style.display="none";
}
function setElementsAttr(elements, attr, value){
    for(var i=0; i< elements.length;i++){
        if(attr === "disabled"){
            elements[i].disabled = value;
        }else if(attr === "readonly"){
            elements[i].readOnly = value;  
        }else {
            elements[i].setAttribute(attr,value);
        }
    }
}
function setElementsStyleAttr(elements,elementStyle,value){
    for (var i=0;i<elements.length;i++){
        var sytle = elements[i].style;
        sytle[elementStyle] = value;
    }
}
function leftSiteNavMouseOver(obj)
{
    obj.classList.add("leftSiteColorMouseOver");
}
function leftSiteNavMouseOut(obj)
{
    obj.classList.remove("leftSiteColorMouseOver");
}
// $(document).ready
// $("#print").click(function()
// {
    
//     $("input").attr('style','display:block');
//     $("fieldset").attr('style','height:auto');
    // window.print();

 function showElement(idLeft,idRight)
 {
    var inputDisableChange=document.getElementsByTagName("input");
    var textareDisableChange=document.getElementsByTagName("textarea");
    var selectDisableChange=document.getElementsByTagName("option");
    var rightSiteTagChange=document.getElementsByTagName("fieldset");
    var rightSiteStyle=document.getElementById(idRight).style;
    var overflowStyle=document.getElementById("rightSiteSpan").style;
    // var leftSiteBackground=document.getElementById(idLeft);
    // var leftSiteIdArray=["instructor","course","general","other","review","submit"]
    
     if (idLeft=="instructor")
     { 
         leftSiteArry(idLeft);
         if (idRight=="instructorRS"||idRight=="resetBox")
        {
         rightSiteStyle.display="block";
         overflowStyle.overflowY="none";
         setElementsAttr(inputDisableChange, "disabled", false);
         setElementsAttr(textareDisableChange, "readonly", false);   
         setElementsAttr(selectDisableChange, "readonly", false);   
         setElementsStyleAttr(rightSiteTagChange, "height", "500px");
        }
        else{
            rightSiteStyle.display="none";  
        }
     }
     else if (idLeft=="course")
     {
        leftSiteArry(idLeft);
         if (idRight=="courseRS"||idRight=="resetBox")
        {
         rightSiteStyle.display="block"; 
         overflowStyle.overflowY="none";
         setElementsAttr(inputDisableChange, "disabled", false);
         setElementsAttr(textareDisableChange, "readonly", false);   
         setElementsAttr(selectDisableChange, "readonly", false);   
         setElementsStyleAttr(rightSiteTagChange, "height", "500px");
        }
        else{
            rightSiteStyle.display="none";  
        }
     }
     else if (idLeft=="general")
     {
        leftSiteArry(idLeft);
         if (idRight=="generalRS"||idRight=="resetBox")
         {
           rightSiteStyle.display="block";  
           overflowStyle.overflowY="none";
           setElementsAttr(inputDisableChange, "disabled", false);
           setElementsAttr(textareDisableChange, "readonly", false);   
           setElementsAttr(selectDisableChange, "readonly", false);   
           setElementsStyleAttr(rightSiteTagChange, "height", "500px");
         }
         else{
            rightSiteStyle.display="none";  
        }
     }
     else if (idLeft=="other")
     {
        leftSiteArry(idLeft);
         if (idRight=="commentRS"||idRight=="resetBox")
         {
           rightSiteStyle.display="block";  
           overflowStyle.overflowY="none";
           setElementsAttr(inputDisableChange, "disabled", false);
           setElementsAttr(textareDisableChange, "readonly", false);   
           setElementsAttr(selectDisableChange, "readonly", false);   
           setElementsStyleAttr(rightSiteTagChange, "height", "500px");
         }
         else{
            rightSiteStyle.display="none";  
        }
     }
     else if (idLeft=="review")
     {
        leftSiteArry(idLeft);
         rightSiteStyle.display="block";  
         overflowStyle.overflowY="scroll";
         setElementsAttr(inputDisableChange, "disabled", true);
         setElementsAttr(textareDisableChange, "readonly", true);   
         setElementsAttr(selectDisableChange, "readonly", true);   
         setElementsStyleAttr(rightSiteTagChange, "height", "auto");  
     }
     else if (idLeft=="submit")
     {
        leftSiteArry(idLeft);
        if(idRight=="submitBox")
        {
            rightSiteStyle.display="block";   
        } 
        else {rightSiteStyle.display="none"; }
         setElementsAttr(inputDisableChange, "disabled", false);
         setElementsAttr(textareDisableChange, "readonly", false);   
         setElementsAttr(selectDisableChange, "readonly", false);   
     }
     
     function leftSiteArry(idLeft)
     {
        var leftSiteIdArray=document.getElementsByClassName("leftSiteNavClass");
        for (var i=1;i<leftSiteIdArray.length;i++)
        {
            var leftSiteId=leftSiteIdArray[i].id;
            if (idLeft==leftSiteId)
            {
                leftSiteIdArray[i].classList.add("leftSiteColorClick");
            }
            else
            {
                leftSiteIdArray[i].classList.remove("leftSiteColorClick");
            }
        }
     }

    // // var rightSiteId=["instructorRS","courseRS","generalRS","commentRS","submitBox","resetBox"]
    // for(i=0;i<rightSiteId.length;i++)
    // {
    //     var elementRightSite=getElementById(rightSiteId[i]).style.display;
    //     if (i==4||i==5){
    //         elementRightSite="none";
    //     }
    //     else{
    //         elementRightSite="block";
    //     }
    // }
}
    // window.print();
// });
// function leftSiteNavMouseOver(obj)
// {
//    obj.style.backgroundColor="rgba(235, 235, 209,0.9)";
// }
// function leftSiteNavMouseOut(obj)
// {
//     obj.style.backgroundColor="rgb(209, 209, 194)";
//     // document.getElementById("rightSiteSpan").style.backgroundColor="rgb(209, 209, 194)";
// }