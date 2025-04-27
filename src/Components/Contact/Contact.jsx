import { useDispatch } from 'react-redux';
import css from './Contact.module.css';


// 2. Імпортуємо фабрику екшену
// import { deleteContact } from "../../redux/actions";
import { deleteContacts } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => {
 // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення завдання
  const handleDelete = () => {
	  dispatch(deleteContacts(contact.id))
  };
 
  return (
    <div className={css.wrapper}>
      <div className={css.wrapContact}  >
        <div className={css.contactItem}>
           <svg className={css.icon}>
            <use href="/image/icons/symbol-defs.svg#icon-user"></use>
        </svg>
        <p className={css.nameContact}>{contact.name}</p>
                </div>
        <div className={css.contactItem}>
           <svg className={css.icon}>
            <use href="/image/icons/symbol-defs.svg#icon-phone"></use>
        </svg> 
        <p className={css.nameContact}>{contact.number}</p>
       </div>
       
        
      </div>
               
      
      <button className={css.btn} onClick={handleDelete}>Delete
              </button>
    </div>
  );
};

