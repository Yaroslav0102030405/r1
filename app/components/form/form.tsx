import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const Form = () => {
  // State for input values
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // State for validation errors
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // --- Validation Functions ---
  const validateName = (name: string): boolean => {
    // Allows Cyrillic letters, starting with an uppercase letter
    const nameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ']*$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email: string): boolean => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  // --- Change Handlers ---
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    if (!validateName(newName)) {
      setNameError("Ім'я повинно починатися з великої літери та містити лише українські літери.");
    } else {
      setNameError(null);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      setEmailError("Будь ласка, введіть дійсну адресу електронної пошти.");
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Пароль повинен містити мінімум 8 символів, включаючи великі, малі літери та цифри."
      );
    } else {
      setPasswordError(null);
    }
  };

  // --- Submit Handler ---
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Re-validate all fields on submit to catch any unhandled errors
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isNameValid) {
      setNameError("Ім'я повинно починатися з великої літери та містити лише українські літери.");
    }
    if (!isEmailValid) {
      setEmailError("Будь ласка, введіть дійсну адресу електронної пошти.");
    }
    if (!isPasswordValid) {
      setPasswordError(
        "Пароль повинен містити мінімум 8 символів, включаючи великі, малі літери та цифри."
      );
    }

    // If all fields are valid, submit the form
    if (isNameValid && isEmailValid && isPasswordValid) {
      alert("Форма успішно відправлена!");
      // Here you would typically send the data to a server
      console.log({ name, email, password });
      // Optionally reset the form fields
      setName("");
      setEmail("");
      setPassword("");
      setNameError(null);
      setEmailError(null);
      setPasswordError(null);
    } else {
      alert("Будь ласка, виправте помилки у формі.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Олег"
          />
        </label>
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        
        <label>
          Електронна пошта:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@email.com"
          />
        </label>
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Мінімум 8 символів"
          />
        </label>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        <button type="submit">Відправити</button>
      </form>
    </>
  );
};

export default Form;