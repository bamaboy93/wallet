import * as Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Loader.module.css';


const LoaderSpinner = ({ color = 'rgba(36, 204, 167 ,0.85)' }) => {
  return (
    <div className={s.container}>
      <Loader
        className={s.LoaderSpinner}
        type="ThreeDots"
        color={color}
        height={100}
        width={100}
        timeout={4000}
      />
    </div>
  );
};

export default LoaderSpinner;