 import { Layout } from './Layout/Layout';
import { ContactForm  } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList  } from './ContactList/ContactList';

 //Layout задає базову структуру сторінки.
 const App = () => {
  return (
    <Layout >
       <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox /> 
      <ContactList />
    </Layout>
  );
};
export default App;