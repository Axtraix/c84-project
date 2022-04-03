nasa_images=["image1.jpg","image2.jpg","image3.jpg","mage4.jpg","image5.jpg"]
var n =Math.floor(Math.random()*4);
console.log("n="+n)
background_image=nasa_images[n];
rover_image="rover.png"

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

function addimages(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadbackground;
    background_image_tag.src=background_image
     
    roverimagetag=new Image();
    roverimagetag.onload=uploadrover;
    roverimagetag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height)
    
}
function uploadrover(){
    ctx.drawImage(roverimagetag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
    up_arrow();
    console.log("key up has been pressed")
    }

    if(keypressed=='40'){
        down_arrow();
        console.log("key down has been pressed")
        }

        if(keypressed=='37'){
            left_arrow();
            console.log("key left has been pressed")
            }

            if(keypressed=='39'){
                right_arrow();
                console.log("key right has been pressed")
                }
}
function up_arrow(){
    if(rover_y >=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}

function down_arrow(){
    if(rover_y <=300){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}

function left_arrow(){
    if(rover_x >=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}

function right_arrow(){
    if(rover_x <=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}