$(document).ready(() => {
  let music = new Audio("Savannah.mp3");
  music.volume = 0.5;

  var previousVolume = music.volume;

  var value = music.volume * 100;
  //VOLUME BAR//
  $("input").on("input", () => {
    value = $("input").val();
    $("span").html(value + "%");
    music.volume = value / 100;

    if (value == 0) {
      $(".fa-volume-down").css("display", "none");
      $(".fa-volume-mute").css("display", "block");
    } else if (value < 51) {
      $(".fa-volume-mute").css("display", "none");
      $(".fa-volume-down").css("display", "block");
      $(".fa-volume-up").css("display", "none");
    } else {
      $(".fa-volume-mute").css("display", "none");
      $(".fa-volume-down").css("display", "none");
      $(".fa-volume-up").css("display", "block");
    }
    previousVolume = music.volume;
  });

  //SPEAKER//

  $(".fa-volume-mute").on("click", () => {
    music.volume = previousVolume;

    $(".fa-volume-mute").css("display", "none");

    return music.volume <= 0.5
      ? $(".fa-volume-down").css("display", "block")
      : $(".fa-volume-up").css("display", "block");
  });

  $(".fa-volume-down").on("click", () => {
    value = 0;
    music.volume = value;
    $(".fa-volume-mute").css("display", "block");
    $(".fa-volume-down").css("display", "none");
    $(".fa-volume-up").css("display", "none");
  });

  $(".fa-volume-up").on("click", () => {
    value = 0;
    music.volume = value;
    $(".fa-volume-mute").css("display", "block");
    $(".fa-volume-down").css("display", "none");
    $(".fa-volume-up").css("display", "none");
  });

  //CONTROL BUTTONS//
  $(".fa-play").on("click", () => {
    music.play();
    $(".fa-play").css("display", "none");
    $(".fa-pause").css("display", "block");
  });

  $(".fa-pause").on("click", () => {
    music.pause();
    $(".fa-play").css("display", "block");
    $(".fa-pause").css("display", "none");
  });

  $(".fa-stop").on("click", () => {
    music.pause();
    music.volume = 0.5;
    music.currentTime = 0;
    value = 50;
    $("input").val(value);
    $("span").html(value + "%");
    $(".fa-play").css("display", "block");
    $(".fa-pause").css("display", "none");
    $(".fa-volume-down").css("display", "block");
    $(".fa-volume-up").css("display", "none");
    $(".fa-volume-mute").css("display", "none");
  });
});
