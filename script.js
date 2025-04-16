
$(document).ready(function () {
  const audio = $("#bgm")[0];
  $("#toggleMusic").click(function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  $("#sendBtn").click(function () {
    const message = $("#chatInput").val();
    if (message.trim() !== "") {
      $("#chatLog").append("<div>觀眾： " + message + "</div>");
      $("#chatInput").val("");
    }
  });

  $("#egg").click(function () {
    $("#eggDialog").fadeToggle();
  });
});
