import React from 'react'
import FormInput from '../../shared/components/form/FormInput'

export default function Login() {
  return (
    <main>
      <div>
        <form>
          <h2>Login</h2>
          <FormInput type="text" id="name"/>
          <FormInput type="password" id="password"/>
        </form>
      </div>
      </main>
  )
}