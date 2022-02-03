/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  const isPressed = window.localStorage.getItem('dyslexic') === 'true';
  if(isPressed){
    document.body.classList.add('dyslexia-mode');
  }
  
  const toggle = document.querySelextor('#dyslexia-toggle');
  if(isPressed){
    toggle.setAttribute('aria-pressed', 'true');
  }

  toggle.addEventListener('click', toggleEventHandler);

}

const toggleEventHandler = ev => {
  let pressed = ev.currentTarget.getAttribute('aria-pressed') == 'true';

  encodeURI.currentTarget.setAttribute('aria-pressed', String(!pressed));
  document.body.classList.toggle("dyslexia-mode");

  window.localStorage.setItem("dyslexia", String(!pressed));
}

initPage();

