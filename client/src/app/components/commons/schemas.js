import * as Yup from 'yup'

export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .max(255, 'Max 255 characters')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'At least one uppercase, one lowercase and one number required'
    )
    .min(8, 'Min 8 characters')
    .max(20, 'Max 20 characters')
    .required('Password is required')
})

export const createUserSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Min 2 characters')
    .max(50, 'Max 50 characters')
    .required('Firstname is required'),
  lastname: Yup.string()
    .min(3, 'Min 3 characters')
    .max(50, 'Max 50 characters')
    .required('Lastname is required'),
  email: Yup.string()
    .email('Invalid email')
    .max(255, 'Max 255 characters')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'At least one uppercase, one lowercase and one number required'
    )
    .min(8, 'Min 8 characters')
    .max(20, 'Max 20 characters')
    .required('Password is required')
})

export const createProjectSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Min 5 characters')
    .max(50, 'Max 50 characters')
    .required('Name is required'),
  description: Yup.string()
    .min(10, 'Min 10 characters')
    .max(252, 'Max 255 characters')
    .required('Description required'),
  manager: Yup.string().required('The project manager is required')
})
