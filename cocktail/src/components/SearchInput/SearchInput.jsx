import { useRef } from 'react';
import styles from './SearchInput.module.css';

export const SearchInput = () => {
  const searchValue = useRef();
  return (
    <section className={styles.search}>
      <form className={styles['search-form']}>
        <div className={styles['form-control']}>
          <label htmlFor="name">Search Cocktail</label>
          <input type="text" name="name" id="name" ref={searchValue} />
        </div>
      </form>
    </section>
  );
};
