import './styles/index.scss';

const tabs = options => {
  const max = options?.max || 10;
  const elementId = options?.elementId || 'tabs';
  const controlsClass = options?.controlsClass || `${elementId}__control`;
  const activeClass = options?.activeClass || `${controlsClass}_active`;
  const hiddenClass = options?.hiddenClass || `${controlsClass}_hidden`;
  const tabs = document.getElementById(elementId);
  const extra = document.querySelector(options?.extra || null);
  const extraHandler = options?.extraHandler || null;

  if (!tabs) return;

  const activeСontrol = tabs.getElementsByClassName(activeClass);
  const controls = tabs.getElementsByClassName(controlsClass);

  const toggleTabs = ({target}) => {
    const button = target.closest(`.${controlsClass}`);

    if (!button || button.classList.contains(activeClass)) return;

    const prev = activeСontrol[0].dataset.conrtolId;
    activeСontrol[0].classList.remove(activeClass);
    button.classList.add(activeClass);

    extra && tabs.querySelector(`.${activeClass}+.${elementId}__info`).append(extra);
    extraHandler && extraHandler(prev, button.dataset.conrtolId);
  };

  tabs.style.cssText = `--tabs-control-count: ${
    (controls.length > max ? max : controls.length) + 2
  }`;
  [...controls].forEach((control, index) => {
    control.classList.remove(activeClass);
    control.setAttribute('tabindex', 1);
    control.dataset.conrtolId = index;
    control.setAttribute('title', control.textContent);
    index >= max && control.classList.add(hiddenClass);
    !index && control.classList.add(activeClass);
    extra && tabs.querySelector(`.${activeClass}+.${elementId}__info`).append(extra);
  });

  tabs.addEventListener('click', toggleTabs);
};

export default tabs;
