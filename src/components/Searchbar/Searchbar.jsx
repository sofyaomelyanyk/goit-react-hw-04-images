import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../icons/icon.svg';
import s from '../Searchbar/Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    picture: '',
  };

  onChangeName = e => {
    this.setState({ picture: e.currentTarget.value.toLowerCase() });
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (this.state.picture.trim() === '') {
      return toast.warn('Please, enter image name!');
    }

    this.props.addName(this.state.picture);
    this.reset();
  };

  reset = () => {
    this.setState({ picture: '' });
  };

  render() {
    const { picture } = this.state;
    const { onChangeName, onSubmitForm } = this;

    return (
      <header className={s.searchbar}>
        <form className={s['search-form']} onSubmit={onSubmitForm}>
          <button type="submit" className={s['form-button']}>
            <SearchIcon width="30" height="30" />
          </button>

          <input
            className={s['form-input']}
            type="text"
            value={picture}
            onChange={onChangeName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  addName: PropTypes.func,
  onChangeName: PropTypes.func,
  onSubmitForm: PropTypes.func,
};
