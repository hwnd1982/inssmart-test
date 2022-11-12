const extraHandler = ((state = [], input) => (prev, next) => {
  if (!input) return;

  state[prev] = {
    value: input.value,
    error: input.classList.contains('animate_type_error'),
  };

  input.value = state[next]?.value || '';
  typeof state[next]?.error === 'boolean' &&
    input.classList[state[next]?.error ? 'add' : 'remove']('animate_type_error');
});

export default extraHandler;
