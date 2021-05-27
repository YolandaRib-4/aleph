import React from 'react';
import styles from '../styles/Filter.module.css';

const Filter = ({ onChange }) => {
    return <input placeholder='Buscar una película...' onChange={(event) => { onChange(event.target.value) }} className={styles.searchBar} />
}

export default Filter