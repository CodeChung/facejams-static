import React, { Component } from 'react'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='registration-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user-name'>
          <label htmlFor='registration-user-name'>
            User name
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='registration-user-name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='registration-password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='registration-password'>
          </input>
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}

export default RegistrationForm