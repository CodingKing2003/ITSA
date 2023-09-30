var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

window.addEventListener("load", preventScroll);
  
function preventScroll() {
    document.getElementById('body').style.overflow = 'auto'
};

// this is to hide and show the members in team
$(".link-one").click(function() {
    $(".div-one").show();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });

$(".link-two").click(function() {
    $(".div-two").show();
    $(".div-one").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });

$(".link-three").click(function() {
    $(".div-three").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });

$(".link-four").click(function() {
    $(".div-four").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });

$(".link-five").click(function() {
    $(".div-five").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });
$(".link-six").click(function() {
    $(".div-six").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });
$(".link-seven").click(function() {
    $(".div-seven").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-eight").hide();
    $(".div-nine").hide();
  });
$(".link-eight").click(function() {
    $(".div-eight").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-nine").hide();
  });
  $(".link-nine").click(function() {
    $(".div-nine").show();
    $(".div-one").hide();
    $(".div-two").hide();
    $(".div-three").hide();
    $(".div-four").hide();
    $(".div-five").hide();
    $(".div-six").hide();
    $(".div-seven").hide();
    $(".div-eight").hide();
  });

  function changeDisplay1() {
    document.getElementById("core1").style.display = "flex";
  }
  function changeDisplay2() {
    document.getElementById("tech1").style.display = "flex";
  }
  function changeDisplay3() {
    document.getElementById("design1").style.display = "flex";
  }
  function changeDisplay4() {
    document.getElementById("social").style.display = "flex";
  }
  function changeDisplay5() {
    document.getElementById("marketing").style.display = "flex";
  }
  function changeDisplay6() {
    document.getElementById("docs").style.display = "flex";
  }
  function changeDisplay7() {
    document.getElementById("web").style.display = "flex";
  }
  function changeDisplay8() {
    document.getElementById("logistics").style.display = "flex";
  }