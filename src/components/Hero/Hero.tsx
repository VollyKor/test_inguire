import AddPostForm from '../Forms/AddPostForm/AddPostForm';
import Img from '../../images/climbing.jpg';
import s from './Hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <div className={s.hero}>
      <AddPostForm />
      <img className={s.img} src={Img} alt="climbing guy" />
    </div>
  );
}
