$(document).ready(function() {
  
  let startTime = 0;     //STARTボタンをクリックした時刻
  let currentTime = 0;   //現在の時刻
  let elapsedTime = 0;   //STARTボタンを押してからSTOPを押すまでの経過時間
  let setTimeoutId = ""; //setTimeoutを格納
  
  //タイマーの経過時間を取得
  function runningTimer() {
    currentTime = Date.now();
    displayTimer();
    setTimeoutId = setTimeout(function () {
      runningTimer();
    },10)
  }
  
  //時間を変換
  function displayTimer() {
    const display = new Date(currentTime - startTime + elapsedTime);
    const hours = (display.getHours()-9);
    const minutes = (display.getMinutes());
    const seconds = (display.getSeconds());
    const milliSeconds = (display.getMilliseconds());
    $("#timer").text(`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(milliSeconds).padStart(3,'0')}`);
  }

  //ボタンの活性・非活性
  function timerInitial() {
    $("#start").removeClass("disabled");
    $("#stop").addClass("disabled");
    $("#reset").addClass("disabled");
  }

  function timerRunning() {
    $("#start").addClass("disabled");
    $("#stop").removeClass("disabled");
    $("#reset").removeClass("disabled");
  }

  function timerStopped() {
    $("#start").removeClass("disabled");
    $("#stop").addClass("disabled");
    $("#reset").removeClass("disabled");
  }

  $("#start").click(function() {
    if($(this).hasClass('disabled')){
      return;
    }
    timerRunning()
    startTime = Date.now();
    runningTimer();
  });

  $("#stop").click(function() {
    if($(this).hasClass('disabled')){
      return;
    }
    timerStopped()
    elapsedTime += currentTime - startTime;
    clearTimeout(setTimeoutId);
  });

  $("#reset").click(function() {
    if($(this).hasClass('disabled')){
      return;
    }
    timerInitial()
    clearTimeout(setTimeoutId);
    elapsedTime = 0;
    $("#timer").text("00:00:00:000");
  });
  
    //ボタンの表示設定の初期値
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;

  //STARTボタンが押された時の表示
  $("#start").on("click",function() {
    $("#start").css("opacity","0.5"); 
  });
  
  $("#start").on("click",function() {
    $("#start").css("box-shadow","none"); 
  });
  
  $("#start").on("click",function() {
    $("#stop,#reset").css("opacity","1"); 
  });
  
  $("#start").on("click",function() {
    $("#stop,#reset").css("box-shadow","0 10px 0 #778899"); 
  });
  
  $("#start").on("click",function() {
    $("#stop,#reset").prop("disabled",false); 
  });
  
  //STOPボタンが押された時の表示
  $("#stop").on("click",function() {
    $("#stop").css("opacity","0.5"); 
  });
  
  $("#stop").on("click",function() {
    $("#stop").css("box-shadow","none"); 
  });
  
  $("#stop").on("click",function() {
    $("#start,#reset").css("opacity","1"); 
  });
  
  $("#stop").on("click",function() {
    $("#start,#reset").css("box-shadow","0 10px 0 #778899"); 
  });
  
  $("#stop").on("click",function() {
    $("#start,#reset").prop("disabled",false); 
  });
  
  //RESETボタンが押された時の表示
  $("#reset").on("click",function() {
    $("#stop,#reset").css("opacity","0.5"); 
  });
  
  $("#reset").on("click",function() {
    $("#stop,#reset").css("box-shadow","none"); 
  });
  
  $("#reset").on("click",function() {
    $("#start").css("opacity","1"); 
  });
  
  $("#reset").on("click",function() {
    $("#start").css("box-shadow","0 10px 0 #778899"); 
  });
  
  $("#reset").on("click",function() {
    $("#start").prop("disabled",false); 
  });
  
  $("#reset").on("click",function() {
    $("#stop,#reset").prop("disabled",true); 
  });

});