var i = 0;
function next()
{
    i++;
    document.getElementById("pre").removeAttribute("style")
    if(i==1)
    {
        document.getElementById("img1").src="images/9.jpg"
        document.getElementById("img2").src="images/10.jpg"
        document.getElementById("img3").src="images/11.jpg"
        document.getElementById("img4").src="images/12.jpg"
        document.getElementById("img5").src="images/13.jpg"
        document.getElementById("img6").src="images/14.jfif"
        document.getElementById("img7").src="images/15.jpg"
        document.getElementById("img8").src="images/16.jfif"
    }
    else if (i==2)
    {
        document.getElementById("img1").src="images/17.jpg"
        document.getElementById("img2").src="images/18.jpg"
        document.getElementById("img3").src="images/19.jpg"
        document.getElementById("img4").src="images/20.jpg"
        document.getElementById("img5").src="images/21.jpg"
        document.getElementById("img6").src="images/22.jpg"
        document.getElementById("img7").src="images/23.jpg"
        document.getElementById("img8").src="images/24.jpg"   
        document.getElementById("next").style.display="none"
    }
}
function pre()
{
    i--;
    if(i==1)
    {
        document.getElementById("img1").src="images/9.jpg"
        document.getElementById("img2").src="images/10.jpg"
        document.getElementById("img3").src="images/11.jpg"
        document.getElementById("img4").src="images/12.jpg"
        document.getElementById("img5").src="images/13.jpg"
        document.getElementById("img6").src="images/14.jfif"
        document.getElementById("img7").src="images/15.jpg"
        document.getElementById("img8").src="images/16.jfif"
        document.getElementById("next").removeAttribute("style")
    }
    else if(i==0)
    {
        document.getElementById("img1").src="images/1.jpg"
        document.getElementById("img2").src="images/2.jpg"
        document.getElementById("img3").src="images/3.jpg"
        document.getElementById("img4").src="images/4.jpg"
        document.getElementById("img5").src="images/5.jpg"
        document.getElementById("img6").src="images/6.jpg"
        document.getElementById("img7").src="images/7.jpg"
        document.getElementById("img8").src="images/8.jpg"
        document.getElementById("pre").style.display="none"
        
    }
    
}