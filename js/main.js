// Scrolling behavior

window.sr = ScrollReveal({
    duration: 800,
    distance: '10px',
    scale: .95
  });
  
  // Hover states
  
  var body = document.body;
  
  function addClass(element, nameOfClass) {
      if (element.classList) {
           element.classList.add(nameOfClass);
      }
      else {
          var regExp = new RegExp('(\\s|^)' + nameOfClass + '(\\s|$)');
          if (!element.className.match(regExp)) {
              element.className += " " + nameOfClass;
          }
      }
  }
  
  function removeClass(element, nameOfClass) {
      if (element.classList) {
          element.classList.remove(nameOfClass);
      }
      else {
          var regExp = new RegExp('(\\s|^)' + nameOfClass + '(\\s|$)');
          if (element.className.match(regExp)) {
              element.className.replace(regExp, ' ');
          }
      }
  }
  
  }
  