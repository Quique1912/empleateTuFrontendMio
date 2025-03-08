import React from 'react'
interface InputFormProps {
    text: string
    name: string
    value?: string
    checked?: boolean
    placeholder?: string
    type?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: string | undefined
    }
    function InputForm({ text, name, value, checked, handleChange, error, placeholder = '', type = 'input' }: InputFormProps) {
      return (
        <div className="mb-5 bg-yellow-200 p-4 rounded-lg">
          <label htmlFor={name} className="block mb-2 text-sm font-medium text-yellow-700 dark:text-white">
            {text}
          </label>
          <input
            value={value}
            checked={checked}
            onChange={handleChange}
            type={type}
            name={name}
            id={name}
            className="bg-yellow-50 border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder={placeholder}
          />
          {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>}
        </div>
      );
    }

export default InputForm