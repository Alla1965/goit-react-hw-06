// 1. Імпортуємо хук
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
// console.log(contacts);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  
 const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
