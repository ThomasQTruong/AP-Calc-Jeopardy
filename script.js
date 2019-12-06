function init()
{
  // Categories, left to right.
  var categories = ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"];
  // Values of the boxes per row.
  var rowValues = ["100", "200", "300", "400", "500"];

  // Color Format: Text, Background, Border
  var colorStyle = 
  [
    // Categories Box - leave bg blank if you wanna use columnCol.
    ["black", "white", "black"],
    // Points Box - leave bg blank if you want to use columnCol.
    ["black", "", "black"],
    // Question Box
    ["black", "#dac2dc", "black"],
    // Answer Box
    ["black", "#d9ebff", "black"],
    // Inactive Box - text col doesn't matter.
    ["", "lightGray", "black"]
  ];

  // Custom background colors per column.
  var columnCol = ["greenyellow", "#FFFF66", "salmon", "greenyellow", "#FFFF66", "salmon"];

  // Questions and answers of every single box.
  var bQNA =
  [
    // Row A
    [
      // Questions
      [
        "What is the difference between relative and absolute max/min?",
        "What is the Rolle’s Theorem?",
        "What does f’(x) tell us?",
        "For y = x², is y’’ greater than, less than, or equal to 0?",
        "When can Highest Power Rule (HPR) be used?",
        "For:<br>f(x) = x³-3x²+3<br>Sketch the graph.<br>(Make use of domain, range, asymptotes, intercepts, relative extrema, and POI)"
      ],
      // Answers
      [
        "Absolute max is the tallest ∧.<br>Relative max is every ∧.<br>Absolute min is the lowest ∨.<br>Relative min is every ∧.",
        "f'(c) = [f(b)-f(a)]/(b-a) = 0",
        "Relative min/max<br>~ and/or ~<br>The slope of f(x)",
        "y''＞0",
        "HPR can be used when the limit is approaching ∞.",
        "<img src=\"https://cdn.discordapp.com/attachments/226758395502264321/651254176063553566/unknown.png\">"
      ]
    ],
    // Row B
    [
      // Questions
      [
        "Find the extrema of<br>f(x) = 5x³ + 4x²; [-2, 3].",
        "What is the Mean Value Theorem?",
        "For: -2x²+4x+3<br>Find increasing and decreasing interval(s) and rel max/min.<br>Justify your answer.",
        "When does a value qualify as a Point of Inflection?",
        "For:<br>(lim/x→∞) (x/x²-1)<br>Find the limit.",
        "For:<br>f(x) = 2-x-x³<br>Sketch the graph.<br>(Make use of domain, range, asymptotes, intercepts, relative extrema, and POI)"
      ],
      // Answers
      [
        "f'(x) = 15x²-6x<br>f'(x) = 3x(5x-2) = 0<br>x = 0,2/5<br>f(-2) = -52; f(0) = 0<br>f(2/5) = -4/25; f(3) = 108<br>Abs Min occurs @ f(-2) = -52<br>Abs Max occurs @ f(3) = 108",
        "m = f(b)-f(a)/(b-a)",
        "f(x) is ↓ing on (-1 , ∞) b/c f’(x) ＜ 0<br><br>f(x) is ↑ing on (-∞ , -1) b/c f’(x) ＞ 0<br><br>Rel max @ x = 1 b/c f’(x) sign changes from + to -.<br>There is no rel min.",
        "A point qualifies as a POI when f''(x) exists or DNE, x is part of original domain, and f''(x)sign changes.",
        "HPR(lim/x→∞) (x/x²-1)<br>(lim/x→∞) (1/x) → 1/∞ → 0",
        "<img src=\"https://cdn.discordapp.com/attachments/226758395502264321/651254271450284051/unknown.png\">"
      ]
    ],
    // Row C
    [
      // Questions
      [
        "Find the critical points for<br>f(x) = (1/4)x⁴-2x³+(11/2)x²-6x.",
        "Using Rolle’s Thm, find all values in the interval such that f’(c) = 0<br>f(x) = (x-1)(x-2)(x-3) [1 , 2]",
        "For: (x-1)²/³<br>Find increasing and decreasing interval and rel max/min. Justify your answer.",
        "For: f(x) = x³-3x²+3<br>Find the POI and the concavities.",
        "For:<br>(lim/x→∞) (1/2x+sinx)<br>Find the limit.",
        "For: <br>f(x) = |2x-3|<br>Sketch the graph.<br>(Make use of domain, range, asymptotes, intercepts, relative extrema, and POI)"
      ],
      // Answers
      [
        "f(x) = 1/4x⁴-2x³+11/2x²-6x<br>f'(x) = x3-6x2+11x-6 = 0<br>f'(x) = (x-1)(x-2)(x-3) = 0<br>x = 1,2,3",
        "f(1) = 0, f(3) = 0, m = 0<br>f(c) = c³-6c²+11c-6<br>f’(c) = 3c²-12c+11 = 0<br>c = (12±√12)/6<br>f’([6 ± √3]/3) = 0, c = (6 ± √3)/3",
        "f(x) is ↓ing on (-∞, 1) b/c f’(x)＜0<br>f(x) is ↑ing on (1, ∞) b/c f’(x)＞0<br>There is no rel max;<br>Rel min @ x = 1 b/c f’(x) sign changes from - to +.",
        "f'(x) = 3x2-6x, f''(x) = 6x-6<br>6x-6 = 0, x = 1<br>The POI is @ x = 1 b/c x = 1 exists in the original domain and f’(x) sign changes.<br>f(x) is concaving down on (-∞, 1) b/c f''(x)＜0<br>f(x) is concaving up on (1, ∞) b/c f''(x)＞0",
        "(lim/x→∞) (1/2x+sinx) → (1/∞) → 0",
        "<img src=\"https://cdn.discordapp.com/attachments/226758395502264321/651254598321045544/unknown.png\">"
      ]
    ],
    // Row D
    [
      // Questions
      [
        "Find the critical points for<br>g(x) = sin²x+cosx;<br>[0 ≤ x ≤ 2π].",
        "Using Rolle’s Thm, find all values in the interval such that f’(c) = 0<br>f(x) = (x²-2x-3)/(x+2);<br>[-1 , 3]",
        "For: |x²-4x+3|<br>Find increasing and decreasing interval and rel max/min.<br>Justify your answer.",
        "For: f(x) = x²+1/x²-4<br>Find the POI and the concavities.",
        "For:<br>(lim/x→∞) (5x²/x+3)<br>Find the limit.",
        "For:<br>y = 2x-tanx [-π/2, π/2]<br>Sketch the graph.<br>(Make use of domain, range, asymptotes, intercepts, relative extrema, and POI)"
      ],
      // Answers
      [
        "g'(x) = 2sinxcosx-sinx<br>g'(x) = sinx(2cosx-1)<br>x = 0,π/3,π,5π/3",
        "f(-1) = 0, f(3) = 0, m = 0<br>f’(x) = (x²+4x-1)/(x+2)²<br>f’(c²+4c-1) = 0<br>c = (-4±√20)/2<br>c = -2±√5; c ≠ -2-√5<br>f’(-2+√5) = 0, c = -2+√5",
        "f(x) is ↓ing on (-∞, 1)U(2, 3) b/c f’(x)＜0<br><br>f(x) is ↑ing on (1, 2)U(3, ∞) b/c f’(x)＞0<br><br>Rel max @ x = 2 b/c f’(x) sign changes from + to -.<br>Rel min @ x = 1, 3 b/c f’(x) sign changes from - to +.",
        "f'(x) = -10x/(x²-4)²;<br>f''(x) = 10(3x²+4)/(x²-4)²<br>x²-4 = 0; x≠±2<br>There is no POI for f(x) b/c<br>x = -2, 2 doesn’t exist in the original domain.<br>f(x) is concaving down on (-2,2)  b/c f''(x)＜0<br>f(x) is concaving up on (-∞, -2)U(2, ∞) b/c f''(x)＞0",
        "HPR (lim/x→∞) (5x²/x)<br>(lim/x→∞) (5x→-∞)<br>DNE b/c f(x)→-∞",
        "<img src=\"https://cdn.discordapp.com/attachments/226758395502264321/651254735344762910/unknown.png\">"
      ]
    ],
    // Row E
    [
      // Questions
      [
        "Find the extrema of<br>h(x) = (4/3)x√(3-x); [0,3].",
        "Using MVT find value(s) of c<br>f(x) = 2sinx+sin2x;<br>[0, π]<br><br>*Hint:<br>f'(c) = [f(b)-f(a)]/(b-a)",
        "For: f(x) = |x+1|+|x-2|<br>Find increasing and decreasing interval and rel max/min.",
        "For: f(x) = sin(x/2); [0≤x≤4π]<br>Find the POI and the concavities.",
        "Find the limit:<br>(lim/x→∞) (xsin(1/x))<br>(Hint: Let x = 1/a and find the limit as a→0⁺)",
        "For:<br>f(x) = x√(4-x)<br>Sketch the graph.<br>(Make use of domain, range, asymptotes, intercepts, relative extrema, and POI)"
      ],
      // Answers
      [
        "h'(x) = 4/3[(√(3-x))-π/2√(3-x)]<br>= (4√(3-x/3))-(2x/3√(3-x))<br>= -(2x-4/√(3-x))<br>= -(2x-4) = 0; x = 2<br>h(0) = 0, h(2) = 8/3, h(3) = 0<br>Abs Min @ (0, 0), (3, 0)<br>Abs Max @ (2, 8/3)",
        "f(0) = 0, f(π) = 0, m = 0<br>f(x) = 2sinx+sin2x<br>f'(c) = 2cosc+2cos2c<br>f'(c) = 2cosc+2cos2c = 0<br>c = 2π/3",
        "f(x) is ↓ing on (-∞, 0)U(1/2, 1) b/c f’(x)＜0<br><br>f(x) is ↑ing on (2 , ∞)<br>b/c f’(x)＞0<br><br>There is no rel extrema b/c f’(x) sign doesn’t change.",
        "f'(x) = (1/2)cos(x/2);<br>f''(x) = (1/4)cos(x/2)<br>x = 0, 2π, 4π<br>POI for f(x) @ x = 2π exist in the original domain and f'(x) sign changes.<br>f(x) is concaving down on [0, 2π] b/c f''(x)＜0.<br>f(x)is concaving up on [2π, 4π] b/c f''(x)＜0.",
        "(lim/x→0⁺) ((1/a)sina)<br>(lim/x→0⁺) (sina/a) → 1",
        "<img src=\"https://cdn.discordapp.com/attachments/226758395502264321/651255200761249795/unknown.png\">"
      ]
    ]
  ];



  // !!! Do not touch William !!!


  // Adjusts the categories.
  for(i = 0; i < categories.length; i++)
  {
    document.getElementById("cat" + i).innerHTML = categories[i];
    document.getElementById("cat" + i).style.left = i * 168 + "px";
    document.getElementById("cat" + i).style.color = colorStyle[0][0];
    if (colorStyle[0][1] == "") // empty
    {
      document.getElementById("cat" + i).style.backgroundColor = columnCol[i];
    }
    else // contains value.
    {
      document.getElementById("cat" + i).style.backgroundColor = colorStyle[0][1];
    }
    document.getElementById("cat" + i).style.borderColor = colorStyle[0][2];
  }

  // Sets the values and styles of the point boxes.
  var rows = ["a", "b", "c", "d", "e"];
  for(i = 1; i < 6; i++) // row
    for(j = 1; j < 7; j++) // column
    {
      document.getElementById(rows[i - 1] + j).innerHTML = rowValues[i - 1];
      //document.getElementById(rows[i - 1] + j).style.marginLeft = 168 * (j - 1) + "px";
      //document.getElementById(rows[i - 1] + j).style.marginTop = 168 * (i - 1) + 83 + "px";
      document.getElementById(rows[i - 1] + j).style.left = 168 * (j - 1) + "px";
      document.getElementById(rows[i - 1] + j).style.top = 168 * (i - 1) + 83 + "px";
      document.getElementById(rows[i - 1] + j).style.color = colorStyle[1][0];
      document.getElementById(rows[i - 1] + j).style.borderColor = colorStyle[1][2];
      if (colorStyle[1][1] == "") // is empty
        document.getElementById(rows[i - 1] + j).style.backgroundColor = columnCol[j - 1];
      else // not empty
        document.getElementById(rows[i - 1] + j).style.backgroundColor = colorStyle[1][1];
    }

  // Every onclick function.
  var bClick; // box clicked
  // a1
  bClick = document.getElementById("a1");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[0]) // if points.
      gotoQuestion(this, 0, 0, 2, 150);
    else if (this.innerHTML == bQNA[0][0][0]) // if question
      enlargeThing(this, 0, 0, 3, 84);
    else if (this.innerHTML == bQNA[0][1][0]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // a2
  bClick = document.getElementById("a2");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[0]) // if points.
      gotoQuestion(this, 0, 1, 2, 210);
    else if (this.innerHTML == bQNA[0][0][1]) // if question
      enlargeThing(this, 0, 1, 3, 90);
    else if (this.innerHTML == bQNA[0][1][1]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // a3
  bClick = document.getElementById("a3");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[0]) // if points.
      gotoQuestion(this, 0, 2, 2, 200);
    else if (this.innerHTML == bQNA[0][0][2]) // if question
      enlargeThing(this, 0, 2, 3, 140);
    else if (this.innerHTML == bQNA[0][1][2]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // a4
  bClick = document.getElementById("a4");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[0]) // if points.
      gotoQuestion(this, 0, 3, 2, 170);
    else if (this.innerHTML == bQNA[0][0][3]) // if question
      enlargeThing(this, 0, 3, 3, 250);
    else if (this.innerHTML == bQNA[0][1][3]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // a5
  bClick = document.getElementById("a5");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[0]) // if points.
      gotoQuestion(this, 0, 4, 2, 170);
    else if (this.innerHTML == bQNA[0][0][4]) // if question
      enlargeThing(this, 0, 4, 3, 170);
    else if (this.innerHTML == bQNA[0][1][4]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // a6
  bClick = document.getElementById("a6");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[0]) // if points.
      gotoQuestion(this, 0, 5, 2, 115);
    else if (this.innerHTML == bQNA[0][0][5]) // if question
      enlargeThing(this, 0, 5, 3, 115);
    else if (this.innerHTML == bQNA[0][1][5]) // if answer
      enlargeThing(this, "~", "~", 4);
  }

  // b1
  bClick = document.getElementById("b1");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[1]) // if points.
      gotoQuestion(this, 1, 0, 2, 100);
    else if (this.innerHTML == bQNA[1][0][0]) // if question
      enlargeThing(this, 1, 0, 3, 83);
    else if (this.innerHTML == bQNA[1][1][0]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // b2
  bClick = document.getElementById("b2");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[1]) // if points.
      gotoQuestion(this, 1, 1, 2, 200);
    else if (this.innerHTML == bQNA[1][0][1]) // if question
      enlargeThing(this, 1, 1, 3, 133);
    else if (this.innerHTML == bQNA[1][1][1]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // b3
  bClick = document.getElementById("b3");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[1]) // if points.
      gotoQuestion(this, 1, 2, 2, 120);
    else if (this.innerHTML == bQNA[1][0][2]) // if question
      enlargeThing(this, 1, 2, 3, 68);
    else if (this.innerHTML == bQNA[1][1][2]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // b4
  bClick = document.getElementById("b4");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[1]) // if points.
      gotoQuestion(this, 1, 3, 2, 170);
    else if (this.innerHTML == bQNA[1][0][3]) // if question
      enlargeThing(this, 1, 3, 3, 130);
    else if (this.innerHTML == bQNA[1][1][3]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // b5
  bClick = document.getElementById("b5");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[1]) // if points.
      gotoQuestion(this, 1, 4, 2, 125);
    else if (this.innerHTML == bQNA[1][0][4]) // if question
      enlargeThing(this, 1, 4, 3, 82);
    else if (this.innerHTML == bQNA[1][1][4]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // b6
  bClick = document.getElementById("b6");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[1]) // if points.
      gotoQuestion(this, 1, 5, 2, 115);
    else if (this.innerHTML == bQNA[1][0][5]) // if question
      enlargeThing(this, 1, 5, 3, 115);
    else if (this.innerHTML == bQNA[1][1][5]) // if answer
      enlargeThing(this, "~", "~", 4);
  }

  // c1
  bClick = document.getElementById("c1");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[2]) // if points.
      gotoQuestion(this, 2, 0, 2, 95);
    else if (this.innerHTML == bQNA[2][0][0]) // if question
      enlargeThing(this, 2, 0, 3, 90);
    else if (this.innerHTML == bQNA[2][1][0]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // c2
  bClick = document.getElementById("c2");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[2]) // if points.
      gotoQuestion(this, 2, 1, 2, 89);
    else if (this.innerHTML == bQNA[2][0][1]) // if question
      enlargeThing(this, 2, 1, 3, 72);
    else if (this.innerHTML == bQNA[2][1][1]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // c3
  bClick = document.getElementById("c3");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[2]) // if points.
      gotoQuestion(this, 2, 2, 2, 130);
    else if (this.innerHTML == bQNA[2][0][2]) // if question
      enlargeThing(this, 2, 2, 3, 95);
    else if (this.innerHTML == bQNA[2][1][2]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // c4
  bClick = document.getElementById("c4");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[2]) // if points.
      gotoQuestion(this, 2, 3, 2, 125);
    else if (this.innerHTML == bQNA[2][0][3]) // if question
      enlargeThing(this, 2, 3, 3, 79);
    else if (this.innerHTML == bQNA[2][1][3]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // c5
  bClick = document.getElementById("c5");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[2]) // if points.
      gotoQuestion(this, 2, 4, 2, 150);
    else if (this.innerHTML == bQNA[2][0][4]) // if question
      enlargeThing(this, 2, 4, 3, 91);
    else if (this.innerHTML == bQNA[2][1][4]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // c6
  bClick = document.getElementById("c6");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[2]) // if points.
      gotoQuestion(this, 2, 5, 2, 110);
    else if (this.innerHTML == bQNA[2][0][5]) // if question
      enlargeThing(this, 2, 5, 3, 90);
    else if (this.innerHTML == bQNA[2][1][5]) // if answer
      enlargeThing(this, "~", "~", 4);
  }

  // d1
  bClick = document.getElementById("d1");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[3]) // if points.
      gotoQuestion(this, 3, 0, 2, 100);
    else if (this.innerHTML == bQNA[3][0][0]) // if question
      enlargeThing(this, 3, 0, 3, 110);
    else if (this.innerHTML == bQNA[3][1][0]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // d2
  bClick = document.getElementById("d2");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[3]) // if points.
      gotoQuestion(this, 3, 1, 2, 100);
    else if (this.innerHTML == bQNA[3][0][1]) // if question
      enlargeThing(this, 3, 1, 3, 98);
    else if (this.innerHTML == bQNA[3][1][1]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // d3
  bClick = document.getElementById("d3");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[3]) // if points.
      gotoQuestion(this, 3, 2, 2, 130);
    else if (this.innerHTML == bQNA[3][0][2]) // if question
      enlargeThing(this, 3, 2, 3, 80);
    else if (this.innerHTML == bQNA[3][1][2]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // d4
  bClick = document.getElementById("d4");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[3]) // if points.
      gotoQuestion(this, 3, 3, 2, 120);
    else if (this.innerHTML == bQNA[3][0][3]) // if question
      enlargeThing(this, 3, 3, 3, 80);
    else if (this.innerHTML == bQNA[3][1][3]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // d5
  bClick = document.getElementById("d5");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[3]) // if points.
      gotoQuestion(this, 3, 4, 2, 113);
    else if (this.innerHTML == bQNA[3][0][4]) // if question
      enlargeThing(this, 3, 4, 3, 104);
    else if (this.innerHTML == bQNA[3][1][4]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // d6
  bClick = document.getElementById("d6");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[3]) // if points.
      gotoQuestion(this, 3, 5, 2, 105);
    else if (this.innerHTML == bQNA[3][0][5]) // if question
      enlargeThing(this, 3, 5, 3, 90);
    else if (this.innerHTML == bQNA[3][1][5]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // e1
  bClick = document.getElementById("e1");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[4]) // if points.
      gotoQuestion(this, 4, 0, 2, 122);
    else if (this.innerHTML == bQNA[4][0][0]) // if question
      enlargeThing(this, 4, 0, 3, 79);
    else if (this.innerHTML == bQNA[4][1][0]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // e2
  bClick = document.getElementById("e2");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[4]) // if points.
      gotoQuestion(this, 4, 1, 2, 110);
    else if (this.innerHTML == bQNA[4][0][1]) // if question
      enlargeThing(this, 4, 1, 3, 95);
    else if (this.innerHTML == bQNA[4][1][1]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // e3
  bClick = document.getElementById("e3");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[4]) // if points.
      gotoQuestion(this, 4, 2, 2, 113);
    else if (this.innerHTML == bQNA[4][0][2]) // if question
      enlargeThing(this, 4, 2, 3, 80);
    else if (this.innerHTML == bQNA[4][1][2]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // e4
  bClick = document.getElementById("e4");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[4]) // if points.
      gotoQuestion(this, 4, 3, 2, 125);
    else if (this.innerHTML == bQNA[4][0][3]) // if question
      enlargeThing(this, 4, 3, 3, 80);
    else if (this.innerHTML == bQNA[4][1][3]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // e5
  bClick = document.getElementById("e5");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[4]) // if points.
      gotoQuestion(this, 4, 4, 2, 100);
    else if (this.innerHTML == bQNA[4][0][4]) // if question
      enlargeThing(this, 4, 4, 3, 98);
    else if (this.innerHTML == bQNA[4][1][4]) // if answer
      enlargeThing(this, "~", "~", 4);
  }
  // e6
  bClick = document.getElementById("e6");
  bClick.onclick = function()
  {
    if (this.innerHTML == rowValues[4]) // if points.
      gotoQuestion(this, 4, 5, 2, 110);
    else if (this.innerHTML == bQNA[4][0][5]) // if question
      enlargeThing(this, 4, 5, 3, 90);
    else if (this.innerHTML == bQNA[4][1][5]) // if answer
      enlargeThing(this, "~", "~", 4);
  }

  // enlarges the item.
  function enlargeThing(clicked, row, column, cStyle, fSize)
  {
    var modal = document.getElementById("modal");

    modal.style.display = "flex";
    // Blur the contents behind.
    document.getElementById("toBlur").className = "blurEffect";

    if (clicked.innerHTML.length > 0) // is a text
    {
      document.getElementById("popupBox").innerHTML = "<div id=\"formatEnlarge\">"+ clicked.innerHTML + "</div>";
    }
    else // is an image.
    {
      document.getElementById("popupBox").innerHTML = "<img src=" + clicked.src + ">";
    }

    window.onclick = function(event)
    {
      // if user exits the popup.
      if (event.target == modal) 
      {
        modal.style.display = "none";
        // Unblur the contents.
        document.getElementById("toBlur").className = "";

        if (row != "~" && column != "~") // both got indexes
        {
          clicked.style.fontSize = fSize + "%";
          clicked.innerHTML = bQNA[row][1][column];
          clicked.style.color = colorStyle[cStyle][0];
          clicked.style.backgroundColor = colorStyle[cStyle][1];
          clicked.style.borderColor = colorStyle[cStyle][2];
        }
        else
        {
          clicked.innerHTML = "";
          clicked.style.backgroundColor = colorStyle[cStyle][1];
          clicked.style.borderColor = colorStyle[cStyle][2];
        }
      }
    }
  }

  function gotoQuestion(clicked, row, column, cStyle, fSize)
  {
    clicked.style.fontSize = fSize + "%";
    clicked.innerHTML = bQNA[row][0][column];
    clicked.style.color = colorStyle[cStyle][0];
    clicked.style.backgroundColor = colorStyle[cStyle][1];
    clicked.style.borderColor = colorStyle[cStyle][2];
  }
}