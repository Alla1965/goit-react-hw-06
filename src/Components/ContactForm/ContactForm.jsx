import { Button } from '../Button/Button';
import css from './ContactForm.module.css';
// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
// import { addContact } from "../../redux/actions";
import { addContacts } from "../../redux/contactsSlice";

export const ContactForm = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
console.log(dispatch);

//  функція, яка викликається при натисканні кнопки "Add task"
  const handleSubmit = (event) => {
    event.preventDefault(); // зупиняє перезавантаження сторінки
    const form = event.target;
    // 4. Викликаємо фабрику екшену та передаємо дані для payload
    // 5. Відправляємо результат - екшен створення завдання
    dispatch(addContacts({
	    id: crypto.randomUUID(),
	    // completed: false,
        name: form.elements.name.value,
        number: form.elements.number.value
	  }));
    form.reset(); // очищає поле після надсилання
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
          <p className={css.textForm} >Name</p>
          <input
        className={css.field}
        type="text"
        name="name"
        // placeholder="Enter contact name..."
          />
          <p className={css.textForm} >Number</p>
          <input
        className={css.field}
        type="text"
        name="number"
        // placeholder="Enter number..."
          />  
      <Button className={css.buttonForm} type="submit">Add contact</Button>
    </form>
  );
};
