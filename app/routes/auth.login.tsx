
// app/routes/auth.login.tsx
import { json, redirect } from '@remix-run/node'
import { Form, useActionData, useNavigation } from '@remix-run/react'
import type { ActionFunctionArgs } from '@remix-run/node'
import { createSupabaseServerClient } from "~/utils/supabase.server";

const getErrorMessage = (error: string): string => {
  switch (error) {
    case 'Invalid login credentials':
      return 'Invalid email or password. Please check your credentials and try again.'
    case 'Email not confirmed':
      return 'Please check your email and click the confirmation link before signing in.'
    case 'Too many requests':
      return 'Too many login attempts. Please wait a few minutes before trying again.'
    case 'Invalid email':
      return 'Please enter a valid email address.'
    default:
      return error
  }
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const { supabase, headers } = createSupabaseServerClient(request)
  const formData = await request.formData()
  
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))

  // Basic validation
  if (!email || !password) {
    return json({ error: 'Email and password are required' }, { headers })
  }

  if (!email.includes('@')) {
    return json({ error: 'Please enter a valid email address' }, { headers })
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return json({ error: getErrorMessage(error.message) }, { headers })
    }

    return redirect('/dashboard', { headers })
  } catch (err) {
    return json({ error: 'An unexpected error occurred. Please try again.' }, { headers })
  }
}

export default function Login() {
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-text">
            Sign in to your account
          </h1>
          <p className="mt-2 text-brand-text/70">
            Welcome back to Bags of Laundry
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {actionData?.error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {actionData.error}
            </div>
          )}

          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-primary text-white py-3 px-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </Form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/auth/signup" className="font-medium text-brand-primary hover:text-brand-primary/80">
              Sign up

            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
