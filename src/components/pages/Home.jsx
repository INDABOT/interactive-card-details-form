import Cards from "../Card/Cards";
import Form from "../Form/Form";
import Gradient from "../Gradient/Gradient";
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Gradient />
        <Cards />
      </div>

      <Form />
    </div>
  );
};

export default Home;
