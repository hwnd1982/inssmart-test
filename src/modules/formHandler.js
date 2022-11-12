const formHandler = () => {
  const [form] = document.forms;
  const [input] = form.elements;

  const animate = target => {
    target.classList.remove('animate_type_error');
    setTimeout(() => target.classList.add('animate_type_error'), 0);
  };

  const inputHandler = event => {
    const {target, type} = event;

    switch (type) {
      case 'input':
        target.value = target.value.replaceAll(/[^а-яё\s\d,"-]/ig, '');
        if (/^(\d|[А-ЯЁ])(.){4,}/.test(input.value)) {
          target.classList.remove('animate_type_error');
          target.removeAttribute('title');
        }
        return;
      case 'blur':
        target.value = target.value
            .replaceAll(/^[,"-\s]+|[,-\s]+$/g, '')
            .replace(/(^[а-яе])/, match => match.toUpperCase());
        return;
      case 'invalid':
        event.preventDefault();
        target.setAttribute('title', 'Ошибка: Заполните это поле.');
        animate(target);
        return;
    }
  };

  const sendForm = event => {
    event.preventDefault();
    if (!/^(\d|[А-ЯЁ])(.){4,}/.test(input.value)) {
      input.setAttribute('title', 'Ошибка: Минимум 5 симполов.');
      animate(input);
      return;
    }

    const activeList = document.querySelector('.tabs__control_active + .tabs__info .info__list');
    const newListItem = activeList.firstElementChild.cloneNode(true);

    newListItem.textContent = input.value;
    activeList.append(newListItem);
    input.removeAttribute('title');
    input.value = '';
  };

  form.addEventListener('submit', sendForm);
  input.addEventListener('input', inputHandler);
  input.addEventListener('blur', inputHandler);
  input.addEventListener('invalid', inputHandler);
};

export default formHandler;
