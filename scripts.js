$(document).ready(function () {
  const numBoxes = $(".box").length; // Count the total number of boxes
  const radius = 800; // The radius of the imaginary sphere

  $(".box").each(function (index) {
    const randomClass = Math.random() < 0.5 ? "thumb-small" : "thumb-normal"; // Randomly choose between the two classes

    // Use spherical coordinates to position boxes
    const phi = Math.acos(-1 + (2 * index) / numBoxes); // phi is the polar angle
    const theta = Math.sqrt(numBoxes * Math.PI) * phi; // theta is the azimuthal angle
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    $(this)
      .addClass(randomClass)
      .css({
        transform: `translate3d(${x}px, ${y}px, ${z}px)`,
        top: "50%",
        left: "50%",
        position: "absolute",
        margin: "-25px 0 0 -25px" // Center the boxes
      });
  });

  $(document).mousemove(function (e) {
    const centerX = $(window).width() / 2;
    const centerY = $(window).height() / 2;
    const deltaX = e.pageX - centerX;
    const deltaY = e.pageY - centerY;

    $("#container").css(
      "transform",
      `rotateX(${deltaY / -18}deg) rotateY(${deltaX / 18}deg)`
    );

    const logoRotationX = deltaY / 18; // Adjust sensitivity as needed
    const logoRotationY = deltaX / 18; // Adjust sensitivity as needed

    $(".logo").css(
      "transform",
      `translate(-50%, -50%) perspective(800px) rotateX(${logoRotationX}deg) rotateY(${logoRotationY}deg)`
    );
  });
});
