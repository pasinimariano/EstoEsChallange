import * as Yup from 'yup'

export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .max(255, 'El máximo de caracteres es de 255')
    .required('El email es requerido'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
    )
    .min(8, 'El mínimo de caracteres es de 8')
    .max(20, 'El máximo de caracteres es de 20')
    .required('La contraseña es requerida')
})

export const createUserSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'El mínimo de caracteres es de 2')
    .max(50, 'El máximo de caracteres es de 50')
    .required('El nombre es requerido'),
  lastname: Yup.string()
    .min(3, 'El mínimo de caracteres es de 3')
    .max(50, 'El máximo de caracteres es de 50')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Email invalido')
    .max(255, 'El máximo de caracteres es de 255')
    .required('El email es requerido'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
    )
    .min(8, 'El mínimo de caracteres es de 8')
    .max(20, 'El máximo de caracteres es de 20')
    .required('La contraseña es requerida')
})
