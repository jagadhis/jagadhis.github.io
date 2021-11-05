const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "Reactjs",
        weight: 13.3,
      },
      {
        text: "css3",
        weight: 8,
      },
      {
        text: "javascript",
        weight: 14,
      },
      {
        text: "Html",
        weight: 5,
      },
      {
        text: "programming",
        weight: 7,
      },
      {
        text: "TailwindCSS",
        weight: 10,
      },
      {
        text: "Firebase",
        weight: 9,
      },
      {
        text: "Nextjs",
        weight: 12.3,
      },
      {
        text: "API",
        weight: 7,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Front-end Web Developer.",
        "love everything about code.",
        "work mostly with Reactjs",
        "solve javascript problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#000000",
          "background-color": "#96C7C1",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
