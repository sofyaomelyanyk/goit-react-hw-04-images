import PropTypes from 'prop-types';
import s from '../Button/Button.module.css'

export const Button = ({text, onClick}) => {
   return(
      <button type="button" className={s.button} onClick={onClick}>{text}</button>
   )
}

Button.propTypes = {
   text: PropTypes.string,
   onClick: PropTypes.func.isRequired
}