
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #228be6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c7ed6;
  }

  &:disabled {
    background-color: #74c0fc;
    cursor: not-allowed;
  }
`;

const ToggleContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const ToggleLink = styled.span`
  color: #228be6;
  cursor: pointer;
  text-decoration: underline;
`;

const Alert = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #fff5f5;
  border: 1px solid #fed7d7;
  color: #e53e3e;
`;

type AuthFormProps = {
  mode: 'login' | 'signup';
};

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

type FormValues = z.infer<typeof schema>;

const AuthForm = ({ mode }: AuthFormProps) => {
  const [formMode, setFormMode] = useState<'login' | 'signup'>(mode);
  const { login, signup, error, loading, clearError } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormValues) => {
    clearError();
    if (formMode === 'login') {
      await login(data.email, data.password);
    } else {
      await signup(data.email, data.password);
    }
  };

  const toggleMode = () => {
    clearError();
    setFormMode(formMode === 'login' ? 'signup' : 'login');
  };

  return (
    <FormContainer>
      <FormTitle>
        {formMode === 'login' ? 'Login to your account' : 'Create a new account'}
      </FormTitle>
      
      {error && <Alert>{error}</Alert>}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register('password')}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>
        
        <Button type="submit" disabled={loading}>
          {loading ? 'Processing...' : formMode === 'login' ? 'Login' : 'Sign Up'}
        </Button>
      </form>
      
      <ToggleContainer>
        {formMode === 'login' ? (
          <p>
            Don't have an account?{' '}
            <ToggleLink onClick={toggleMode}>Sign Up</ToggleLink>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <ToggleLink onClick={toggleMode}>Login</ToggleLink>
          </p>
        )}
      </ToggleContainer>
    </FormContainer>
  );
};

export default AuthForm;