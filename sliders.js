var slidesPosition
var halfContainer
var currentDot;
var currentIndex;

function getSlidesPosition(){
    slidesPosition =[]
    document.querySelectorAll('#slider1 .payxmi-slide').forEach((div)=>{
        slidesPosition.push([div.offsetLeft, div.offsetLeft+div.offsetWidth])
    })
    halfContainer = document.getElementById('slider1').offsetWidth/2
    currentDot = document.getElementById('sliderDots1').children[0]
    currentIndex = -1
}

function scrollChange(){
    var scrolled = document.getElementById('slider1').scrollLeft;
    var position = scrolled/document.getElementById('slider1').offsetWidth;
    console.log(position)
    if( Math.abs(position - Math.round(position))<0.01){
        if(currentIndex!= position){
            currentDot.classList.remove('active');
            currentDot = document.getElementById('sliderDots1').children[Math.round(position)];
            currentDot.classList.add('active');
            currentIndex = Math.round(position)
        }
    }
}

getSlidesPosition();

function changeSlide(num){
    
    if(currentIndex < 0){
        currentDot = document.getElementById('sliderDots1').children[0]
        currentDot.classList.add('active');
        currentIndex=0;
    }
    if(currentIndex!= num){
        var currScrollLeft = document.getElementById('slider1').scrollLeft;
        var currScrollRight = currScrollLeft + document.getElementById('slider1').offsetWidth;
        document.getElementById('slider1').scrollTo({
            left: slidesPosition[num][0],
            behavior: 'smooth' 
        });
    } 
}

changeSlide(0)