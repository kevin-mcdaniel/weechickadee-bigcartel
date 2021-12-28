//= require_directory ./javascripts/vendor
//= require javascripts/scripts
//= require javascripts/product-option-groups

/* 
  ~~~-------------------------------------------------------------------------------------------------------------------
  Init
  ----------------------------------------------------------------------------------------------------------------------
*/

window.addEventListener('load', function () {
  pageInit();
}, false);


function pageInit(){
  
  if(document.getElementsByClassName("imageModal")){
    initializeModal();
  }

}


/* 
  ~~~-------------------------------------------------------------------------------------------------------------------
  MODAL TEMPLATES
  ----------------------------------------------------------------------------------------------------------------------
*/

const imageZoomModalContent = data => `<img src="${data.imgUrl}" alt="Zoomed Product Image" />`;

/* 
  ~~~-------------------------------------------------------------------------------------------------------------------
  MODAL Functionality
  ----------------------------------------------------------------------------------------------------------------------
*/

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.querySelector('body').classList.remove("no-scroll");
};

function openImgModal(element) {
  if (!element.currentTarget.dataset.src){
    console.log("No Data");
    return;
  } else {
    let imgUrl = element.currentTarget.dataset.src;
    imgUrl = imgUrl.substring(0, imgUrl.indexOf("?"));
    let modalData = {
      imgUrl:imgUrl,
      alt:element.currentTarget.dataset.src
    }
    
    document.getElementById("modalContent").innerHTML = imageZoomModalContent(modalData);
    document.querySelector("body").classList.add("no-scroll");
    document.getElementById("modal").classList.add("active");
  }
  
};

function initializeModal(){
  document.getElementById("modalMask").addEventListener("click", closeModal);
  let modalObjects = document.getElementsByClassName("imageModal");
  console.log(modalObjects);
  if(modalObjects){
    for(let i = 0; i < modalObjects.length; i++){
      modalObjects[i].addEventListener("click", e => openImgModal(e));
    }
  }
  
  
}




