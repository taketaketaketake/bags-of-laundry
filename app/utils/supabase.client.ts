import { createBrowserClient } from '@supabase/ssr'

export const createSupabaseBrowserClient = () => {
  if (typeof window === 'undefined') {
    throw new Error('createSupabaseBrowserClient should only be called on the client side')
  }
  
  return createBrowserClient(
    window.ENV.SUPABASE_URL,
    window.ENV.SUPABASE_ANON_KEY
  )
}
  