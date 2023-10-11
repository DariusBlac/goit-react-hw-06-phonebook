import css from './Filter.module.css';

export const Filter = ({ filterContact }) => {
  const inputFilterValue = event => {
    const value = event.target.value;
    filterContact(value);
  };
  return (
    <div>
      <h3 className={css.title}>Filter by Name</h3>
      <input type="text" onChange={inputFilterValue} className={css.input} />
    </div>
  );
};
