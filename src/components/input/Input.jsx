"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./Input.module.css";

function Input({
  label,
  value,
  onChange,
  placeholder = "Escribe aquí",
  type = "text",
  showResults = false,
  items = [],
  showIcon = true,
  name,
}) {
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputWrapper}>
      {showIcon && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61d432a72ff1dada2a8f96db060757b2443a3653?placeholderIfAbsent=true&apiKey=b846614d0ea04d12bdbfa651b1d58a0f"
            alt="Icono de entrada"
            className={styles.icon}
          />
        )}
        <input
          type={type}
          name={name}    
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
          aria-label={label || placeholder}
         
        />
      </div>

      {showResults && filteredItems.length > 0 && (
        <ul className={styles.resultList}>
          {filteredItems.map((item, index) => (
            <li key={index} className={styles.resultItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Input;
