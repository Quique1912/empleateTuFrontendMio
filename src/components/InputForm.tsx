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
        <div className="mb-5 bg-red-200 p-4 rounded-lg">
          <label htmlFor={name} className="block mb-2 text-sm font-medium text-red-700 dark:text-white">
            {text}
          </label>
          <input
            value={value}
            checked={checked}
            onChange={handleChange}
            type={type}
            name={name}
            id={name}
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder={placeholder}
          />
          {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>}
        </div>
      );
    }

export default InputForm