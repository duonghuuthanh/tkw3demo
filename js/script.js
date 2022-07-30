function giai() {
    var a = parseFloat(document.getElementById("aId").value);
    var b = parseFloat(document.getElementById("bId").value);

    let m = ""
    if (a == 0)
      if (b == 0) 
        m = "VO SO NGHIEM";
      else 
        m = "VO NGHIEM";
    else 
        m = "NGHIEM X = " + (-b / a).toFixed(2)
    
    let d = document.getElementById("kq")
    d.innerHTML = `<h1>${m}</h1>`
  }

  function doimau(obj) {
    //var t = document.getElementById("color").value;
    $("body").css("background-color", obj.value)
    // var b = document.getElementById("main");
   // b.style.backgroundColor = obj.value;
    // b.setAttribute("style", `background-color:${obj.value}`)
  }

  function doianh(obj) {
    var d = document.getElementById("imgmain");
    d.src = obj.src;
  }

  function doiMauAnh(prefix) {
    let m = document.getElementById("imgmain")
    m.src = `images/galaxys8/${prefix}1.jpg`

    let images = document.querySelectorAll(".thumbnail img")
    for (let i = 0; i < images.length; i++)
        images[i].src = `images/galaxys8/${prefix}${i+1}.jpg`
  }

  function init() {
    $(".thumbnail img").hover(function() {
        doianh(this);
    });
    // let images = document.querySelectorAll(".thumbnail img")
    // for (let i = 0; i < images.length; i++)
    //     images[i].addEventListener("click", function() {
    //         doianh(this)
    //     })

    let d = new Date()
    let m = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let c = document.getElementById("clock")
    c.innerText = m
    setInterval(function() {
        let d = new Date()
        let m = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        c.innerText = m
    }, 1000);
  }
  let to = 0;
  let le = 0;
  let timer = null;
  function play() {
   
    let incx = 5;
    let incy = 6;
    let d = document.getElementById("ball")
    let a = document.getElementById("myBall")
    timer = setInterval(function() {
        if (to < 0 || to + d.offsetHeight >= a.offsetHeight)
            incy = -incy 
        if (le < 0 || le + d.offsetWidth >= a.offsetWidth)
            incx = -incx
        to += incy;
        le += incx;

        d.style.left = le + "px"
        d.style.top = to + "px"
    }, 10)
  }

  function stop() {
    if (timer != null)
        clearInterval(timer)
  }

$(document).ready(function() {
    $("#show").click(function() {
        $("#ball2").fadeTo(3000, 1, function() {
            $("body").css("background-color", "white")
        });
    })

    $("#hide").click(function() {
        $("#ball2").fadeTo(3000, 0.2, function() {
            $("body").css("background-color", "gold")
        });
    })

    $("#animate").click(function() {
        $("#ball2").animate({
            "left": "500px",
            "width": "250px"
        }, 3000, function() {
            $("body").css("background-color", "green")
        }).animate({
            "top": "300px",
            "width": "400px"
        }, 3000, function() {
            $("body").css("background-color", "gold")
        }).animate({
            "top": 0,
            "left": 0,
            "width": "128px"
        }, 3000, function() {
            $("body").css("background-color", "white")
        })
    })

    
})

$(document).ready(function() {
    $(".btn").on("click", "button", function() {
        let c = $(this).css("background-color")
        $("body").css("background-color", c)
    })

    $(".btn > button").on({
        mouseenter: function() {
            $(this).css("border", "2px solid blue")
        },
        mouseleave: function() {
            $(this).css("border", "none")
        }
    })
    // $(".btn > button").click(function() {
    //     let c = $(this).css("background-color")
    //     $("body").css("background-color", c)
    // })

    $("#color2").change(function() {
        let c = $(this).val()
        let btn = `<button style="background-color: ${c}"></button>`
        $(".btn").append(btn)
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300)
            $("body").css("background-color", "coral")
    })

    $("a.go").click(function() {
        $("html, body").animate({
            "scrollTop": 0
        }, 1000)
    })
})